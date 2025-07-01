# Bespoke Software Solutions Website

A modern, responsive website for Bespoke Software Solutions built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Built with Next.js 14 and TypeScript for optimal performance
- 🎭 Smooth animations with Framer Motion
- 📧 Working contact form with email notifications via Resend
- 🎯 SEO optimized with proper meta tags
- 📱 Mobile-first responsive design
- 🌙 Dark/light theme toggle
- 🚀 Optimized for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Email Service**: Resend
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend API key for email functionality

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd bespoke-software-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Add your Resend API key to `.env`:
\`\`\`env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Configuration

To set up the contact form email functionality:

1. Sign up for a [Resend](https://resend.com) account
2. Verify your domain or use the sandbox domain for testing
3. Get your API key from the Resend dashboard
4. Update the email addresses in `app/api/contact/route.ts`:
   - Replace `contact@yourdomain.com` with your business email
   - Replace `your-email@yourdomain.com` with your email address
   - Replace `noreply@yourdomain.com` with your no-reply email

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`: Your Resend API key
   - `NEXT_PUBLIC_APP_URL`: Your production URL
4. Deploy!

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── home/             # Home page sections
│   ├── ui/               # UI components
│   ├── navigation.tsx    # Navigation component
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── images/          # Image assets
└── styles/              # Additional styles
\`\`\`

## Customization

### Colors and Branding

Update the color scheme in `tailwind.config.ts` and the CSS variables in `app/globals.css`.

### Content

- Update company information in components
- Replace placeholder images in `/public/images/`
- Modify service offerings in `components/home/services-section.tsx`
- Update portfolio projects in `components/home/portfolio-section.tsx`

### Images

All images should be in WebP format for optimal performance. Place them in the `/public/images/` directory with appropriate subdirectories:

- `/public/images/projects/` - Portfolio project images
- `/public/images/testimonials/` - Client testimonial photos
- `/public/images/team/` - Team member photos

## Performance

- Images are optimized with Next.js Image component
- Components are lazy-loaded where appropriate
- CSS is optimized with Tailwind CSS
- Bundle is optimized for production builds

## SEO

The website includes:
- Proper meta tags and Open Graph data
- Structured data for better search engine understanding
- Semantic HTML structure
- Fast loading times
- Mobile-responsive design

## Support

For support or questions about this project, please contact us through the website or create an issue in the repository.

## License

This project is proprietary and confidential. All rights reserved.
