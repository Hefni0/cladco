"use client";

import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function ContactSection() {
  const { lang } = useLang();
  const tr = t[lang].contact;
  const displayNumber = `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3, 5)} ${WHATSAPP_NUMBER.slice(5, 8)} ${WHATSAPP_NUMBER.slice(8)}`;

  return (
    <section className="py-20 md:py-24 bg-[#0a0a0a] border-t border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#141414] flex items-center justify-center text-[#c2410c] shrink-0 mt-0.5"><LocationIcon /></div>
            <div>
              <p className="text-xs font-semibold text-gray-600 tracking-widest uppercase mb-1">{tr.locationLabel}</p>
              <p className="text-sm font-semibold text-white">{tr.locationValue}</p>
              <p className="text-xs text-gray-600 mt-0.5">{tr.locationSub}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#141414] flex items-center justify-center text-[#c2410c] shrink-0 mt-0.5"><PhoneIcon /></div>
            <div>
              <p className="text-xs font-semibold text-gray-600 tracking-widest uppercase mb-1">{tr.phoneLabel}</p>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-sm font-semibold text-white hover:text-[#c2410c] transition-colors">{displayNumber}</a>
              <p className="text-xs text-gray-600 mt-0.5">{tr.phoneSub}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#25d366]/10 flex items-center justify-center text-[#25d366] shrink-0 mt-0.5"><WhatsAppIcon /></div>
            <div>
              <p className="text-xs font-semibold text-gray-600 tracking-widest uppercase mb-1">{tr.waLabel}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-[#25d366] transition-colors">{tr.waValue}</a>
              <p className="text-xs text-gray-600 mt-0.5">{tr.waSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 6.37a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;
}
function WhatsAppIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}
