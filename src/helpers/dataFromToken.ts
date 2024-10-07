import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export const getDataFromToken = (request: NextRequest)=>{

    interface DecodedToken {
        id: string; // Assuming the token contains an `id` field
    }


    try {
        const token = request.cookies.get("token")?.value || "";

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as DecodedToken;
        return decodedToken.id
    } catch (error: any) {
        console.error("Token verification failed:", error);
        return null;
    }
}