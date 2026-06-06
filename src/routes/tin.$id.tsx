import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Flag, Heart, MapPin, Phone, Share2, Shield, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { formatKm, formatPrice, getListing, getRelated } from "@/lib/listings";

export const Route = createFileRoute("/tin/$id")({
  loader: ({ params }) => {
    const listing = getListing(params.id);
    if (!listing) throw notFound();
    return { listing, related: getRelated(listing.id, listing.category) };
  },
  head: ({ loaderData }) => {
    const l = loaderData?.listing;
    if (!l) return { meta: [{ title: "Không tìm thấy tin - AHA Xe" }] };
    return {
      meta: [
        { title: `${l.title} - ${formatPrice(l.price)} | AHA Xe` },
        { name: "description", content: `${l.title}, ${l.year}, ${formatKm(l.km)}, ${l.location}. ${l.description.slice(0, 100)}` },
        { property: "og:title", content: l.title },
        { property: "og:description", content: `${formatPrice(l.price)} · ${l.location}` },
        { property: "og:image", content: l.images[0] },
        { name: "twitter:image", content: l.images[0] },
      ],
    };
  },
  component: DetailPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Tin đăng không tồn tại</h1>
        <Link to="/" className="mt-4 inline-block text-brand-dark underline">Về trang chủ</Link>
      </div>
    </div>
  ),
});

function DetailPage() {
  const { listing, related } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-4 text-xs text-muted-foreground">
        <Link to="/" className="hover:underline">Trang chủ</Link>
        <span className="mx-1">/</span>
        <span className="hover:underline">{listing.categoryLabel}</span>
        <span className="mx-1">/</span>
        <span className="text-foreground">{listing.title}</span>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-3">
        {/* Left: gallery + info */}
        <div className="lg:col-span-2 space-y-4">
          {/* Gallery */}
          <div className="overflow-hidden rounded-2xl bg-card shadow-sm">
            <div className="relative aspect-[4/3] bg-black">
              <img src={listing.images[active]} alt={listing.title} className="h-full w-full object-contain" />
              <button
                onClick={() => setActive((i) => (i - 1 + listing.images.length) % listing.images.length)}
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow hover:bg-white"
                aria-label="Ảnh trước"
              ><ChevronLeft className="h-5 w-5" /></button>
              <button
                onClick={() => setActive((i) => (i + 1) % listing.images.length)}
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow hover:bg-white"
                aria-label="Ảnh sau"
              ><ChevronRight className="h-5 w-5" /></button>
              <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
                {active + 1}/{listing.images.length}
              </span>
            </div>
            <div className="flex gap-2 overflow-x-auto p-3">
              {listing.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative h-16 w-20 flex-none overflow-hidden rounded-md ring-2 transition ${i === active ? "ring-brand-dark" : "ring-transparent hover:ring-border"}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title block */}
          <div className="space-y-3 rounded-2xl bg-card p-5 shadow-sm">
            <h1 className="text-xl font-bold leading-tight md:text-2xl">{listing.title}</h1>
            <div className="text-2xl font-extrabold text-price md:text-3xl">{formatPrice(listing.price)}</div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{listing.location} · {listing.ward}</span>
              <span>·</span>
              <span>Đăng {listing.postedAgo}</span>
            </div>
            <div className="flex gap-2 pt-1">
              <button className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-muted">
                <Heart className="h-4 w-4" /> Lưu tin
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-muted">
                <Share2 className="h-4 w-4" /> Chia sẻ
              </button>
              <button className="ml-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-muted">
                <Flag className="h-4 w-4" /> Báo cáo
              </button>
            </div>
          </div>

          {/* Specs */}
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <h2 className="mb-3 text-base font-bold">Đặc điểm xe</h2>
            <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
              {[
                ["Hãng xe", listing.brand],
                ["Dòng xe", listing.model],
                ["Năm SX", listing.year.toString()],
                ["Số km", formatKm(listing.km)],
                ["Hộp số", listing.transmission],
                ["Nhiên liệu", listing.fuel],
                ["Màu sắc", listing.color],
                ["Xuất xứ", listing.origin],
                ...(listing.bodyType ? [["Kiểu dáng", listing.bodyType]] : []),
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-muted/60 p-3">
                  <div className="text-xs text-muted-foreground">{k}</div>
                  <div className="mt-0.5 font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <h2 className="mb-2 text-base font-bold">Mô tả chi tiết</h2>
            <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">{listing.description}</p>
          </div>
        </div>

        {/* Right: seller */}
        <aside className="space-y-4">
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <img src={listing.seller.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <div className="truncate font-bold">{listing.seller.name}</div>
                <div className="text-xs text-muted-foreground">{listing.seller.joined}</div>
              </div>
              <div className="flex items-center gap-0.5 text-sm">
                <Star className="h-4 w-4 fill-brand text-brand" />
                <span className="font-semibold">{listing.seller.rating}</span>
              </div>
            </div>

            <button
              onClick={() => setShowPhone(true)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-bold text-background hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              {showPhone ? listing.seller.phone.replace(/\*/g, "x") : `${listing.seller.phone} · Bấm để hiện số`}
            </button>
            <button className="mt-2 w-full rounded-full border border-foreground/20 py-3 text-sm font-bold hover:bg-muted">
              Chat với người bán
            </button>
          </div>

          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 text-brand-dark" />
              <div className="text-sm">
                <div className="font-semibold">Giao dịch an toàn cùng AHA</div>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-muted-foreground">
                  <li>Kiểm tra xe & giấy tờ trước khi đặt cọc</li>
                  <li>Không chuyển tiền khi chưa gặp mặt</li>
                  <li>Ưu tiên giao dịch tại điểm công cộng</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="mb-4 text-xl font-bold">Tin tương tự</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {related.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </section>
      )}
    </div>
  );
}
