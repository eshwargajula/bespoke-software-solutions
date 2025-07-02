import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const service = formData.get("service") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!name || !email || !service || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || "kilobytekubera@gmail.com"
    const toEmail = process.env.CONTACT_TO_EMAIL || "eshwargajula31@gmail.com"

    // Send email to business
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-bottom: 20px; font-size: 24px;">Contact Details</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Name:</strong>
              <span style="color: #1e293b;">${name}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Email:</strong>
              <span style="color: #1e293b;">${email}</span>
            </div>
            
            ${
              phone
                ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Phone:</strong>
              <span style="color: #1e293b;">${phone}</span>
            </div>
            `
                : ""
            }
            
            ${
              company
                ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Company:</strong>
              <span style="color: #1e293b;">${company}</span>
            </div>
            `
                : ""
            }
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Service Needed:</strong>
              <span style="color: #1e293b; background: #e2e8f0; padding: 4px 8px; border-radius: 4px; font-weight: 500;">${service}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Subject:</strong>
              <span style="color: #1e293b;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569; display: block; margin-bottom: 10px;">Project Details:</strong>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; color: #1e293b; line-height: 1.6; border-left: 4px solid #667eea;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #64748b; font-size: 14px;">
            <p>This email was sent from your website contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to client
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Thank you for contacting Bespoke Software Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Hi ${name},</h2>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              Thank you for contacting Bespoke Software Solutions! We've received your inquiry about <strong>${service}</strong> and our team will review it shortly.
            </p>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              We typically respond within 24 hours during business days. Our team will analyze your project requirements and prepare a detailed proposal for you.
            </p>
          
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="color: #1e293b; margin-bottom: 15px;">Your Inquiry Summary:</h3>
              <p style="color: #475569; margin: 5px 0;"><strong>Service Interest:</strong> ${service}</p>
              <p style="color: #475569; margin: 5px 0;"><strong>Project Subject:</strong> ${subject}</p>
              ${phone ? `<p style="color: #475569; margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>` : ""}
              ${company ? `<p style="color: #475569; margin: 5px 0;"><strong>Company:</strong> ${company}</p>` : ""}
            </div>
            
            <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-bottom: 10px;">What happens next?</h3>
              <ul style="color: #475569; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li style="margin-bottom: 8px;">Our senior developers will review your project requirements</li>
                <li style="margin-bottom: 8px;">We'll analyze the technical scope and timeline</li>
                <li style="margin-bottom: 8px;">You'll receive a detailed proposal with pricing</li>
                <li>We'll schedule a consultation call to discuss your project</li>
              </ul>
            </div>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              Best regards,<br>
              <strong>The Bespoke Software Solutions Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #64748b; font-size: 14px;">
            <p>Visit our website: <a href="${process.env.NEXT_PUBLIC_APP_URL || "https://bespokesoftware.in"}" style="color: #667eea; text-decoration: none;">bespokesoftware.com</a></p>
            <p>Email: hello@bespokesoftware.com | Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
