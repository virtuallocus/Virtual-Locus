import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, phone, company, service, message } = await req.json();

        console.log("--- New Contact Form Submission ---");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Company:", company || "N/A");
        console.log("Service:", service);
        console.log("Message:", message);

        try {
            await connectDB();
            const newContact = new Contact({ name, email, phone, company, service, message });
            await newContact.save();
            console.log("✅ Saved to MongoDB");

            // --- Send Email via Resend ---
            if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_your_api_key_here') {
                await resend.emails.send({
                    from: 'Virtual Locus <onboarding@resend.dev>',
                    to: 'virtuallocus@gmail.com',
                    subject: `🚀 New Lead: ${name} (${service})`,
                    replyTo: email,
                    html: `
                        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                            <h2 style="color: #56B2C7;">New Project Inquiry</h2>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Phone:</strong> ${phone}</p>
                            <p><strong>Company:</strong> ${company || "N/A"}</p>
                            <p><strong>Service:</strong> ${service}</p>
                            <p style="margin-top: 20px;"><strong>Message:</strong></p>
                            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #56B2C7;">
                                ${message}
                            </div>
                            <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
                            <p style="font-size: 12px; color: #999;">Sent from your Virtual Locus contact form.</p>
                        </div>
                    `
                });
                console.log("📧 Email notification sent successfully");
            }
        } catch (dbError: any) {
            console.error("❌ Database Error (Submission still received in log):", dbError.message);
            // We still return 201 so the UI shows success, but we log the error
        }

        return NextResponse.json(
            { message: "Feedback sent successfully!" },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error in contact API:", error);
        return NextResponse.json(
            { message: "Failed to process request", error: error.message },
            { status: 500 }
        );
    }
}
