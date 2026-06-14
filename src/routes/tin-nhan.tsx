import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send } from "lucide-react";
import { Header } from "@/components/Header";
import { listings } from "@/lib/listings";

export const Route = createFileRoute("/tin-nhan")({
  head: () => ({ meta: [{ title: "Tin nhắn | AHA Xe" }] }),
  component: MessagesPage,
});

function MessagesPage() {
  const threads = listings.slice(0, 4).map((l, i) => ({
    id: l.id,
    name: l.seller.name,
    avatar: l.seller.avatar,
    title: l.title,
    last: i === 0 ? "Bạn còn xe không ạ?" : "Cảm ơn bạn đã quan tâm!",
    ago: ["2 phút", "1 giờ", "Hôm qua", "3 ngày"][i],
  }));
  const [active, setActive] = useState(threads[0].id);
  const cur = threads.find((t) => t.id === active)!;

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-0 overflow-hidden px-0 md:grid-cols-[320px_1fr] md:px-4 md:py-4">
        <aside className="overflow-y-auto border-r bg-card md:rounded-l-2xl md:shadow-sm">
          <div className="border-b p-4 font-bold">Tin nhắn</div>
          {threads.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex w-full gap-3 border-b p-3 text-left hover:bg-muted ${active === t.id ? "bg-muted" : ""}`}
            >
              <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <div className="flex justify-between gap-2">
                  <div className="truncate text-sm font-semibold">{t.name}</div>
                  <div className="flex-none text-[11px] text-muted-foreground">{t.ago}</div>
                </div>
                <div className="truncate text-xs text-muted-foreground">{t.last}</div>
              </div>
            </button>
          ))}
        </aside>

        <section className="flex min-h-0 flex-col bg-muted/30 md:rounded-r-2xl md:shadow-sm">
          <div className="border-b bg-card px-4 py-3 md:rounded-tr-2xl">
            <div className="font-bold">{cur.name}</div>
            <div className="truncate text-xs text-muted-foreground">{cur.title}</div>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto p-4">
            <Bubble side="them">Chào bạn, xe còn không ạ?</Bubble>
            <Bubble side="me">Còn bạn nhé, qua xem trực tiếp được không?</Bubble>
            <Bubble side="them">Mình rảnh chiều mai, địa chỉ của bạn ở đâu?</Bubble>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 border-t bg-card p-3 md:rounded-br-2xl"
          >
            <input
              placeholder="Nhập tin nhắn..."
              className="h-10 flex-1 rounded-full border bg-background px-4 text-sm outline-none"
            />
            <button className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "me" | "them"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "me" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
          side === "me" ? "bg-foreground text-background" : "bg-card"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
