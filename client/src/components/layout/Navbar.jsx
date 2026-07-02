import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import logo from "../../assets/logo.png";

const leftLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/products" },
];

const rightLinks = [
  { name: "About", path: "/about" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/" },
];

const allLinks = [...leftLinks, ...rightLinks];

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative py-0.5 text-[13px] uppercase tracking-[0.14em] transition-colors duration-300 ${
        isActive ? "text-white" : "text-white/60 hover:text-white"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-0.5 h-px bg-white transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#16271C] overflow-x-hidden transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.08)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-[1fr_auto_1fr] items-center  h-18 md:h-14">
        {/* Left nav — desktop */}
        <nav className="hidden md:flex items-center gap-9 col-start-1">
          {leftLinks.map((link) => (
            <span key={link.name} className="group">
              <NavLink to={link.path}>{link.name}</NavLink>
            </span>
          ))}
        </nav>

        {/* Logo — center */}
        <Link to="/" className="shrink-0 justify-self-center col-start-2">
          <img src={logo} alt="Niara by Neenu" className="h-9 md:h-10 w-auto" />
        </Link>

        {/* Right nav — desktop */}
        <div className="hidden md:flex items-center gap-9 justify-self-end col-start-3">
          {rightLinks.map((link) => (
            <span key={link.name} className="group">
              <NavLink to={link.path}>{link.name}</NavLink>
            </span>
          ))}
          <Link
            to="/"
            aria-label="Cart"
            className="text-white/70 hover:text-white transition-colors duration-300 ml-1"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-5 col-start-3 justify-self-end">
          <Link to="/cart" aria-label="Cart" className="text-white/80">
            <ShoppingBag size={19} strokeWidth={1.5} />
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-white/90 relative w-6 h-6"
          >
            <Menu
              size={22}
              strokeWidth={1.5}
              className={`absolute inset-0 transition-all duration-300 ${
                menuOpen ? "opacity-0 rotate-45" : "opacity-100 rotate-0"
              }`}
            />
            <X
              size={22}
              strokeWidth={1.5}
              className={`absolute inset-0 transition-all duration-300 ${
                menuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-18 bottom-0 bg-[#16271C] transition-all duration-300 ease-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 pt-8">
          {allLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-2xl font-serif text-white/90 border-b border-white/10 transition-colors duration-200 hover:text-white"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, ShoppingBag } from "lucide-react";
// import logo from "../../assets/logo.png";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Collections", path: "/products" },
//     { name: "About", path: "/about" },
//     { name: "Reviews", path: "/reviews" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="bg-[#16271C] text-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
//         {/* Left nav - desktop */}
//         <nav className="hidden md:flex gap-8 text-sm tracking-wide">
//           <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
//           <Link to="/products" className="hover:text-white/70 transition-colors">Collections</Link>
//         </nav>

//         {/* Logo - center */}
//         <Link to="/" className="flex-shrink-0">
//           <img src={logo} alt="Niara" className="h-10 md:h-12 w-auto" />
//         </Link>

//         {/* Right nav - desktop */}
//         <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
//           <Link to="/about" className="hover:text-white/70 transition-colors">About</Link>
//           <Link to="/reviews" className="hover:text-white/70 transition-colors">Reviews</Link>
//           <Link to="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
//           <Link to="/cart" className="hover:text-white/70 transition-colors">
//             <ShoppingBag size={20} />
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden flex items-center gap-4">
//           <Link to="/cart"><ShoppingBag size={20} /></Link>
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col gap-4 px-5 pb-6 text-sm">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={() => setMenuOpen(false)}
//               className="hover:text-white/70"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }