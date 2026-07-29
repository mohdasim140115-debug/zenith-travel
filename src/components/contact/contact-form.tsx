"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-mist-200 bg-mist-50 p-10 text-center">
        <p className="font-display text-xl font-semibold text-navy-950">Thank you!</p>
        <p className="mt-2 text-sm text-navy-700/70">Your enquiry has been received. Our team will reach out within a few hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-mist-200 bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Full name</span>
          <input required className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Phone number</span>
          <input required type="tel" className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Email</span>
          <input required type="email" className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Destination interested in</span>
          <select className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500">
            <option>Kashmir</option>
            <option>Ladakh</option>
            <option>Both</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Message</span>
          <textarea rows={4} className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500" />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 py-3.5 text-sm font-semibold text-navy-950 shadow-md shadow-gold-600/25 transition-transform hover:scale-[1.01] sm:w-auto sm:px-8"
      >
        Send Enquiry <Send size={16} />
      </button>
    </form>
  );
}
