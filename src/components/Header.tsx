import { Link } from "@tanstack/react-router";
import { Bell, Heart, MapPin, Menu, MessageCircle, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-brand-gradient shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <button className="rounded-md p-2 hover:bg-black/5 lg:hidden" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-foreground text-background font-black">
            A
          </div>
          <span className="text-lg font-black tracking-tight">AHA<span className="text-brand-dark">Xe</span></span>
        </Link>

        <button className="hidden items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-sm font-medium hover:bg-white md:flex">
          <MapPin className="h-4 w-4" />
          Toàn quốc
        </button>

        <div className="relative ml-auto hidden flex-1 max-w-xl md:flex">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Tìm xe cộ, phụ tùng..."
            className="h-10 w-full rounded-full border-0 bg-white pl-9 pr-4 text-sm shadow-sm outline-none ring-2 ring-transparent focus:ring-foreground/20"
          />
        </div>

        <button className="rounded-full p-2 hover:bg-black/5" aria-label="Yêu thích"><Heart className="h-5 w-5" /></button>
        <button className="rounded-full p-2 hover:bg-black/5" aria-label="Tin nhắn"><MessageCircle className="h-5 w-5" /></button>
        <button className="hidden rounded-full p-2 hover:bg-black/5 sm:block" aria-label="Thông báo"><Bell className="h-5 w-5" /></button>

        <button className="hidden rounded-full px-3 py-1.5 text-sm font-semibold hover:bg-black/5 sm:block">Đăng nhập</button>
        <button className="rounded-full bg-foreground px-4 py-2 text-sm font-bold text-background shadow-sm transition hover:opacity-90">
          Đăng tin
        </button>
        <button className="hidden rounded-full p-2 hover:bg-black/5 lg:block" aria-label="Tài khoản"><User className="h-5 w-5" /></button>
      </div>
    </header>
  );
}
