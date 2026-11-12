# Smile Craft — Modern Dental Practice Web Application

A modern, high-performance web application designed for **Smile Craft**, a dental practice situated in DHA Phase 5, Karachi. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4, this platform provides an interactive patient experience featuring online appointment scheduling, doctor profiles, clinical treatments, smile transformation galleries, and multi-channel patient contact options.

---

## 🌟 Key Features

- **Brand & Visual Identity**: Refined aesthetics with bespoke typography, curated color palette (Medical Navy `#173782`, Accent Ice Blue `#6E9CCE`), smooth micro-interactions powered by Framer Motion, and vector branding.
- **Online Appointment Booking**:
  - Step-by-step interactive booking system with form validation (React Hook Form + Zod).
  - Doctor-specific scheduling (e.g., Dr. Babur Ashraf for Orthodontics; Dr. Haroon Ashraf for Restorative Care).
  - Dynamic weekday availability, calendar picker, and custom 15-minute slot management.
  - Automated appointment confirmation emails dispatched via Nodemailer.
- **Services Showcase**:
  - Orthodontics & Bite Correction (Traditional Braces, Clear Aligners, Retainers).
  - Cosmetic Dentistry & Smile Makeovers (Teeth Whitening, Veneers).
  - Restorative & Endodontics (Root Canal Treatments, Crowns & Bridges).
  - Oral Surgery & Dental Implants.
  - Preventive & Pediatric Dentistry.
- **Doctor Profiles & Credentials**:
  - Detailed specialist biographies, clinical qualifications, and areas of expertise.
- **Before & After Smile Gallery**:
  - Visual showcase of clinical case results across orthodontics and cosmetic treatments.
- **Multi-Channel Contact Integration**:
  - **Primary Landline**: `021-35832633` (`+92 21 3583 2633`)
  - **Alternative / Mobile**: `+92 334 8222296`
  - **WhatsApp Direct**: `+92 334 8222296`
  - **Primary Email**: `info@smilecraftdental.com`
  - **Appointments Email**: `appointments@smilecraftdental.com`
  - **Clinic Address**: 11-C, 9th Commercial Lane, Zamzama Boulevard (behind OKRA), DHA Phase 5, Karachi 75600
- **Location & Google Maps**:
  - Interactive map embed with quick driving directions for patients in DHA and Clifton, Karachi.
- **SEO & Performance**:
  - Local healthcare SEO optimizations, OpenGraph cards, Twitter preview cards, and semantic HTML5 hierarchy.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss` |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) Primitives & [shadcn/ui](https://ui.shadcn.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) |
| **Date Management** | [Date-fns](https://date-fns.org/) & [React Day Picker](https://react-day-picker.js.org/) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |
| **Email Service** | [Nodemailer](https://nodemailer.com/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Project Structure

```text
Smile-Craft/
├── public/
│   ├── assets/
│   │   ├── doctors/            # Specialist profile photographs
│   │   ├── icons/              # Favicons & application icons
│   │   ├── images/             # Hero banners, clinic imagery, treatments
│   │   ├── vector/             # Brand logos (Smile Craft.svg, social icons)
│   │   └── work/               # Before & after smile transformation cases
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, meta tags, Navbar & Footer
│   │   ├── page.tsx            # Main landing page assembling sections
│   │   ├── globals.css         # Tailwind directives and CSS theme variables
│   │   ├── about/              # About Us page route
│   │   ├── contact/            # Detailed contact page with primary/alt contacts
│   │   ├── services/           # Services catalog route
│   │   ├── gallery/            # Smile transformation gallery route
│   │   ├── book-appointment/  # Full-page appointment booking flow
│   │   ├── doctors/            # Individual doctor profile pages
│   │   │   ├── drbaburashraf/
│   │   │   ├── drharoonashraf/
│   │   │   ├── drjannatvohra/
│   │   │   ├── drkashifnaqvi/
│   │   │   └── drlaibaishaque/
│   │   └── api/
│   │       └── send-email/     # Nodemailer booking email handler
│   ├── components/
│   │   ├── home/               # Hero, About, Services, Doctors, Gallery, FAQs
│   │   ├── layout/             # Navbar, TopBar, Footer, Map
│   │   ├── theme/              # Theme providers
│   │   └── ui/                 # Reusable buttons, dialogs, inputs, popovers, select
│   └── lib/
│       ├── constants/          # Appointment data, doctors, services, nav & siteConfig
│       ├── validations/        # Appointment schema with Zod
│       └── utils.ts            # Class name merger helper (cn)
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.18 or higher, recommended v20+) and [pnpm](https://pnpm.io/) installed:

```bash
npm install -g pnpm
```

### Installation

1. Clone or navigate into the repository:
   ```bash
   cd Smile-Craft
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. (Optional) Set up environment variables for email confirmations:
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ADMIN_EMAIL=info@smilecraftdental.com
   EMAIL_LOGO_URL=https://your-domain.com/assets/vector/Smile%20Craft.svg
   ```

### Running the Development Server

Start the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 🏗️ Build & Production

To build the production bundle:

```bash
pnpm build
```

To run the production server:

```bash
pnpm start
```

To run ESLint:

```bash
pnpm lint
```

---

## 📞 Practice Information & Contact Details

- **Brand**: Smile Craft (Smile Craft Dental Practice)
- **Primary Landline**: `021-35832633` (`+92 21 3583 2633`)
- **Alternative / Mobile**: `+92 334 8222296`
- **WhatsApp Support**: `+92 334 8222296`
- **Primary Inquiries**: `info@smilecraftdental.com`
- **Appointment Inquiries**: `appointments@smilecraftdental.com`
- **Location**: 11-C, 9th Commercial Lane, Zamzama Boulevard (behind OKRA), DHA Phase 5, Karachi 75600
- **Operating Hours**:
  - Monday – Friday: `11:30 AM – 9:00 PM`
  - Saturday: `11:30 AM – 8:30 PM`
  - Sunday: `Closed`

---

## 📄 License

Private and proprietary project for **Smile Craft**. All rights reserved.
