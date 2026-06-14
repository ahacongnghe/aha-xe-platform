import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ListingCard } from "@/components/ListingCard";
import { listings } from "@/lib/listings";

export const Route = createFileRoute("/tin-da-luu")({
  head: () => ({ meta: [{ title: "Tin đã lưu | AHA Xe" }] }),
  component: SavedPage,
});

function SavedPage() {
  const saved = listings.slice(0, 3);
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-price" />
          <h1 className="text-2xl font-bold">Tin đã lưu</h1>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {saved.length} tin · Lưu lại các xe yêu thích để xem sau.
        </p>

        {saved.length === 0 ? (
          <div className="mt-6 rounded-2xl bg-card p-10 text-center shadow-sm">
            <p className="text-muted-foreground">Chưa có tin nào được lưu.</p>
            <Link to="/" className="mt-3 inline-block text-brand-dark underline">
              Khám phá tin đăng
            </Link>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {saved.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
