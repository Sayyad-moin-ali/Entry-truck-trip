import { connect } from '@/src/dbConfig/dbConfig'
import User from '@/src/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import { getDataFromToken } from '@/src/helpers/dataFromToken'

connect();

export async function POST(request: NextRequest) {
  const userId=  await getDataFromToken(request)
  const user= await User.findOne({id:userId}).select("-password")
  if(!user){
    return NextResponse.json({ error: "invalid token" },
        { status: 400 })
  }
  return NextResponse.json({
    message:"user found",
    data:user
  })
}