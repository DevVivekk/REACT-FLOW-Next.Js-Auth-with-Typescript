import { connecaToDb } from "@/dbConnection/dbconfig";
import { MyAuthentication } from "@/helpers/auth";
import User from "@/models/usermode";
import { NextResponse, NextRequest } from 'next/server';

connecaToDb();

export async function GET(request: NextRequest) {
    // Extract data from token
    const userId = await MyAuthentication(request);
    const userValue = await User.findOne({ _id: userId }).select("-password");
    if (!userValue) {
        return NextResponse.json({ error: "Token invalid!" }, { status: 401 });
    } else {
        return NextResponse.json({ data: userValue }, { status: 201 });
    }
}
