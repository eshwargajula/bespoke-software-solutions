import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, company, service, subject, message } = data;

    if (!name || !email || !service || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || "hello@bespokesoftware.in";
    const toEmail = process.env.CONTACT_TO_EMAIL || "eshwargajula31@gmail.com";
    console.log("Sending email to:", toEmail);
    console.log("Sending confirmation to:", email);

    // Email to admin
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Inquiry: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        <hr/>
        <small>This message was sent from the contact form on bespokesoftware.in</small>
      `
    });

    // Confirmation to user
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Thanks for contacting Bespoke Software",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for contacting us about <strong>${service}</strong>. We’ve received your message and will get back to you within 24 hours.</p>
        <p><strong>Your Message:</strong></p>
        <blockquote>${message.replace(/\n/g, "<br>")}</blockquote>
        <p>Regards,<br/>Bespoke Software Team</p>
        <small><a href="https://bespokesoftware.in">bespokesoftware.in</a></small>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error:any) {
    console.error("Contact form error:", error?.message || error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
