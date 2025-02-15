

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/users";
import connectDB from "@/lib/connect"; // Ensure this properly connects to MongoDB

export async function POST(request: NextRequest) {
    try {
        // Connect to MongoDB
        await connectDB();

        // Parse JSON body
        const { firstName, lastName, email, password, phone, company, message } = await request.json();

        // Create a new user document
        const user = await User.create({ firstName, lastName, email, password, phone, company, message });
        console.log("user data is saved", user)
        // Return success response
        return NextResponse.json({ success: true, user }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}

