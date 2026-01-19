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
    id: "drip-client-mobile",
    name: "DRIP CLIENT MOD MENU APK",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/Drip clint.jpg",
    description: "📌 NOTE: It Will Run Directly On Your Phone And Will Be In Easy Use",
    features: [
      "🎚️ Aim Kill",
      "🎚️ Silent Aim",
      "🎚️ Silent Kill",
      "🎚️ Fly Hack",
      "🎚️ God Mode (Ghost)",
      "🎚️ Speed Timer",
      "🎚️ Teleport 8m",
      "🎚️ Up Player",
      "🎚️ Auto Swap Weapon"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 4),
      createPrice("15 Days", 8),
      createPrice("30 Days", 11),
    ],
  },
  {
    id: "drip-client-pc",
    name: "DRIP CLIENT MOD MENU PC",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/Drip clint.jpg",
    description: "📌 NOTE: Professional gaming solution with advanced features and easy setup.",
    features: [
      "🎚️ Aim Kill",
      "🎚️ Silent Aim",
      "🎚️ Silent Kill",
      "🎚️ Fly Hack",
      "🎚️ God Mode (Ghost)",
      "🎚️ Speed Timer",
      "🎚️ Teleport 8m",
      "🎚️ Up Player",
      "🎚️ Auto Swap Weapon"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 6),
      createPrice("15 Days", 10.9),
      createPrice("30 Days", 15),
    ],
  },
  {
    id: "drip-client-root",
    name: "DRIP CLIENT MOD MENU ROOT",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/Drip clint.jpg",
    description: "📌 NOTE: Root access version for maximum control and advanced features.",
    features: [
      "🎚️ Aim Kill",
      "🎚️ Silent Aim",
      "🎚️ Silent Kill",
      "🎚️ Fly Hack",
      "🎚️ God Mode (Ghost)",
      "🎚️ Speed Timer",
      "🎚️ Teleport 8m",
      "🎚️ Up Player",
      "🎚️ Auto Swap Weapon"
    ],
    prices: [
      createPrice("1 Day", 2),
      createPrice("7 Days", 4),
      createPrice("30 Days", 10),
    ],
  },
  {
    id: "br-mods-root",
    name: "BR MODE INJECTOR",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/br.png.jpg",
    description: "✅ NOTE: (VphoneOS Non Root) | Root Device | Emulator | ✓ 100% Rank Working",
    features: [
      "👍 Silent Aim Bot",
      "👍 Headshot Hack",
      "👍 Aim FOV 360",
      "👍 Aim Magnet",
      "👍 Speed Hack",
      "👍 Ghost Hack",
      "👍 ESP Location",
      "👍 CS / BR Rank Working"
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
    description: "✅ NOTE: Emulator Bypass - Play in Mobile Lobby from PC | Advanced Anti-Detection | 100% Secure",
    features: [
      "🛡️ Emulator Bypass (Mobile Lobby)",
      "👍 Silent Aim Bot",
      "👍 Headshot Hack",
      "👍 Aim FOV 360",
      "👍 Aim Magnet",
      "👍 Speed Hack",
      "👍 Ghost Hack",
      "👍 ESP Location",
      "👍 CS / BR Rank Working"
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
    description: "✅ NOTE: High-Precision Silent Aim System | Performance Optimized for PC",
    features: [
      "🎯 Silent Aim System (Main)",
      "👍 Headshot Hack",
      "👍 Aim FOV 360",
      "👍 Aim Magnet",
      "👍 Speed Hack",
      "👍 Ghost Hack",
      "👍 ESP Location",
      "👍 CS / BR Rank Working"
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
    name: "FLUORITE iOS PANEL",
    subtitle: "iPhone 6–17",
    image: "/assets/Flourite.jpg",
    description: "iOS optimized solution for iPhone users with full device support.",
    features: [
      "👍 Aimbot – Neck | Head | Body",
      "👍 Bone Aimbot – Pinpoint Accuracy",
      "👍 Silent Aim – No Movement, Just Kill",
      "👍 Custom AimFOV – Smooth Control",
      "👍 Speed Boost – 10x Faster Than Normal",
      "👍 ESP Location – See Enemies Before They See",
      "👍 Streamer Mode – For Secret Play",
      "😀 Main ID Safe",
      "😀 No iPhone Restart – Plug & Play",
      "💀 Advanced AntiBan – Maximum Protection",
      "✅ No one will be able to see ESP / Aim in screen share",
      "✅ Only you can see everything"
    ],
    prices: [
      createPrice("1 Day", 5),
      createPrice("7 Days", 17),
      createPrice("1 Month + G-BOX", 45),
    ],
    videoUrl: "https://youtu.be/H1X8H0EIiMo",
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
  {
    id: "free-fire-uid-bypass",
    name: "FREE FIRE UID BYPASS",
    subtitle: "RANDOM CHEAT SELLING",
    image: "/assets/pc-to-mobile-uid.svg",
    description: "✅ Advanced UID Bypass for Free Fire - Works on all servers, emulators, and game modes. Cross-platform reconnect support.",
    features: [
      "[+] Works on all servers",
      "[+] Available in Custom, CS Rank and BR-Ranked modes",
      "[+] Works on all Emulator",
      "[+] Free Fire and Free Fire max working",
      "[+] Gameplay Spectate Possible",
      "[+] Reconnect Possible",
      "[+] 💻Pc to 📱Mobile & Mobile📱 to pc💻 Reconnect Possible"
    ],
    prices: [
      createPrice("1 Day", 1),
      createPrice("1 Week", 4),
      createPrice("15 Days", 6),
      createPrice("1 Month", 8),
      createPrice("2 Months", 14),
      createPrice("3 Months", 22),
      createPrice("4 Months", 28),
      createPrice("5 Months", 34),
      createPrice("6 Months", 39),
      createPrice("Permanent", 130),
    ],
    videoUrl: "https://www.youtube.com/watch?v=Mjj3VdCpXQU",
  },
];
