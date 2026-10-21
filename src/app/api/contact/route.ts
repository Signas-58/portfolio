import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, category, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('category', category || 'General Professional Inquiry');
    form.append('message', message);
    form.append(
      '_subject',
      `[Portfolio Inquiry] ${category || 'Recruiter Message'} from ${name}`
    );
    form.append('_template', 'table');
    form.append('_captcha', 'false');

    const res = await fetch(
      'https://formsubmit.co/ajax/tsakane.1578@gmail.com',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Referer: 'https://tsakane.co.zw',
          Origin: 'https://tsakane.co.zw',
        },
        body: form,
      }
    );

    const data = await res.json();

    // Check if FormSubmit sent the one-time activation email
    if (
      typeof data.message === 'string' &&
      data.message.toLowerCase().includes('activation')
    ) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message:
          "FormSubmit has sent an activation link to tsakane.1578@gmail.com. Please open that email and click 'Activate Form' once to begin receiving incoming recruiter messages.",
      });
    }

    if (data.success === 'true' || data.success === true) {
      return NextResponse.json({
        success: true,
        needsActivation: false,
        message: 'Inquiry successfully transmitted.',
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: data.message || 'Dispatch provider returned an error.',
      },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('API Contact route error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Internal server error',
      },
      { status: 500 }
    );
  }
}
