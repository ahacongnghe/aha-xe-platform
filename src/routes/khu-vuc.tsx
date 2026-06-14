import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/khu-vuc")({
  head: () => ({ meta: [{ title: "Chọn khu vực | AHA Xe" }] }),
  component: AreaPage,
});

const regions = [
  "Toàn quốc", "Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng",
  "Cần Thơ", "Bình Dương", "Đồng Nai", "Khánh Hoà", "Lâm Đồng",
  "Quảng Ninh", "Nghệ An", "Thanh Hoá", "Huế", "Bắc Ninh",
  "Long An", "Tiền Giang", "An Giang", "Vũng Tàu", "Bình Định",
];

function AreaPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto max-w-4xl px-4 py-6">
        <h1 className="text-2xl font-bold">Chọn khu vực</h1>
        <p className="mt-1 text-sm text-muted-foreground">Lọc tin đăng theo tỉnh/thành phố.</p>
        <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-card p-4 shadow-sm sm:grid-cols-3 md:grid-cols-4">
          {regions.map((r) => (
            <Link
              key={r}
              to="/"
              className="flex items-center gap-2 rounded-lg p-2 text-sm hover:bg-muted"
            >
              <MapPin className="h-4 w-4 text-brand-dark" /> {r}
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
