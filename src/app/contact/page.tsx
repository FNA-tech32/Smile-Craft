import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/constants/nav-links";

export const metadata: Metadata = {
  title: "Contact Us | Smile Craft Dental Practice",
  description:
    "Get in touch with Smile Craft Dental Practice in DHA Phase 5, Karachi. Call us, WhatsApp, or visit our clinic for world-class dental care.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#6E9CCE]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-80 h-96 w-96 rounded-full bg-[#173782]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6E9CCE]/30 bg-[#6E9CCE]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#173782]">
            <span>Get In Touch</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-[#173782]">
            Contact <span className="text-[#6E9CCE]">Smile Craft</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Have questions about a dental procedure or ready to book your visit? Connect with our dedicated patient care team through phone, WhatsApp, or email.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Phone Numbers */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#6E9CCE]/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6E9CCE]/10 text-[#173782] mb-6">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Inquiries</h3>
            <p className="text-sm text-gray-500 mb-6">
              Call our reception desk for appointments, inquiries, and immediate dental assistance.
            </p>
            <div className="space-y-3 border-t border-gray-100 pt-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Primary Landline</span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="mt-1 flex items-center justify-between text-base font-semibold text-[#173782] hover:text-[#6E9CCE] transition-colors"
                >
                  <span>{siteConfig.phoneDisplay}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Alternative / Mobile</span>
                <a
                  href={`tel:${siteConfig.altPhone}`}
                  className="mt-1 flex items-center justify-between text-base font-semibold text-[#173782] hover:text-[#6E9CCE] transition-colors"
                >
                  <span>{siteConfig.altPhoneDisplay}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: WhatsApp & Messaging */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#6E9CCE]/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-6">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp Direct</h3>
            <p className="text-sm text-gray-500 mb-6">
              Instant chat support for booking confirmations, directions, and sharing queries.
            </p>
            <div className="space-y-3 border-t border-gray-100 pt-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">WhatsApp Hotline</span>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center justify-between text-base font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>{siteConfig.whatsapp}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <p className="text-xs text-gray-500 pt-2">
                Fast replies during clinic hours Monday through Saturday.
              </p>
            </div>
          </div>

          {/* Card 3: Email Contacts */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#6E9CCE]/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6E9CCE]/10 text-[#173782] mb-6">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Correspondence</h3>
            <p className="text-sm text-gray-500 mb-6">
              Drop us a line for detailed medical inquiries, second opinions, or corporate inquiries.
            </p>
            <div className="space-y-3 border-t border-gray-100 pt-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">General Enquiries</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 flex items-center justify-between text-sm font-semibold text-[#173782] hover:text-[#6E9CCE] transition-colors break-all"
                >
                  <span>{siteConfig.email}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Appointments Desk</span>
                <a
                  href={`mailto:${siteConfig.altEmail}`}
                  className="mt-1 flex items-center justify-between text-sm font-semibold text-[#173782] hover:text-[#6E9CCE] transition-colors break-all"
                >
                  <span>{siteConfig.altEmail}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Hours Detailed Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch rounded-3xl bg-white border border-gray-100 p-8 sm:p-10 shadow-sm">
          {/* Location */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#173782] mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6E9CCE]/10 text-[#173782]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Clinic Address</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                {siteConfig.address}
              </p>
              <p className="text-sm text-gray-500">
                Landmarks: Zamzama Commercial area, conveniently situated behind OKRA restaurant in DHA Phase 5.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=Dr.+Babur+%26+Associates+Dental+Practice+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#173782] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#173782] hover:bg-[#173782] hover:text-white transition-all"
              >
                <span>Get Driving Directions</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-10">
            <div>
              <div className="flex items-center gap-3 text-[#173782] mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6E9CCE]/10 text-[#173782]">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Consultation Hours</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="font-medium text-gray-800">Monday – Friday</span>
                  <span className="font-semibold text-[#173782]">{siteConfig.hours.mondayFriday}</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="font-medium text-gray-800">Saturday</span>
                  <span className="font-semibold text-[#173782]">{siteConfig.hours.saturday}</span>
                </li>
                <li className="flex justify-between py-1.5 text-rose-600">
                  <span className="font-medium">Sunday</span>
                  <span className="font-semibold">{siteConfig.hours.sunday}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-[#173782] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-[#22255C] hover:shadow-md transition-all"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Online Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}