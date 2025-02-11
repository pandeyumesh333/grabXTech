import { NextRequest, NextResponse } from "next/server";
import User from "@/models/users";
import mongoose from "@/lib/connect";

export async function POST(request: NextRequest) {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string );
        const { firstName, lastName, email, password, phone, company, message } = await request.json();
        const user = await User.create({ firstName, lastName, email, password, phone, company, message });
        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    } finally {
        await mongoose.disconnect();
    }
}
