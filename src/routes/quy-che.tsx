import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/quy-che")({
  head: () => ({ meta: [{ title: "Quy chế hoạt động | AHA Xe" }] }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-8 text-sm leading-relaxed text-foreground/90">
        <h1 className="text-2xl font-bold">Quy chế hoạt động</h1>
        <p className="mt-2 text-muted-foreground">Cập nhật: 06/2026</p>

        <h2 className="mt-6 text-lg font-bold">1. Giới thiệu</h2>
        <p>AHA Xe là nền tảng kết nối người mua và người bán xe trên toàn quốc. Mọi giao dịch giữa hai bên là tự nguyện.</p>

        <h2 className="mt-6 text-lg font-bold">2. Quyền và nghĩa vụ của người dùng</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Đăng tin trung thực, đúng tình trạng xe.</li>
          <li>Không đăng tin lừa đảo, sao chép, hoặc nội dung vi phạm pháp luật.</li>
          <li>Có quyền báo cáo tin vi phạm.</li>
        </ul>

        <h2 className="mt-6 text-lg font-bold">3. Quyền và nghĩa vụ của AHA</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Kiểm duyệt tin trong vòng 24 giờ.</li>
          <li>Bảo mật thông tin cá nhân của người dùng.</li>
          <li>Có quyền gỡ tin vi phạm mà không cần báo trước.</li>
        </ul>

        <h2 className="mt-6 text-lg font-bold">4. Giải quyết tranh chấp</h2>
        <p>Mọi tranh chấp phát sinh sẽ được giải quyết bằng thương lượng; nếu không đạt được, sẽ chuyển đến toà án có thẩm quyền tại TP.HCM.</p>
      </section>
      <Footer />
    </div>
  );
}
