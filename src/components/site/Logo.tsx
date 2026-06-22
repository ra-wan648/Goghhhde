import logo from "@/assets/jepy-logo.png.asset.json";

export function Logo({ className = "h-7 w-auto", alt = "Jepy" }: { className?: string; alt?: string }) {
  return <img src={logo.url} alt={alt} className={className} loading="eager" decoding="async" />;
}
