import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // In production, send via email provider (e.g. Resend, SendGrid)
    console.log('Received contact message:', { name, email, subject, message });

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received.',
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to process message submission.' },
      { status: 500 }
    );
  }
}
