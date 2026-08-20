"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";

export function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-xl space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-[12px] uppercase tracking-[0.14em] text-muted"
        >
          {t.contact.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-ink/15 bg-white px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-green"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-[12px] uppercase tracking-[0.14em] text-muted"
        >
          {t.contact.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-ink/15 bg-white px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-green"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[12px] uppercase tracking-[0.14em] text-muted"
        >
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-2xl border border-ink/15 bg-white px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-green"
        />
      </div>

      {status === "success" ? (
        <p className="text-[15px] text-green">{t.contact.success}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-[15px] text-red-700">{t.contact.error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-green px-7 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-green-dark disabled:opacity-50"
      >
        {status === "loading" ? t.contact.sending : t.contact.send}
      </button>
    </form>
  );
}
