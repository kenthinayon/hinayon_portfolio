import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as ContactPayload | null;

  const name = (body?.name ?? "").trim();
  const email = (body?.email ?? "").trim();
  const message = (body?.message ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, message: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email." },
      { status: 400 },
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { ok: false, message: "Message should be at least 10 characters." },
      { status: 400 },
    );
  }

  if (message.length > 2000) {
    return NextResponse.json(
      { ok: false, message: "Message is too long." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks! Your message was received.",
  });
}
