import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
console.log(name,password)
    // Simulating database storage (Replace this with MongoDB later)
    if (email === "mjjjjj523@gmail.com") {
      return NextResponse.json({ message: "Signup successful!" });
    }

    return NextResponse.json({ error: "Email already taken" }, { status: 400 });
    // Simulate successful user creation
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" +error },
      { status: 500 }
    );
  }
}
