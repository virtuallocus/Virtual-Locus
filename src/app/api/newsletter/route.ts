import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Newsletter from "@/models/Newsletter";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json(
                { message: "Please provide a valid email address" },
                { status: 400 }
            );
        }

        await connectDB();

        // Check if already exists
        const existing = await Newsletter.findOne({ email });
        if (existing) {
            return NextResponse.json(
                { message: "You are already on the list!" },
                { status: 409 }
            );
        }

        const newSubscriber = new Newsletter({ email });
        await newSubscriber.save();

        return NextResponse.json(
            { message: "Subscription successful!" },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error in newsletter API:", error);
        return NextResponse.json(
            { message: "Failed to process request", error: error.message },
            { status: 500 }
        );
    }
}
