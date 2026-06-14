import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MessageCircle, Settings, Star, Tag } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/tai-khoan")({
  head: () => ({ meta: [{ title: "Tài khoản của tôi | AHA Xe" }] }),
  component: AccountPage,
});

function AccountPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col gap-4 rounded-2xl bg-card p-5 shadow-sm md:flex-row md:items-center">
          <img
            src="https://i.pravatar.cc/120?img=14"
            alt=""
            className="h-20 w-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="text-xl font-bold">Người dùng AHA</div>
            <div className="text-sm text-muted-foreground">Tham gia từ 2024 · Chưa xác thực</div>
            <div className="mt-1 flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-brand text-brand" />
              <span className="font-semibold">5.0</span>
              <span className="text-muted-foreground">(0 đánh giá)</span>
            </div>
          </div>
          <Link
            to="/dang-tin"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background"
          >
            + Đăng tin mới
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat icon={<Tag className="h-5 w-5" />} label="Tin đang đăng" value="0" />
          <Stat icon={<Heart className="h-5 w-5" />} label="Tin đã lưu" value="3" />
          <Stat icon={<MessageCircle className="h-5 w-5" />} label="Tin nhắn" value="4" />
          <Stat icon={<Star className="h-5 w-5" />} label="Đánh giá" value="0" />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <MenuLink to="/tin-da-luu" title="Tin đã lưu" desc="Các xe bạn đã đánh dấu" />
          <MenuLink to="/tin-nhan" title="Hộp thư" desc="Trao đổi với người bán" />
          <MenuLink to="/thong-bao" title="Thông báo" desc="Tin mới và cập nhật" />
          <MenuLink to="/tro-giup" title="Trợ giúp" desc="Câu hỏi thường gặp" />
        </div>

        <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <Settings className="h-4 w-4" /> Cài đặt tài khoản
        </button>
      </section>
      <Footer />
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-card p-4 shadow-sm">
      <div className="flex items-center gap-2 text-muted-foreground">{icon}<span className="text-xs">{label}</span></div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  );
}
function MenuLink({ to, title, desc }: { to: string; title: string; desc: string }) {
  return (
    <Link
      to={to}
      className="flex items-center justify-between rounded-2xl bg-card p-4 shadow-sm hover:bg-muted"
    >
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      <span className="text-muted-foreground">›</span>
    </Link>
  );
}
