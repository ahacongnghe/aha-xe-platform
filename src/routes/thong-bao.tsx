import { createFileRoute } from "@tanstack/react-router";
import { Bell, MessageCircle, Tag } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/thong-bao")({
  head: () => ({ meta: [{ title: "Thông báo | AHA Xe" }] }),
  component: NotificationsPage,
});

const items = [
  { icon: <Tag className="h-4 w-4" />, title: "Tin của bạn đã được duyệt", time: "5 phút trước" },
  { icon: <MessageCircle className="h-4 w-4" />, title: "Bạn có tin nhắn mới từ Anh Tuấn", time: "1 giờ trước" },
  { icon: <Bell className="h-4 w-4" />, title: "Ưu đãi đẩy tin nổi bật giảm 50%", time: "Hôm qua" },
];

function NotificationsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="text-2xl font-bold">Thông báo</h1>
        <div className="mt-4 divide-y rounded-2xl bg-card shadow-sm">
          {items.map((it, i) => (
            <div key={i} className="flex items-start gap-3 p-4">
              <div className="grid h-9 w-9 flex-none place-items-center rounded-full bg-brand-gradient">
                {it.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{it.title}</div>
                <div className="text-xs text-muted-foreground">{it.time}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
