import { NextResponse } from "next/server"
import type { ContactFormData } from "@/lib/types"

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validation basique
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Tous les champs requis doivent être remplis" }, { status: 400 })
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 })
    }

    // TODO: Intégrer avec un service d'email (SendGrid, Resend, etc.)
    // Pour l'instant, on log simplement les données
    console.log("Contact form submission:", data)

    // Simuler un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // En production, vous pouvez utiliser un service comme Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'contact@votredomaine.com',
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${data.name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Sujet:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
    });
    */

    return NextResponse.json({ success: true, message: "Message envoyé avec succès" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Une erreur est survenue lors de l'envoi du message" }, { status: 500 })
  }
}
