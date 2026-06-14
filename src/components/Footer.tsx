import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/listings";

export function Footer() {
  return (
    <footer className="mt-8 border-t bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 text-sm md:grid-cols-4">
        <div>
          <div className="mb-2 font-black">
            AHA<span className="text-brand-dark">Xe</span>
          </div>
          <p className="text-muted-foreground">
            Chợ mua bán xe cũ & mới nhanh, an toàn cho người Việt.
          </p>
        </div>
        <div>
          <div className="mb-2 font-semibold">Danh mục</div>
          <ul className="space-y-1 text-muted-foreground">
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/mua-ban/$category"
                  params={{ category: c.slug }}
                  className="hover:text-foreground hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold">Hỗ trợ</div>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <Link to="/tro-giup" className="hover:text-foreground hover:underline">
                Trợ giúp
              </Link>
            </li>
            <li>
              <Link to="/quy-che" className="hover:text-foreground hover:underline">
                Quy chế hoạt động
              </Link>
            </li>
            <li>
              <Link to="/lien-he" className="hover:text-foreground hover:underline">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold">Tải ứng dụng</div>
          <p className="text-muted-foreground">AHA Xe trên App Store & Google Play.</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AHA Xe. All rights reserved.
      </div>
    </footer>
  );
}
