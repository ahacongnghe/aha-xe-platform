import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { categories } from "@/lib/listings";

export const Route = createFileRoute("/dang-tin")({
  head: () => ({
    meta: [
      { title: "Đăng tin bán xe miễn phí | AHA Xe" },
      {
        name: "description",
        content: "Đăng tin bán ô tô, xe máy, xe điện miễn phí trên AHA Xe. Tin đến tay hàng triệu người mua mỗi ngày.",
      },
    ],
  }),
  component: PostListingPage,
});

function PostListingPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-muted/30">
        <Header />
        <div className="mx-auto max-w-xl px-4 py-16 text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-brand-dark" />
          <h1 className="mt-4 text-2xl font-bold">Tin đã được gửi duyệt</h1>
          <p className="mt-2 text-muted-foreground">
            Tin của bạn sẽ được kiểm duyệt và hiển thị trong vòng 15 phút.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-full bg-foreground px-6 py-2.5 text-sm font-bold text-background"
          >
            Đăng tin khác
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="text-2xl font-bold">Đăng tin bán xe</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Điền thông tin xe của bạn — miễn phí, chỉ mất 1 phút.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-6 space-y-5 rounded-2xl bg-card p-5 shadow-sm"
        >
          <div>
            <Label>Danh mục</Label>
            <select required className="mt-1 w-full rounded-lg border bg-background p-2.5 text-sm">
              <option value="">Chọn danh mục</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.icon} {c.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label>Hình ảnh (tối đa 12 ảnh)</Label>
            <div className="mt-1 grid h-32 place-items-center rounded-xl border-2 border-dashed border-border bg-muted/40 text-muted-foreground">
              <div className="flex flex-col items-center gap-1 text-sm">
                <Camera className="h-6 w-6" />
                Bấm để chọn ảnh
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Tiêu đề tin" placeholder="Ví dụ: Honda SH 150i 2024 đen mờ" required />
            <Field label="Giá bán (VNĐ)" type="number" placeholder="92500000" required />
            <Field label="Hãng xe" placeholder="Honda" required />
            <Field label="Dòng xe" placeholder="SH 150i" required />
            <Field label="Năm sản xuất" type="number" placeholder="2024" required />
            <Field label="Số km đã đi" type="number" placeholder="3200" />
          </div>

          <div>
            <Label>Mô tả chi tiết</Label>
            <textarea
              required
              rows={5}
              className="mt-1 w-full rounded-lg border bg-background p-2.5 text-sm"
              placeholder="Tình trạng xe, lịch sử bảo dưỡng, giấy tờ..."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Họ và tên" required />
            <Field label="Số điện thoại" required />
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              className="flex-1 rounded-full border py-3 text-sm font-bold hover:bg-muted"
            >
              Lưu nháp
            </button>
            <button className="flex-1 rounded-full bg-foreground py-3 text-sm font-bold text-background hover:opacity-90">
              Đăng tin
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-semibold">{children}</label>;
}
function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...rest}
        className="mt-1 w-full rounded-lg border bg-background p-2.5 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
      />
    </div>
  );
}
