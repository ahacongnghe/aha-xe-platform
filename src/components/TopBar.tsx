import { Home } from "lucide-react";

const links = [
  { label: "Trang chủ", href: "https://www.chotot.com", icon: true },
  { label: "Aha Sale", href: "#" },
  { label: "Aha Xe", href: "/" },
  { label: "Aha Bất động sản", href: "#" },
  { label: "Aha Công nghệ", href: "#" },
  { label: "Aha Sức khoẻ", href: "#" },
  { label: "Aha Làm đẹp", href: "#" },
];

export function TopBar() {
  return (
    <div className="hidden border-b bg-white md:block">
      <div className="mx-auto flex max-w-7xl items-center gap-1 px-4 py-2 text-sm">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="flex items-center gap-1 rounded-full px-3 py-1 font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
          >
            {l.icon && <Home className="h-4 w-4" />}
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
