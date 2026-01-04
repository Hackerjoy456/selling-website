import { Product } from "@/types";

// Helper function to calculate prices: 1 USDT = 100 BDT = 100 INR
function createPrice(duration: string, usdt: number, note?: string) {
  return {
    duration,
    bdt: usdt * 100,
    inr: usdt * 100,
    usdt,
    ...(note && { note }),
  };
}

export const products: Product[] = [
  {
    id: "drip-clint-mobile",
    name: "DRIP CLINT – MOBILE",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/Drip clint.jpg",
    description: "Advanced mobile gaming solution with premium features and undetected gameplay.",
    features: [
      "Undetected gameplay",
      "Auto aim & ESP",
      "Wallhack features",
      "Mobile optimized"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 4),
      createPrice("15 Days", 8),
      createPrice("30 Days", 11),
    ],
  },
  {
    id: "drip-clint-pc",
    name: "DRIP CLINT – PC",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/Drip clint.jpg",
    description: "Professional PC gaming solution with advanced features for competitive play.",
    features: [
      "High performance",
      "Advanced ESP",
      "Aimbot system",
      "PC optimized"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 6),
      createPrice("15 Days", 10.9),
      createPrice("30 Days", 15),
    ],
  },
  {
    id: "drip-clint-root",
    name: "DRIP CLINT – ROOT",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/Drip clint.jpg",
    description: "Root access solution for maximum control and advanced features.",
    features: [
      "Root access",
      "Full control",
      "Advanced features",
      "Regular updates"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 4),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "br-mods-root",
    name: "BR MODS – ROOT",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/br.png.jpg",
    description: "Battle Royale mods with root access for enhanced gameplay experience.",
    features: [
      "BR optimized",
      "Root required",
      "Enhanced mods",
      "Safe & secure"
    ],
    prices: [
      createPrice("7 Days", 4),
      createPrice("15 Days", 6),
      createPrice("30 Days", 8),
    ],
  },
  {
    id: "br-mods-bypass-pc",
    name: "BR MODS – BYPASS PC",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/br.png.jpg",
    description: "Advanced bypass system for PC with anti-detection technology.",
    features: [
      "Anti-detection",
      "Bypass system",
      "PC optimized",
      "Stealth mode"
    ],
    prices: [
      createPrice("1 Day", 3),
      createPrice("10 Days", 7),
      createPrice("30 Days", 12),
    ],
  },
  {
    id: "br-mods-silentaim-pc",
    name: "BR MODS – SILENTAIM PC",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/br.png.jpg",
    description: "Silent aim system for PC with precision targeting and smooth gameplay.",
    features: [
      "Silent aim",
      "Precision targeting",
      "Smooth gameplay",
      "Undetectable"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("10 Days", 5),
      createPrice("30 Days", 12),
    ],
  },
  {
    id: "hg-cheats",
    name: "HG CHEATS",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/hg.jpg",
    description: "Premium HG cheats with advanced features and regular updates.",
    features: [
      "Premium quality",
      "Regular updates",
      "Advanced features",
      "24/7 support"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("10 Days", 3),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "prime-mods",
    name: "PRIME MODS",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/prime.jpg.png",
    description: "Prime quality mods with exclusive features and premium support.",
    features: [
      "Prime quality",
      "Exclusive features",
      "Premium support",
      "Fast updates"
    ],
    prices: [
      createPrice("5 Days", 4),
      createPrice("10 Days", 6),
    ],
  },
  {
    id: "syscall-controls",
    name: "SYSCALL CONTROLS",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/logo.svg",
    description: "Advanced syscall controls with system-level access and optimization.",
    features: [
      "System-level access",
      "Advanced controls",
      "Optimized performance",
      "Secure & safe"
    ],
    prices: [
      createPrice("5 Days", 3.5),
      createPrice("10 Days", 6),
      createPrice("20 Days", 10),
    ],
  },
  {
    id: "pato-team",
    name: "PATO TEAM",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/Pato team.jpg",
    description: "Professional team solution with enterprise-level features.",
    features: [
      "Team features",
      "Enterprise level",
      "Professional grade",
      "Multi-user support"
    ],
    prices: [
      createPrice("1 Day", 2.5),
      createPrice("3 Days", 4),
      createPrice("7 Days", 8),
    ],
  },
  {
    id: "fluorite-ios",
    name: "FLUORITE iOS – FREE FIRE",
    subtitle: "iPhone 6–17",
    image: "/assets/Flourite.jpg",
    description: "iOS optimized solution for iPhone users with full device support.",
    features: [
      "iOS optimized",
      "iPhone 6-17 support",
      "Full device support",
      "G-Box compatible"
    ],
    prices: [
      createPrice("1 Day", 4),
      createPrice("7 Days", 15),
      createPrice("31 Days", 25),
      createPrice("31 Days", 35, "WITH G-BOX"),
    ],
  },
  {
    id: "lk-team-root-emu",
    name: "LK TEAM – ROOT + EMU PC",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/Lk team.png",
    description: "Root and emulator support for PC with advanced emulation features.",
    features: [
      "Root support",
      "Emulator compatible",
      "PC optimized",
      "Advanced features"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("5 Days", 3),
      createPrice("10 Days", 5),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "mr-robot",
    name: "MR ROBOT",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/mr-robot.jpg",
    description: "Advanced robotic system with AI-powered features and automation.",
    features: [
      "AI-powered",
      "Automation",
      "Advanced system",
      "Smart features"
    ],
    prices: [
      createPrice("10 Days", 4),
      createPrice("20 Days", 6),
    ],
  },
];
