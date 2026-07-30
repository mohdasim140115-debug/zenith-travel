"use client";

import { useState } from "react";
import { BadgeCheck, Bed, Calendar, Download, Mail, MessageCircle, Phone, PhoneCall, Share2, User, Users } from "lucide-react";
import { Hotel } from "@/data/hotels";
import { siteConfig } from "@/data/site-config";
import { formatINR, whatsappLink } from "@/lib/utils";

export default function HotelBookingPanel({ hotel }: { hotel: Hotel }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  const callBackMessage = `Hi! Please call me back regarding "${hotel.name}". Name: ${name || "-"}, Phone: ${phone || "-"}.`;
  const bookingMessage = `Hi! I'd like to book "${hotel.name}" in ${hotel.location}.\nCheck-in: ${checkIn || "flexible"}\nRooms: ${rooms}, Guests: ${guests}\nPrice: ${formatINR(hotel.pricePerNight)} / night`;

  return (
    <aside className="h-fit space-y-4 lg:sticky lg:top-28">
      {/* Share row */}
      

      {/* Date / rooms / price panel */}
      <div className="card-premium overflow-hidden rounded-card border border-mist-200 bg-white">
        <div className="flex items-center gap-1.5 bg-gold-500/10 px-5 py-2.5 text-xs font-semibold text-gold-700">
          <BadgeCheck size={14} /> Best Price Guarantee
        </div>

        <div className="p-5">
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="mb-1 flex items-center gap-1 text-xs font-medium text-navy-700/70">
                <Calendar size={12} /> Check-in
              </span>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full rounded-xl border border-mist-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
              />
            </label>
            <label className="block">
              <span className="mb-1 flex items-center gap-1 text-xs font-medium text-navy-700/70">
                <Bed size={12} /> Rooms
              </span>
              <select
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full rounded-xl border border-mist-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>
            <label className="col-span-2 block">
              <span className="mb-1 flex items-center gap-1 text-xs font-medium text-navy-700/70">
                <Users size={12} /> Guests
              </span>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full rounded-xl border border-mist-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-4 flex items-end justify-between border-t border-mist-100 pt-4">
            <div>
              <p className="text-xs text-navy-700/60">Price per night</p>
              <p className="font-display text-2xl font-semibold text-navy-950">{formatINR(hotel.pricePerNight)}</p>
              <p className="text-[11px] text-navy-700/50">+ taxes &amp; fees</p>
            </div>
            <p className="text-xs font-medium text-navy-700/60">{rooms} room{rooms > 1 ? "s" : ""} · {guests} guest{guests > 1 ? "s" : ""}</p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <a
              href={whatsappLink(bookingMessage, siteConfig.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-mist-200 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-mist-50"
            >
              <MessageCircle size={15} /> Enquire Now
            </a>
            <button className="flex items-center justify-center rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 py-3 text-sm font-semibold text-navy-950 shadow-card transition-transform hover:scale-[1.02]">
              Book Online
            </button>
          </div>
        </div>
      </div>

      {/* Call-back mini form */}
      <div className="rounded-card border border-mist-200 bg-white p-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700">
            <PhoneCall size={16} />
          </span>
          <div>
            <p className="text-sm font-semibold text-navy-950">Want us to call you?</p>
            <p className="text-xs text-navy-700/60">A travel expert will call within 30 minutes</p>
          </div>
        </div>
        <div className="mt-4 space-y-2.5">
          <div className="relative">
            <User size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-700/40" />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-mist-200 py-2.5 pl-10 pr-3.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div className="relative">
            <Phone size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-700/40" />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              type="tel"
              className="w-full rounded-xl border border-mist-200 py-2.5 pl-10 pr-3.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <a
            href={whatsappLink(callBackMessage, siteConfig.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-navy-950 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            <PhoneCall size={14} /> Request Call Back
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 rounded-card border border-mist-200 bg-white p-4">
        <button aria-label="Share" className="group flex flex-col items-center gap-1.5 text-navy-700">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist-100 transition-colors group-hover:bg-gold-500/15 group-hover:text-gold-700">
            <Share2 size={16} />
          </span>
          <span className="text-[11px] font-medium">Share</span>
        </button>
        <button aria-label="Download details" className="group flex flex-col items-center gap-1.5 text-navy-700">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist-100 transition-colors group-hover:bg-gold-500/15 group-hover:text-gold-700">
            <Download size={16} />
          </span>
          <span className="text-[11px] font-medium">Save PDF</span>
        </button>
        <a
          href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(hotel.name)}`}
          aria-label="Email"
          className="group flex flex-col items-center gap-1.5 text-navy-700"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist-100 transition-colors group-hover:bg-gold-500/15 group-hover:text-gold-700">
            <Mail size={16} />
          </span>
          <span className="text-[11px] font-medium">Email</span>
        </a>
      </div>

      
    </aside>
  );
}
