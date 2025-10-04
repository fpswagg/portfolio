import { NextResponse } from "next/server";
import type { ContactFormData } from "@/lib/types";
import { contact_us } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validation basique
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    await contact_us(data.name, data.email, data.subject, data.message);

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
