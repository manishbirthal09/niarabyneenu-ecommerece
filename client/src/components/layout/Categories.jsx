import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Local imports — bundler (Vite/CRA/Next) resolves these to built asset URLs.
// Adjust the path and filenames to match your project's assets folder.
import suitsSetsImg from "../../assets/PremiumSettumundu.png";
import shirtsImg from "../../assets/PremiumtissueSettumundu .png";
import coOrdSetsImg from "../../assets/Tissuesettumundu.png";
import sareesImg from "../../assets/Settumundu.png";
import dressesImg from "../../assets/Settusaree.png";

const categories = [
  { name: "Premium Settumundu Saree", href: "/collections/suits-sets", img: suitsSetsImg },
  { name: "Premium Tissue Settumundu Saree", href: "/collections/shirts", img: shirtsImg },
  { name: "Tissue Settumundu Saree", href: "/collections/co-ord-sets", img: coOrdSetsImg },
  { name: "Settumundu Saree", href: "/collections/sarees", img: sareesImg },
  { name: "Settu Saree", href: "/collections/dresses", img: dressesImg },
];

export default function CategoryCarousel() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
    const cardWidth = el.firstChild?.offsetWidth || 1;
    const gap = 24;
    const idx = Math.round(el.scrollLeft / (cardWidth + gap));
    setActive(Math.min(idx, categories.length - 1));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 320;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  const onPointerDown = (e) => {
    const el = trackRef.current;
    drag.current = { down: true, startX: e.pageX, startScroll: el.scrollLeft, moved: false };
    setDragging(true);
  };
  const onPointerMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.pageX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    setDragging(false);
  };
  const onCardClick = (e) => {
    if (drag.current.moved) e.preventDefault();
  };

  return (
    <section className="bg-white py-20 font-['Inter',_system-ui,_sans-serif] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500&display=swap');
        .cc-track::-webkit-scrollbar { display: none; }
        .cc-label::after {
          content: "";
          position: absolute;
          left: 0; bottom: -6px;
          width: 22px; height: 1px;
          background: #E9E1D6;
          transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), background 0.45s;
        }
        .cc-card:hover .cc-label::after { width: 100%; background: #C8785A; }
        .cc-card:hover img { transform: scale(1.04); }
      `}</style>

      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-11 flex items-baseline justify-between">
          <h2 className="m-0 font-['Cormorant_Garamond',_serif] text-[1.9rem] font-semibold tracking-[0.02em] text-[#16271C]">
            Shop by category
          </h2>

          <div className="flex items-center gap-2.5">
            <span className="mr-1.5 text-xs tabular-nums tracking-[0.08em] text-[#8A7A6D]">
              {String(active + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
            </span>
            <button
              aria-label="Previous category"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8CDBE] text-[#8A7A6D] transition-colors hover:border-[#241C16] hover:text-[#241C16] disabled:cursor-default disabled:opacity-25"
            >
              <ArrowLeft size={15} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Next category"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8CDBE] text-[#8A7A6D] transition-colors hover:border-[#241C16] hover:text-[#241C16] disabled:cursor-default disabled:opacity-25"
            >
              <ArrowRight size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className={`cc-track mx-auto flex max-w-[1120px] select-none gap-6 overflow-x-auto px-6 [scrollbar-width:none] [scroll-snap-type:x_mandatory] ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {categories.map((cat) => (
          <a
            key={cat.name}
            href={cat.href}
            onClick={onCardClick}
            className="cc-card block w-[min(320px,78vw)] flex-none [scroll-snap-align:start]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#EDE6DB]">
              <img
                src={cat.img}
                alt={cat.name}
                draggable={false}
                className="block h-full w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,14,10,0.55)] via-transparent to-transparent" />
              <span className="cc-label absolute bottom-[22px] left-5 font-['Cormorant_Garamond',_serif] text-[1.07rem] font-semibold uppercase tracking-[0.12em] text-[#FBF7F2]">
                {cat.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


// import { useRef, useState, useEffect, useCallback } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const categories = [
//   {
//     name: "Suits & Sets",
//     href: "/collections/suits-sets",
//     img:,
//   },
//   {
//     name: "Shirts",
//     href: "/collections/shirts",
//     img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=900&q=80",
//   },
//   {
//     name: "Co-ord Sets",
//     href: "/collections/co-ord-sets",
//     img: "https://images.unsplash.com/photo-1610189844303-c5e2f7eb5c5d?w=900&q=80",
//   },
//   {
//     name: "Sarees",
//     href: "/collections/sarees",
//     img: "https://images.unsplash.com/photo-1610030469525-38e0037e8f6f?w=900&q=80",
//   },
//   {
//     name: "Dresses",
//     href: "/collections/dresses",
//     img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80",
//   },
// ];

// export default function CategoryCarousel() {
//   const trackRef = useRef(null);
//   const [active, setActive] = useState(0);
//   const [canPrev, setCanPrev] = useState(false);
//   const [canNext, setCanNext] = useState(true);
//   const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

//   const updateEdges = useCallback(() => {
//     const el = trackRef.current;
//     if (!el) return;
//     const max = el.scrollWidth - el.clientWidth;
//     setCanPrev(el.scrollLeft > 8);
//     setCanNext(el.scrollLeft < max - 8);
//     const cardWidth = el.firstChild?.offsetWidth || 1;
//     const gap = 24;
//     const idx = Math.round(el.scrollLeft / (cardWidth + gap));
//     setActive(Math.min(idx, categories.length - 1));
//   }, []);

//   useEffect(() => {
//     const el = trackRef.current;
//     if (!el) return;
//     updateEdges();
//     el.addEventListener("scroll", updateEdges, { passive: true });
//     window.addEventListener("resize", updateEdges);
//     return () => {
//       el.removeEventListener("scroll", updateEdges);
//       window.removeEventListener("resize", updateEdges);
//     };
//   }, [updateEdges]);

//   const scrollByCard = (dir) => {
//     const el = trackRef.current;
//     if (!el) return;
//     const cardWidth = el.firstChild?.offsetWidth || 320;
//     el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
//   };

//   const onPointerDown = (e) => {
//     const el = trackRef.current;
//     drag.current = {
//       down: true,
//       startX: e.pageX,
//       startScroll: el.scrollLeft,
//       moved: false,
//     };
//   };
//   const onPointerMove = (e) => {
//     if (!drag.current.down) return;
//     const dx = e.pageX - drag.current.startX;
//     if (Math.abs(dx) > 4) drag.current.moved = true;
//     trackRef.current.scrollLeft = drag.current.startScroll - dx;
//   };
//   const endDrag = () => {
//     drag.current.down = false;
//   };
//   const onCardClick = (e) => {
//     if (drag.current.moved) e.preventDefault();
//   };

//   return (
//     <section
//       style={{
//         background: "#FBF7F2",
//         padding: "5rem 0",
//         fontFamily: "'Inter', system-ui, sans-serif",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500&display=swap');
//         .cc-track::-webkit-scrollbar { display: none; }
//         .cc-track { scrollbar-width: none; }
//         .cc-card { scroll-snap-align: start; }
//         .cc-label::after {
//           content: "";
//           position: absolute;
//           left: 0; bottom: -6px;
//           width: 22px; height: 1px;
//           background: #E9E1D6;
//           transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), background 0.45s;
//         }
//         .cc-card:hover .cc-label::after { width: 100%; background: #C8785A; }
//         .cc-card:hover img { transform: scale(1.04); }
//         .cc-nav-btn:hover { border-color: #241C16; color: #241C16; }
//         .cc-nav-btn:disabled { opacity: 0.25; cursor: default; }
//       `}</style>

//       <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "baseline",
//             justifyContent: "space-between",
//             marginBottom: "2.75rem",
//           }}
//         >
//           <h2
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontWeight: 600,
//               fontSize: "1.9rem",
//               letterSpacing: "0.02em",
//               color: "#241C16",
//               margin: 0,
//             }}
//           >
//             Shop by category
//           </h2>

//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <span
//               style={{
//                 fontSize: 12,
//                 letterSpacing: "0.08em",
//                 color: "#8A7A6D",
//                 marginRight: 6,
//                 fontVariantNumeric: "tabular-nums",
//               }}
//             >
//               {String(active + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
//             </span>
//             <button
//               aria-label="Previous category"
//               disabled={!canPrev}
//               onClick={() => scrollByCard(-1)}
//               className="cc-nav-btn"
//               style={navBtnStyle}
//             >
//               <ArrowLeft size={15} strokeWidth={1.5} />
//             </button>
//             <button
//               aria-label="Next category"
//               disabled={!canNext}
//               onClick={() => scrollByCard(1)}
//               className="cc-nav-btn"
//               style={navBtnStyle}
//             >
//               <ArrowRight size={15} strokeWidth={1.5} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         ref={trackRef}
//         className="cc-track"
//         onPointerDown={onPointerDown}
//         onPointerMove={onPointerMove}
//         onPointerUp={endDrag}
//         onPointerLeave={endDrag}
//         style={{
//           display: "flex",
//           gap: 24,
//           overflowX: "auto",
//           scrollSnapType: "x mandatory",
//           padding: "0 24px",
//           maxWidth: 1120,
//           margin: "0 auto",
//           cursor: drag.current.down ? "grabbing" : "grab",
//           userSelect: "none",
//         }}
//       >
//         {categories.map((cat) => (
//           <a
//             key={cat.name}
//             href={cat.href}
//             onClick={onCardClick}
//             className="cc-card"
//             style={{
//               flex: "0 0 auto",
//               width: "min(320px, 78vw)",
//               textDecoration: "none",
//               display: "block",
//             }}
//           >
//             <div
//               style={{
//                 position: "relative",
//                 width: "100%",
//                 aspectRatio: "3 / 4",
//                 borderRadius: 4,
//                 overflow: "hidden",
//                 background: "#EDE6DB",
//               }}
//             >
//               <img
//                 src={cat.img}
//                 alt={cat.name}
//                 draggable={false}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
//                   display: "block",
//                 }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background:
//                     "linear-gradient(to top, rgba(20,14,10,0.55) 0%, rgba(20,14,10,0) 45%)",
//                 }}
//               />
//               <span
//                 className="cc-label"
//                 style={{
//                   position: "absolute",
//                   left: 20,
//                   bottom: 22,
//                   color: "#FBF7F2",
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontWeight: 600,
//                   fontSize: "1.05rem",
//                   letterSpacing: "0.12em",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {cat.name}
//               </span>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

// const navBtnStyle = {
//   width: 32,
//   height: 32,
//   borderRadius: "50%",
//   border: "1px solid #D8CDBE",
//   background: "transparent",
//   color: "#8A7A6D",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   transition: "border-color 0.2s, color 0.2s",
// };



// // const categories = [
// //   { name: "Kerala Sarees", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500" },
// //   { name: "Organza", img: "https://images.unsplash.com/photo-1610189844303-c5e2f7eb5c5d?w=500" },
// //   { name: "Premium Ethnic Wear", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500" },
// // ];

// // export default function Categories() {
// //   return (
// //     <section className="bg-brand-secondary py-16">
// //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// //         <h2 className="text-2xl md:text-3xl text-center mb-10 text-brand-primary">
// //           Shop by Category
// //         </h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
// //           {categories.map((cat) => (
// //             <div key={cat.name} className="group cursor-pointer">
// //               <div className="overflow-hidden rounded-xl aspect-[3/4] mb-3">
// //                 <img
// //                   src={cat.img}
// //                   alt={cat.name}
// //                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //               </div>
// //               <p className="text-center font-medium text-brand-text">{cat.name}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }