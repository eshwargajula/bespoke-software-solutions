import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, budget, message } = body

    // Here you would typically:
    // 1. Validate the data
    // 2. Send email using a service like SendGrid, Resend, or Nodemailer
    // 3. Save to database if needed
    // 4. Send confirmation email to user

    // For now, we'll just log the data and return success
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      service,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Sorry, there was an error sending your message. Please try again.",
      },
      { status: 500 },
    )
  }
}
