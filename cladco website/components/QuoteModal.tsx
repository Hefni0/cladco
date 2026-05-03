"use client";

import { useState, useEffect, FormEvent } from "react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: Props) {
  const { lang } = useLang();
  const tr = t[lang].quote;

  const [form, setForm] = useState({
    name: "",
    company: "",
    businessType: "",
    need: "",
    quantity: "",
    city: "",
    fabric: "",
  });

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi CladCo! I'd like a free quote. 🙏`,
      ``,
      `📛 Name: ${form.name}`,
      `🏢 Company: ${form.company}`,
      `📁 Business Type: ${form.businessType}`,
      `📝 What I need: ${form.need}`,
      `📦 Quantity: ${form.quantity}`,
      `📍 City: ${form.city}`,
      form.fabric ? `🧵 Fabric: ${form.fabric}` : null,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    onClose();
  };

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[200] flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal-panel relative w-full max-w-lg bg-[#111] border border-[#2a2a2a] rounded-2xl overflow-hidden"
        style={{ maxHeight: "92dvh" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-5 border-b border-[#1e1e1e]">
          <div>
            <h2 className="text-lg font-bold text-white">{tr.title}</h2>
            <p className="text-xs text-gray-500 mt-0.5">{tr.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 mt-0.5 text-gray-600 hover:text-white transition-colors p-1"
            aria-label={tr.close}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto" style={{ maxHeight: "calc(92dvh - 140px)" }}>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Row 1: Name + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">{tr.name} *</label>
                <input
                  type="text"
                  required
                  placeholder={tr.namePlaceholder}
                  value={form.name}
                  onChange={set("name")}
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">{tr.company} *</label>
                <input
                  type="text"
                  required
                  placeholder={tr.companyPlaceholder}
                  value={form.company}
                  onChange={set("company")}
                  className="form-input"
                />
              </div>
            </div>

            {/* Row 2: Business Type + City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">{tr.businessType} *</label>
                <input
                  type="text"
                  required
                  placeholder={tr.typePlaceholder}
                  value={form.businessType}
                  onChange={set("businessType")}
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">{tr.city} *</label>
                <input
                  type="text"
                  required
                  placeholder={tr.cityPlaceholder}
                  value={form.city}
                  onChange={set("city")}
                  className="form-input"
                />
              </div>
            </div>

            {/* What do you need */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">{tr.need} *</label>
              <textarea
                required
                rows={3}
                placeholder={tr.needPlaceholder}
                value={form.need}
                onChange={set("need")}
                className="form-input resize-none"
              />
            </div>

            {/* Row 3: Quantity + Fabric */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">{tr.quantity} *</label>
                <input
                  type="text"
                  required
                  placeholder={tr.quantityPlaceholder}
                  value={form.quantity}
                  onChange={set("quantity")}
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                  {tr.fabric} <span className="text-gray-600 font-normal">({tr.fabricHint})</span>
                </label>
                <input
                  type="text"
                  placeholder={tr.fabricPlaceholder}
                  value={form.fabric}
                  onChange={set("fabric")}
                  className="form-input"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button type="submit" className="btn-primary w-full justify-center gap-3 py-4 text-sm">
                <WAIcon />
                {tr.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function WAIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
