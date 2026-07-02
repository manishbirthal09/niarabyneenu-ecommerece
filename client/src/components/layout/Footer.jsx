import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import logo from "../../assets/logo.png";

const INK = "#16271C";

// lucide-react no longer ships brand/logo icons, so this is a plain inline SVG.
function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#16271C] text-white/90 overflow-hidden">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl md:text-2xl mb-1">
              Stay in the drape
            </h3>
            <p className="text-white/60 text-sm">
              New arrivals, styling notes, and early access — straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full md:w-auto max-w-sm border border-white/20 rounded-full pl-5 pr-1.5 py-1.5 focus-within:border-[#16271C]/50 transition-colors"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40 min-w-0"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="shrink-0 w-9 h-9 rounded-full bg-white text-[#16271C] flex items-center justify-center hover:bg-[#16271C]/85 transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="Niara by Neenu" className="h-9 mb-4" />
          <p className="text-white/60 text-sm leading-relaxed max-w-[26ch]">
            Hand-picked sarees crafted for the modern, elegant woman.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="https://wa.me/916235744055"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#16271C] hover:text-white hover:border-[#16271C] transition-colors"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="https://www.instagram.com/niara_by_neenu/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on Instagram"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#16271C] hover:text-white hover:border-[#16271C] transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="mailto:hello@niara.com"
              aria-label="Email us"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#16271C] hover:text-white hover:border-[#16271C] transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4">Shop</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li><a href="/products" className="hover:text-white transition-colors">All Sarees</a></li>
            <li><a href="/products?category=settu" className="hover:text-white transition-colors">Kerala Settu</a></li>
            <li><a href="/products?category=cotton" className="hover:text-white transition-colors">Mul Cottons</a></li>
            <li><a href="/products?category=silk" className="hover:text-white transition-colors">Semi Silks</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="/journal" className="hover:text-white transition-colors">Journal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4">Support</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li><a href="/shipping" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
            <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-3">
        <div className="max-w-7xl mx-auto px-5 md:px-8  flex flex-col-reverse md:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Niara by Neenu. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import {  MessageCircle, Mail } from "lucide-react";
// import logo from "../../assets/logo.png";

// export default function Footer() {
//   return (
//     <footer className="bg-brand-primary text-brand-text-light pt-14 pb-8">
//       <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-10">
//         <div>
//           <img src={logo} alt="Niara" className="h-10 mb-4" />
//           <p className="text-white/60 text-sm leading-relaxed">
//             Hand-picked sarees crafted for the modern, elegant woman.
//           </p>
//         </div>

//         <div>
//           <h4 className="font-serif text-lg mb-3">Quick Links</h4>
//           <ul className="space-y-2 text-sm text-white/70">
//             <li><a href="/products" className="hover:text-white">Collections</a></li>
//             <li><a href="/about" className="hover:text-white">About</a></li>
//             <li><a href="/contact" className="hover:text-white">Contact</a></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-serif text-lg mb-3">Get in Touch</h4>
//           <div className="flex gap-4">
//             <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
//               <MessageCircle size={20} className="hover:text-white/70" />
//             </a>
//             <a href="https://instagram.com/niara_byneenu" target="_blank" rel="noreferrer">
//               {/* <Instagram size={20} className="hover:text-white/70" /> */}
//             </a>
//             <a href="mailto:hello@niara.com">
//               <Mail size={20} className="hover:text-white/70" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
//         © {new Date().getFullYear()} Niara by Neenu. All rights reserved.
//       </div>
//     </footer>
//   );
// }