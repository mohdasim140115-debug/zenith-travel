import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { whatsappLink } from "@/lib/utils";

export default function WhatsappFloat() {
  return (
    <a
      href={whatsappLink("Hi! I'd like to plan a Kashmir/Ladakh trip.", siteConfig.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
