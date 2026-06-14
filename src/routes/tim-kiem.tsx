import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ListingCard } from "@/components/ListingCard";
import { listings } from "@/lib/listings";

const schema = z.object({ q: z.string().optional() });

export const Route = createFileRoute("/tim-kiem")({
  validateSearch: schema,
  head: ({ search }) => ({
    meta: [
      {
        title: search.q
          ? `Tìm "${search.q}" trên AHA Xe`
          : "Tìm kiếm xe trên AHA Xe",
      },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q = "" } = Route.useSearch();
  const navigate = Route.useNavigate();
  const term = q.trim().toLowerCase();
  const results = term
    ? listings.filter(
        (l) =>
          l.title.toLowerCase().includes(term) ||
          l.brand.toLowerCase().includes(term) ||
          l.model.toLowerCase().includes(term) ||
          l.categoryLabel.toLowerCase().includes(term),
      )
    : [];

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto max-w-5xl px-4 py-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            navigate({ search: { q: String(fd.get("q") || "") } });
          }}
          className="relative"
        >
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            name="q"
            defaultValue={q}
            placeholder="Tìm theo hãng, dòng xe, danh mục..."
            className="h-12 w-full rounded-full bg-card pl-12 pr-32 text-sm shadow-sm outline-none ring-2 ring-transparent focus:ring-foreground/20"
          />
          <button className="absolute right-1.5 top-1/2 h-9 -translate-y-1/2 rounded-full bg-foreground px-5 text-sm font-bold text-background">
            Tìm
          </button>
        </form>

        <div className="mt-4 text-sm text-muted-foreground">
          {q ? (
            <>
              Có <span className="font-bold text-foreground">{results.length}</span> kết quả cho “
              {q}”
            </>
          ) : (
            "Nhập từ khoá để bắt đầu tìm kiếm."
          )}
        </div>

        {results.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {results.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        ) : q ? (
          <div className="mt-6 rounded-2xl bg-card p-10 text-center shadow-sm">
            <p className="text-muted-foreground">
              Không tìm thấy tin phù hợp. Thử từ khoá khác hoặc quay lại{" "}
              <Link to="/" className="text-brand-dark underline">
                trang chủ
              </Link>
              .
            </p>
          </div>
        ) : null}
      </section>
      <Footer />
    </div>
  );
}
