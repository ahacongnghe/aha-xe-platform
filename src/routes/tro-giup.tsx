import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/tro-giup")({
  head: () => ({ meta: [{ title: "Trợ giúp | AHA Xe" }] }),
  component: HelpPage,
});

const faqs = [
  ["Làm sao để đăng tin?", "Bấm nút Đăng tin trên đầu trang, điền thông tin xe và hình ảnh, sau đó gửi duyệt."],
  ["Đăng tin có mất phí không?", "Đăng tin cơ bản miễn phí. Bạn có thể mua gói đẩy tin để hiển thị nổi bật."],
  ["Tôi phải làm gì khi gặp người bán không đáng tin?", "Báo cáo tin vi phạm qua nút Báo cáo ở trang chi tiết tin. AHA sẽ kiểm tra trong 24h."],
  ["Có hỗ trợ kiểm định xe không?", "AHA hợp tác với các garage uy tín để kiểm định xe có phí. Xem mục Dịch vụ kiểm định."],
];

function HelpPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-bold">Trung tâm trợ giúp</h1>
        <p className="mt-1 text-sm text-muted-foreground">Câu hỏi thường gặp khi sử dụng AHA Xe.</p>
        <div className="mt-5 space-y-2">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl bg-card p-4 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                <span className="mr-2 text-brand-dark group-open:rotate-90 inline-block transition">›</span>
                {q}
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
