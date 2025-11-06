import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, password } = await req.json();
  if (username === "admin" && password === "1234") {
    const token = Buffer.from(`${username}:${password}`).toString("base64");

    const res = NextResponse.json({ success: true });
    res.cookies.set("token", token, { httpOnly: true, path: "/" });
    return res;
  }

  return NextResponse.json(
    { success: false, message: "Неверный логин или пароль" },
    { status: 401 }
  );
}
