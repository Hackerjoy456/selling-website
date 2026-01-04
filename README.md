# RANDOM CHEAT SELLING - Premium Gaming Solutions

A modern, professional e-commerce website built with React, TypeScript, Vite, and Tailwind CSS for selling premium gaming cheats and mods.

## 🚀 Features

- ✅ **Multi-page System** - Home, Products, Cart, Wishlist, About, Contact, FAQ, Payment
- ✅ **Product Management** - Detailed product cards with images, features, and pricing
- ✅ **Shopping Cart** - Full cart functionality with quantity management
- ✅ **Wishlist** - Save products for later
- ✅ **Discount/Coupon System** - Apply promo codes for discounts
- ✅ **Product Videos/Demos** - Optional YouTube video embeds
- ✅ **Product Recommendations** - "You May Also Like" section
- ✅ **Quick View** - Hover to preview products quickly
- ✅ **Stock Status** - Real-time stock indicators
- ✅ **Multi-language Support** - 20+ languages with Google Translate
- ✅ **Payment Integration** - Multiple payment methods (bKash, Nagad, UPI, Binance)
- ✅ **Responsive Design** - Perfect on PC, Mobile, Tablet, and TV
- ✅ **Trust Badges** - SSL Secure, Verified Seller badges
- ✅ **Privacy & Refund Policies** - Complete legal pages

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **shadcn-ui** - UI Components
- **Lucide React** - Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This website is configured for deployment on **Cloudflare Pages**.

### Quick Deploy to Cloudflare Pages

1. **Push to GitHub** (already done)
   ```bash
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create Application** → **Pages**
   - Click **Connect to Git**
   - Select your repository: `Hackerjoy456/selling-website`
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Framework preset**: `Vite`
   - Click **Save and Deploy**

3. **Your site will be live at**: `https://selling-website.pages.dev`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
├── public/
│   ├── assets/          # Images and static files
│   └── _redirects      # SPA routing configuration
├── src/
│   ├── components/     # React components
│   │   ├── ui/         # shadcn-ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── ...
│   ├── contexts/       # React Context providers
│   │   ├── CartContext.tsx
│   │   ├── WishlistContext.tsx
│   │   └── LanguageContext.tsx
│   ├── data/           # Data files
│   │   └── products.ts
│   ├── pages/          # Page components
│   ├── types/          # TypeScript types
│   └── lib/            # Utility functions
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Customization

### Adding Products

Edit `src/data/products.ts`:

```typescript
{
  id: "product-id",
  name: "Product Name",
  subtitle: "RANDOM CHEAT SELLING",
  image: "/assets/product-image.jpg",
  description: "Product description",
  features: ["Feature 1", "Feature 2"],
  videoUrl: "https://youtube.com/watch?v=...", // Optional
  stockStatus: "in_stock", // or "low_stock" or "out_of_stock"
  prices: [
    createPrice("1 Day", 2),
    createPrice("7 Days", 4),
  ],
}
```

### Adding Coupon Codes

Edit `src/pages/CartPage.tsx`:

```typescript
const coupons: Record<string, number> = {
  "WELCOME10": 10,
  "SAVE20": 20,
  "YOURCODE": 15,
};
```

## 🔗 Links

- **WhatsApp**: [Contact Us](https://wa.me/8801629933030)
- **Telegram**: [@NIANGII](https://t.me/NIANGII)
- **Discord**: [Join Server](https://discord.gg/vsAavHVEe2)
- **YouTube**: [@cloudengineff](https://www.youtube.com/@cloudengineff)

## 📄 License

© 2025 RANDOM CHEAT SELLING | All Rights Reserved

## 🙏 Support

For support, contact us via WhatsApp or visit our [Contact Page](/contact).

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
