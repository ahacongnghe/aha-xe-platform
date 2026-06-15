import { Link } from "@tanstack/react-router";
import { Bell, Heart, Menu, MessageCircle, Search, User } from "lucide-react";
import { useEffect, useState } from "react";

const brandLinks = [
  { label: "Trang chủ", href: "#" },
  { label: "Aha Sale", href: "#" },
  { label: "Aha Xe", href: "/" },
  { label: "Aha Bất động sản", href: "#" },
  { label: "Aha Công nghệ", href: "#" },
  { label: "Aha Sức khoẻ", href: "#" },
  { label: "Aha Làm đẹp", href: "#" },
];

export function Header({ stickyThreshold = 0 }: { stickyThreshold?: number }) {
  const [stuck, setStuck] = useState(stickyThreshold === 0);

  useEffect(() => {
    if (stickyThreshold === 0) {
      setStuck(true);
      return;
    }
    const onScroll = () => setStuck(window.scrollY > stickyThreshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [stickyThreshold]);

  const isFixed = stuck && stickyThreshold > 0;
  const expanded = stickyThreshold > 0 && !stuck;

  return (
    <>
      {isFixed && <div style={{ height: 60 }} aria-hidden />}
      <header
        className={`z-40 bg-brand-gradient shadow-sm ${
          isFixed
            ? "fixed left-0 right-0 top-0 animate-in slide-in-from-top duration-200"
            : "relative"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3">
          <button className="rounded-md p-2 hover:bg-black/5" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-foreground text-background font-black">
              A
            </div>
            <span className="text-lg font-black tracking-tight">
              AHA<span className="text-brand-dark">Xe</span>
            </span>
          </Link>

          {expanded ? (
            <nav className="ml-3 hidden flex-1 items-center gap-1 lg:flex">
              {brandLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-foreground/80 hover:bg-white/40 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          ) : (
            <form
              action="/tim-kiem"
              method="get"
              className="relative ml-auto hidden flex-1 max-w-xl md:flex"
            >
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                name="q"
                placeholder="Tìm xe cộ, phụ tùng..."
                className="h-10 w-full rounded-full border-0 bg-white pl-9 pr-4 text-sm shadow-sm outline-none ring-2 ring-transparent focus:ring-foreground/20"
              />
            </form>
          )}

          <div className={`flex items-center gap-1 ${expanded ? "ml-auto" : ""}`}>
            <Link to="/tin-da-luu" className="rounded-full p-2 hover:bg-black/5" aria-label="Yêu thích">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/tin-nhan" className="rounded-full p-2 hover:bg-black/5" aria-label="Tin nhắn">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link
              to="/thong-bao"
              className="hidden rounded-full p-2 hover:bg-black/5 sm:block"
              aria-label="Thông báo"
            >
              <Bell className="h-5 w-5" />
            </Link>

            <Link
              to="/dang-nhap"
              className="rounded-full px-3 py-1.5 text-sm font-semibold hover:bg-black/5"
            >
              Đăng nhập
            </Link>

            {!expanded && (
              <Link
                to="/dang-tin"
                className="rounded-full bg-foreground px-4 py-2 text-sm font-bold text-background shadow-sm transition hover:opacity-90"
              >
                Đăng tin
              </Link>
            )}

            <Link
              to="/tai-khoan"
              className="hidden rounded-full p-2 hover:bg-black/5 lg:block"
              aria-label="Tài khoản"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
