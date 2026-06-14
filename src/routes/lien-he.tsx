import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/lien-he")({
  head: () => ({ meta: [{ title: "Liên hệ | AHA Xe" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-8 md:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold">Liên hệ AHA Xe</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Chúng tôi sẵn sàng hỗ trợ bạn 24/7.
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-dark" /> 1900 1234</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-dark" /> hotro@ahaxe.vn</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-dark" /> Toà nhà AHA, Quận 1, TP.HCM</li>
          </ul>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-3 rounded-2xl bg-card p-5 shadow-sm"
        >
          <input placeholder="Họ tên" className="w-full rounded-lg border bg-background p-3 text-sm" />
          <input placeholder="Email" type="email" className="w-full rounded-lg border bg-background p-3 text-sm" />
          <textarea placeholder="Nội dung" rows={5} className="w-full rounded-lg border bg-background p-3 text-sm" />
          <button className="w-full rounded-full bg-foreground py-3 text-sm font-bold text-background">
            Gửi liên hệ
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
