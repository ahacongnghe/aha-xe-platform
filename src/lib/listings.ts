export type Listing = {
  id: string;
  title: string;
  price: number;
  year: number;
  km: number;
  transmission: "Số tự động" | "Số sàn" | "Hybrid";
  fuel: "Xăng" | "Dầu" | "Điện" | "Hybrid";
  category: "oto" | "oto-dien" | "xe-may" | "xe-may-dien" | "xe-dap-dien" | "xe-dap" | "phuong-tien-khac" | "phu-tung";
  categoryLabel: string;
  location: string;
  ward: string;
  postedAgo: string;
  images: string[];
  featured?: boolean;
  seller: { name: string; joined: string; avatar: string; phone: string; rating: number };
  description: string;
  brand: string;
  model: string;
  color: string;
  origin: string;
  bodyType?: string;
};

const u = (q: string, sig: number) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=800&q=70&sig=${sig}`;

export const listings: Listing[] = [
  {
    id: "mitsubishi-lancer-2005",
    title: "Mitsubishi Lancer Gala 2005 1.6 CVT",
    price: 129_000_000,
    year: 2005,
    km: 211573,
    transmission: "Số tự động",
    fuel: "Xăng",
    category: "oto",
    categoryLabel: "Ô tô",
    location: "TP. Thủ Đức",
    ward: "P. Hiệp Bình",
    postedAgo: "26 giây trước",
    images: [
      "photo-1503376780353-7e6692767b70",
      "photo-1542362567-b07e54358753",
      "photo-1494976388531-d1058494cdd8",
    ].map((p, i) => u(p, i + 1)),
    seller: { name: "Anh Tuấn", joined: "Tham gia 3 năm", avatar: "https://i.pravatar.cc/100?img=12", phone: "0901***234", rating: 4.8 },
    description:
      "Xe gia đình sử dụng kỹ, máy gầm chắc, nội thất nguyên zin. Bảo dưỡng định kỳ tại hãng. Hồ sơ pháp lý đầy đủ, sang tên nhanh trong ngày. Liên hệ xem xe trực tiếp.",
    brand: "Mitsubishi",
    model: "Lancer Gala",
    color: "Bạc",
    origin: "Lắp ráp trong nước",
    bodyType: "Sedan",
    featured: false,
  },
  {
    id: "vf8-plus-2026",
    title: "VinFast VF8 Plus 2026 - Thế hệ mới đáng đầu tư",
    price: 848_000_000,
    year: 2026,
    km: 1500,
    transmission: "Số tự động",
    fuel: "Điện",
    category: "oto-dien",
    categoryLabel: "Ô tô điện",
    location: "Quận 1",
    ward: "P. Bến Thành",
    postedAgo: "1 phút trước",
    images: ["photo-1617788138017-80ad40651399", "photo-1593941707882-a5bba14938c7", "photo-1606664515524-ed2f786a0bd6"].map((p, i) => u(p, i + 10)),
    seller: { name: "Showroom EV Sài Gòn", joined: "Tham gia 2 năm", avatar: "https://i.pravatar.cc/100?img=33", phone: "0938***712", rating: 4.9 },
    description:
      "VF8 Plus đời mới, full option, pin thuê hoặc mua tuỳ chọn. Tặng bộ phụ kiện chính hãng, hỗ trợ trả góp 80% qua ngân hàng. Cam kết xe mới 100%.",
    brand: "VinFast",
    model: "VF8 Plus",
    color: "Xanh",
    origin: "Lắp ráp trong nước",
    bodyType: "SUV",
    featured: true,
  },
  {
    id: "honda-sh-2024",
    title: "Honda SH 150i ABS 2024 đen mờ leng keng",
    price: 92_500_000,
    year: 2024,
    km: 3200,
    transmission: "Số tự động",
    fuel: "Xăng",
    category: "xe-may",
    categoryLabel: "Xe máy",
    location: "Quận Bình Thạnh",
    ward: "P. 25",
    postedAgo: "5 phút trước",
    images: ["photo-1558981806-ec527fa84c39", "photo-1568772585407-9361f9bf3a87", "photo-1449426468159-d96dbf08f19f"].map((p, i) => u(p, i + 20)),
    seller: { name: "Minh Phát Moto", joined: "Tham gia 5 năm", avatar: "https://i.pravatar.cc/100?img=8", phone: "0907***189", rating: 5 },
    description:
      "SH 150i ABS đời 2024 màu đen mờ, odo 3.200km, biển số đẹp, một đời chủ. Xe còn bảo hành chính hãng, giấy tờ chính chủ sang tên nhanh.",
    brand: "Honda",
    model: "SH 150i",
    color: "Đen mờ",
    origin: "Nhập khẩu",
    featured: true,
  },
  {
    id: "vinfast-evo200",
    title: "VinFast Evo200 Lite 2025 – xe máy điện đi học",
    price: 21_900_000,
    year: 2025,
    km: 800,
    transmission: "Số tự động",
    fuel: "Điện",
    category: "xe-may-dien",
    categoryLabel: "Xe máy điện",
    location: "Quận Tân Bình",
    ward: "P. 12",
    postedAgo: "12 phút trước",
    images: ["photo-1571068316344-75bc76f77890", "photo-1609630875171-b1321377ee65", "photo-1568772585407-9361f9bf3a87"].map((p, i) => u(p, i + 30)),
    seller: { name: "Chị Hằng", joined: "Tham gia 1 năm", avatar: "https://i.pravatar.cc/100?img=47", phone: "0966***501", rating: 4.7 },
    description: "Xe mới đi 800km, pin Lithium, quãng đường ~100km/lần sạc. Phù hợp học sinh sinh viên, đi nội thành tiết kiệm.",
    brand: "VinFast",
    model: "Evo200 Lite",
    color: "Trắng",
    origin: "Lắp ráp trong nước",
  },
  {
    id: "suzuki-fronx-2026",
    title: "Suzuki Fronx GLX Plus 2026 ưu đãi tới 30 triệu",
    price: 649_000_000,
    year: 2026,
    km: 0,
    transmission: "Hybrid",
    fuel: "Hybrid",
    category: "oto",
    categoryLabel: "Ô tô",
    location: "TP. Thủ Dầu Một",
    ward: "P. Phú Lợi",
    postedAgo: "52 giây trước",
    images: ["photo-1502877338535-766e1452684a", "photo-1494976388531-d1058494cdd8", "photo-1605559424843-9e4c228bf1c2"].map((p, i) => u(p, i + 40)),
    seller: { name: "Suzuki Bình Dương", joined: "Tham gia 4 năm", avatar: "https://i.pravatar.cc/100?img=15", phone: "0918***223", rating: 4.9 },
    description: "Mẫu SUV đô thị mới nhất, động cơ Hybrid tiết kiệm 4.5L/100km. Tặng phụ kiện, hỗ trợ vay 85%, lái thử ngay tại showroom.",
    brand: "Suzuki",
    model: "Fronx GLX Plus",
    color: "Xám",
    origin: "Nhập khẩu",
    bodyType: "SUV",
    featured: true,
  },
  {
    id: "honda-dream-2002",
    title: "Honda Dream Thái 2002 còn zin",
    price: 16_800_000,
    year: 2002,
    km: 45000,
    transmission: "Số sàn",
    fuel: "Xăng",
    category: "xe-may",
    categoryLabel: "Xe máy",
    location: "Quận Gò Vấp",
    ward: "P. 5",
    postedAgo: "8 phút trước",
    images: ["photo-1568772585407-9361f9bf3a87", "photo-1558981806-ec527fa84c39", "photo-1449426468159-d96dbf08f19f"].map((p, i) => u(p, i + 50)),
    seller: { name: "Anh Hoà", joined: "Tham gia 6 năm", avatar: "https://i.pravatar.cc/100?img=22", phone: "0912***445", rating: 4.6 },
    description: "Xe sưu tầm, dàn áo zin, máy êm. Sổ đăng ký gốc, biển 5 số TPHCM.",
    brand: "Honda",
    model: "Dream",
    color: "Nâu",
    origin: "Nhập khẩu",
  },
  {
    id: "wuling-mini-ev",
    title: "Wuling Hongguang Mini EV 2024",
    price: 219_000_000,
    year: 2024,
    km: 5800,
    transmission: "Số tự động",
    fuel: "Điện",
    category: "oto-dien",
    categoryLabel: "Ô tô điện",
    location: "Hà Nội",
    ward: "P. Cầu Giấy",
    postedAgo: "20 phút trước",
    images: ["photo-1606664515524-ed2f786a0bd6", "photo-1593941707882-a5bba14938c7", "photo-1617788138017-80ad40651399"].map((p, i) => u(p, i + 60)),
    seller: { name: "EV Hà Nội", joined: "Tham gia 2 năm", avatar: "https://i.pravatar.cc/100?img=5", phone: "0977***812", rating: 4.8 },
    description: "Xe điện cỡ nhỏ tiện đi phố, 4 chỗ, sạc bình thường 6 tiếng đầy pin.",
    brand: "Wuling",
    model: "Mini EV",
    color: "Vàng",
    origin: "Nhập khẩu",
    bodyType: "Hatchback",
  },
  {
    id: "yamaha-exciter-2023",
    title: "Yamaha Exciter 155 VVA 2023 bản giới hạn",
    price: 49_000_000,
    year: 2023,
    km: 12000,
    transmission: "Số sàn",
    fuel: "Xăng",
    category: "xe-may",
    categoryLabel: "Xe máy",
    location: "Quận 7",
    ward: "P. Tân Phong",
    postedAgo: "35 phút trước",
    images: ["photo-1449426468159-d96dbf08f19f", "photo-1558981806-ec527fa84c39", "photo-1568772585407-9361f9bf3a87"].map((p, i) => u(p, i + 70)),
    seller: { name: "Bạn Khoa", joined: "Tham gia 2 năm", avatar: "https://i.pravatar.cc/100?img=31", phone: "0933***667", rating: 4.5 },
    description: "Exciter bản giới hạn, full đồ chơi, máy zin nguyên bản. Đăng ký 2023.",
    brand: "Yamaha",
    model: "Exciter 155 VVA",
    color: "Xanh GP",
    origin: "Lắp ráp trong nước",
  },
];

export const categories = [
  { slug: "oto", label: "Ô tô", icon: "🚗" },
  { slug: "oto-dien", label: "Ô tô điện", icon: "⚡" },
  { slug: "xe-may", label: "Xe máy", icon: "🛵" },
  { slug: "xe-may-dien", label: "Xe máy điện", icon: "🔌" },
  { slug: "xe-dap-dien", label: "Xe đạp điện", icon: "🚲" },
  { slug: "xe-dap", label: "Xe đạp", icon: "🚴" },
  { slug: "phuong-tien-khac", label: "Phương tiện khác", icon: "🚜" },
  { slug: "phu-tung", label: "Phụ tùng xe", icon: "🛞" },
];

export const formatPrice = (n: number) => {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(2).replace(/\.?0+$/, "") + " tỷ";
  return new Intl.NumberFormat("vi-VN").format(n) + " đ";
};

export const formatKm = (n: number) => new Intl.NumberFormat("vi-VN").format(n) + " km";

export const getListing = (id: string) => listings.find((l) => l.id === id);
export const getRelated = (id: string, cat: string) =>
  listings.filter((l) => l.id !== id && l.category === cat).slice(0, 4);
