import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ListingCard } from "@/components/ListingCard";
import { categories, listings } from "@/lib/listings";

export const Route = createFileRoute("/mua-ban/$category")({
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.category);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => {
    const label = loaderData?.cat.label ?? "Mua bán";
    return {
      meta: [
        { title: `Mua bán ${label} cũ & mới giá tốt | AHA Xe` },
        {
          name: "description",
          content: `Hàng ngàn tin đăng mua bán ${label.toLowerCase()} cũ và mới trên toàn quốc. Lọc theo giá, năm sản xuất, hộp số, nhiên liệu trên AHA Xe.`,
        },
      ],
    };
  },
  component: CategoryPage,
});

type SortKey = "newest" | "price-asc" | "price-desc" | "km-asc";

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const [sort, setSort] = useState<SortKey>("newest");
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minYear, setMinYear] = useState<number>(0);
  const [trans, setTrans] = useState<string>("");

  const items = useMemo(() => {
    let arr = listings.filter((l) => l.category === cat.slug);
    if (maxPrice) arr = arr.filter((l) => l.price <= maxPrice);
    if (minYear) arr = arr.filter((l) => l.year >= minYear);
    if (trans) arr = arr.filter((l) => l.transmission === trans);
    if (sort === "price-asc") arr = [...arr].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") arr = [...arr].sort((a, b) => b.price - a.price);
    if (sort === "km-asc") arr = [...arr].sort((a, b) => a.km - b.km);
    return arr;
  }, [cat.slug, maxPrice, minYear, trans, sort]);

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div className="mx-auto max-w-7xl px-4 pt-4 text-xs text-muted-foreground">
        <Link to="/" className="hover:underline">
          Trang chủ
        </Link>
        <span className="mx-1">/</span>
        <span className="text-foreground">{cat.label}</span>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-4">
        <div className="rounded-2xl bg-brand-gradient p-5 shadow-sm">
          <div className="text-3xl">{cat.icon}</div>
          <h1 className="mt-2 text-2xl font-black md:text-3xl">Mua bán {cat.label}</h1>
          <p className="text-sm text-foreground/70">
            {items.length} tin đăng phù hợp · cập nhật liên tục
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 pb-10 lg:grid-cols-[260px_1fr]">
        {/* Filters */}
        <aside className="space-y-3 rounded-2xl bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-bold">
            <SlidersHorizontal className="h-4 w-4" /> Bộ lọc
          </div>

          <div>
            <div className="mb-1 text-xs font-semibold text-muted-foreground">Mức giá tối đa</div>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full rounded-lg border bg-background p-2 text-sm"
            >
              <option value={0}>Tất cả</option>
              <option value={50_000_000}>Dưới 50 triệu</option>
              <option value={200_000_000}>Dưới 200 triệu</option>
              <option value={500_000_000}>Dưới 500 triệu</option>
              <option value={1_000_000_000}>Dưới 1 tỷ</option>
            </select>
          </div>

          <div>
            <div className="mb-1 text-xs font-semibold text-muted-foreground">Năm SX từ</div>
            <select
              value={minYear}
              onChange={(e) => setMinYear(Number(e.target.value))}
              className="w-full rounded-lg border bg-background p-2 text-sm"
            >
              <option value={0}>Tất cả</option>
              {[2024, 2020, 2015, 2010, 2000].map((y) => (
                <option key={y} value={y}>
                  Từ {y}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="mb-1 text-xs font-semibold text-muted-foreground">Hộp số</div>
            <div className="flex flex-wrap gap-1.5">
              {["", "Số tự động", "Số sàn", "Hybrid"].map((t) => (
                <button
                  key={t || "all"}
                  onClick={() => setTrans(t)}
                  className={`rounded-full border px-3 py-1 text-xs ${
                    trans === t ? "border-foreground bg-foreground text-background" : "hover:bg-muted"
                  }`}
                >
                  {t || "Tất cả"}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setMaxPrice(0);
              setMinYear(0);
              setTrans("");
            }}
            className="w-full rounded-full border py-2 text-sm font-semibold hover:bg-muted"
          >
            Xoá lọc
          </button>
        </aside>

        {/* Results */}
        <div>
          <div className="mb-3 flex items-center justify-between rounded-xl bg-card p-3 shadow-sm">
            <div className="text-sm font-semibold">{items.length} kết quả</div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border bg-background p-2 text-sm"
            >
              <option value="newest">Tin mới nhất</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
              <option value="km-asc">Số km ít nhất</option>
            </select>
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl bg-card p-10 text-center shadow-sm">
              <p className="text-muted-foreground">Chưa có tin đăng phù hợp.</p>
              <Link
                to="/mua-ban/$category"
                params={{ category: cat.slug }}
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline"
              >
                Xem tất cả {cat.label} <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {items.map((l) => (
                <ListingCard key={l.id} listing={l} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
