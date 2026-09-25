import {
  Home,
  Gamepad2,
  Flame,
  Sparkles,
  Radio,
  Gift,
  Heart,
  Settings,
} from "lucide-react";

export const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/games", label: "Games", icon: Gamepad2 },
  { href: "/popular", label: "Popular", icon: Flame },
  { href: "/new-games", label: "New Games", icon: Sparkles },
  { href: "/live", label: "Live", icon: Radio },
  { href: "/promotions", label: "Promotions", icon: Gift },
  { href: "/favorites", label: "Favorites", icon: Heart },
  { href: "/settings", label: "Settings", icon: Settings },
];
