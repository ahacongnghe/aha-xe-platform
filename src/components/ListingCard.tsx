import { Link } from "@tanstack/react-router";
import { Camera, Heart, MapPin } from "lucide-react";
import { formatKm, formatPrice, type Listing } from "@/lib/listings";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      to="/tin/$id"
      params={{ id: listing.id }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={listing.images[0]}
          alt={listing.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {listing.featured && (
          <span className="absolute left-2 top-2 rounded-md bg-tag px-2 py-0.5 text-[11px] font-bold text-tag-foreground">
            Tin nổi bật
          </span>
        )}
        <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-md bg-black/60 px-1.5 py-0.5 text-[11px] font-medium text-white">
          <Camera className="h-3 w-3" /> {listing.images.length}
        </span>
        <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 text-[11px] font-medium text-white">
          {listing.postedAgo}
        </span>
        <button
          onClick={(e) => e.preventDefault()}
          aria-label="Lưu tin"
          className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-foreground shadow hover:text-price"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug">{listing.title}</h3>
        <div className="mt-0.5 flex flex-wrap gap-x-2 gap-y-0.5 text-[12px] text-muted-foreground">
          <span>{listing.year}</span>
          <span>·</span>
          <span>{formatKm(listing.km)}</span>
          <span>·</span>
          <span className="truncate">{listing.transmission}</span>
        </div>
        <div className="mt-1 text-base font-bold text-price">{formatPrice(listing.price)}</div>
        <div className="mt-auto flex items-center gap-1 pt-2 text-[12px] text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="truncate">{listing.location}</span>
        </div>
      </div>
    </Link>
  );
}
