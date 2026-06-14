import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/dang-nhap")({
  head: () => ({
    meta: [{ title: "Đăng nhập | AHA Xe" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <section className="mx-auto max-w-md px-4 py-10">
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-1 rounded-full bg-muted p-1 text-sm font-semibold">
            <button
              onClick={() => setMode("login")}
              className={`rounded-full py-2 ${mode === "login" ? "bg-foreground text-background" : ""}`}
            >
              Đăng nhập
            </button>
            <button
              onClick={() => setMode("register")}
              className={`rounded-full py-2 ${mode === "register" ? "bg-foreground text-background" : ""}`}
            >
              Đăng ký
            </button>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 space-y-3"
          >
            {mode === "register" && (
              <input
                placeholder="Họ và tên"
                className="w-full rounded-lg border bg-background p-3 text-sm"
              />
            )}
            <input
              placeholder="Số điện thoại"
              className="w-full rounded-lg border bg-background p-3 text-sm"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full rounded-lg border bg-background p-3 text-sm"
            />
            <button className="w-full rounded-full bg-foreground py-3 text-sm font-bold text-background">
              {mode === "login" ? "Đăng nhập" : "Tạo tài khoản"}
            </button>
          </form>

          <div className="my-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" /> hoặc <span className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-2">
            <button className="w-full rounded-full border py-2.5 text-sm font-semibold hover:bg-muted">
              Tiếp tục với Google
            </button>
            <button className="w-full rounded-full border py-2.5 text-sm font-semibold hover:bg-muted">
              Tiếp tục với Facebook
            </button>
          </div>

          <p className="mt-5 text-center text-xs text-muted-foreground">
            Bằng việc tiếp tục, bạn đồng ý với{" "}
            <Link to="/quy-che" className="text-brand-dark underline">
              Quy chế
            </Link>{" "}
            của AHA Xe.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
