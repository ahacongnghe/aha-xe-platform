import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, MapPin, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { ListingCard } from "@/components/ListingCard";
import { categories, listings } from "@/lib/listings";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AHA Xe - Chợ mua bán xe cũ & mới nhanh, an toàn" },
      { name: "description", content: "AHA Xe — Mua bán ô tô, xe máy, xe điện cũ và mới khắp Việt Nam. Hàng nghìn tin xe mỗi ngày, kiểm định tin cậy." },
      { property: "og:title", content: "AHA Xe - Chợ mua bán xe" },
      { property: "og:description", content: "Mua bán ô tô, xe máy, xe điện cũ và mới." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header stickyThreshold={300} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-gradient">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-brand-dark">AHA Xe</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
              Xe giá tốt, chốt mua nhanh!
            </h1>
            <p className="mt-3 text-sm text-foreground/70 md:text-base">
              Hàng ngàn tin đăng mới mỗi ngày, kiểm định bởi cộng đồng AHA.
            </p>

            <form action="/tim-kiem" method="get" className="mt-6 flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-lg md:flex-row md:items-center md:rounded-full md:p-1.5">
              <Link to="/khu-vuc" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium hover:bg-muted">
                <MapPin className="h-4 w-4" /> Tất cả khu vực
              </Link>
              <div className="hidden h-6 w-px bg-border md:block" />
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  name="q"
                  placeholder="Tìm xe cộ, hãng, dòng..."
                  className="h-10 w-full rounded-full bg-transparent pl-9 pr-3 text-sm outline-none"
                />
              </div>
              <button className="h-10 rounded-full bg-foreground px-6 text-sm font-bold text-background hover:opacity-90">
                Tìm xe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto -mt-6 max-w-7xl px-4">
        <div className="rounded-2xl bg-card p-4 shadow-sm md:p-6">
          <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/mua-ban/$category"
                params={{ category: c.slug }}
                className="group flex flex-col items-center gap-2 rounded-xl p-2 transition hover:bg-muted"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-gradient text-2xl shadow-sm transition group-hover:scale-105">
                  {c.icon}
                </div>
                <span className="text-center text-xs font-semibold leading-tight">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest listings */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-bold md:text-2xl">Mới nhất</h2>
            <p className="text-sm text-muted-foreground">Tin đăng vừa lên sàn AHA Xe</p>
          </div>
          <button className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline">
            Xem tất cả <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      </section>

      {/* Categories deeper */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="mb-4 text-xl font-bold md:text-2xl">Khám phá theo danh mục</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.slice(0, 4).map((c) => (
            <Link
              key={c.slug}
              to="/mua-ban/$category"
              params={{ category: c.slug }}
              className="relative overflow-hidden rounded-2xl bg-brand-gradient p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-4xl">{c.icon}</div>
              <div className="mt-6 font-bold">{c.label}</div>
              <div className="text-xs text-foreground/70">Xem hàng nghìn tin</div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
