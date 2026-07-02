import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative h-[55vh] sm:h-[70vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Niara by Neenu"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

 {/* Gradient — right side pe dark, left clear  */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#16271C]/95 via-[#16271C]/60 to-transparent" />
{/* Content — right aligned */}
<div className="relative z-10 h-full flex flex-col items-end text-right  ml-auto px-6 md:px-24 max-w-2xl pb-14 md:pb-20">
  <p className="uppercase text-xs tracking-[0.3em] text-white/60 mb-3 mt-5">
    Elevate Your Style
  </p>

  <h1 className="font-serif text-6xl sm:text-7xl md:text-9xl leading-[1.1] text-white mb-6 md:mb-8">
    Grace <br />
    <span className="italic font-light text-white/85">in every</span>
    <br />
    Drape
  </h1>

  <p className="text-white/55  font-semibold text-base tracking-wide mb-12 max-w-sm leading-relaxed">
    A saree is not just an outfit — it's a feeling,<br /> a tradition, a timeless beauty.
  </p>

  <div className="flex flex-wrap gap-4 justify-end">
    <Link to="/products">
      <button className="bg-[#16271C] text-white px-6 py-3 text-xs md:px-10 md:py-4 md:text-sm tracking-widest uppercase hover:bg-[#16271C]/90 transition rounded-md font-medium whitespace-nowrap">
        Discover the Collections
      </button>
    </Link>
    {/* <a href="https://wa.me/918593833303" target="_blank" rel="noreferrer">
      <button className="border border-white/40 text-white bg-transparent px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition rounded-md">
        
      </button>
    </a> */}
  </div>
</div>


      {/* Content — right aligned 
      {/* <div className="relative z-10 h-full flex flex-col justify-center ml-auto px-10 md:px-20 max-w-2xl">
        <p className="uppercase text-xs tracking-[0.3em] text-white/50 mb-6">
          Elevate Your Style
        </p>
<h1 className="font-serif text-6xl md:text-7xl leading-[1.15] text-white mb-6">
  Grace{" "}
  <span className="italic font-light">in every</span>{" "}
  Drape
</h1>
        {/* <h1 className="font-serif text-4xl md:text-6xl leading-[1.2] text-white mb-6">
          Grace <br />
          <span className="italic font-light text-white/90">in every</span>
          <br />
          Drape
        </h1> 

        <p className="text-white/50 text-sm tracking-wide mb-10 max-w-xs leading-relaxed">
          A saree is not just an outfit — it's a feeling, a tradition, a timeless beauty.
        </p>
       Gradient — sirf left side pe, right clear
      <div className="absolute inset-0 bg-gradient-to-r from-[#16271C]/85 via-[#16271C]/40 to-transparent" />

      {/* Content — left aligned 
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-lg">
        <p className="uppercase text-xs tracking-[0.3em] text-white/50 mb-6">
          Elevate Your Style
        </p>

        <h1 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] text-white mb-6">
          Grace <br />
          <span className="italic font-light text-white/70">in every</span>
          <br />
          Drape
        </h1>

        <p className="text-white/50 text-sm tracking-wide mb-10 max-w-xs leading-relaxed">
          A saree is not just an outfit — it's a feeling, a tradition, a timeless beauty.
        </p> 

        <div className="flex flex-wrap gap-4">
          <Link to="/products">
            <button className="bg-white text-[#16271C] px-8 py-3 text-sm tracking-wide hover:bg-white/90 transition rounded-md font-medium">
              Explore Collections
            </button>
          </Link>
          <a href="https://wa.me/918593833303" target="_blank" rel="noreferrer">
            <button className="border border-white/30 text-white bg-transparent px-8 py-3 text-sm tracking-wide hover:bg-white/10 transition rounded-md">
              DM to Order
            </button>
          </a>
        </div>
      </div> */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-white/20" />
      </div>
    </section>
  );
}
// import { Link } from "react-router-dom";
// import heroImg from "../../assets/hero.png";
// import Button from "../ui/Button";

// export default function Hero() {
//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* Background image */}
//       <img
//         src={heroImg}
//         alt="Niara by Neenu"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />

//       {/* Dark green overlay */}
//       <div className="absolute inset-0 bg-brand-primary/65" />

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-4xl md:ml-auto md:mr-16">
//         <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
//           Elevate Your Style
//         </p>
// <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-white mb-6">
//   Grace <br />
//   <span className="italic font-light text-white/80">in every</span>
//   <br />
//   Drape
// </h1>

// <p className="text-white/60 text-sm tracking-widest mb-10">
//   A saree is not just an outfit, it's a feeling, a tradition, a timeless beauty.
// </p>
//         {/* <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-[#16271C] mb-6">
//           A Legacy of <br />
//           <span className="italic font-light text-[#16271C]/80">Hand‑Picked</span>
//           <br />
//           Elegance
//         </h1>

//         <p className="text-[#16271C]/50 text-sm tracking-widest mb-10 uppercase">
//           Kerala Sarees · Organza · Premium Ethnic Wear · Worldwide Shipping
//         </p> */}

//         <div className="flex flex-wrap gap-4">
//           <Link to="/products">
//             <Button className="bg-white text-brand-primary hover:bg-white/90 px-8 py-3 text-sm tracking-wide">
//               Explore Collections
//             </Button>
//           </Link>
//           <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
//             <Button className="border border-white/30 text-white bg-transparent hover:bg-white/10 px-8 py-3 text-sm tracking-wide">
//               DM to Order
//             </Button>
//           </a>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
//         <span className="text-[10px] uppercase tracking-widest">Scroll</span>
//         <div className="w-px h-10 bg-white/20" />
//       </div>
//     </section>
//   );
// }

// // import Button from "../ui/Button";

// // export default function Hero() {
// //   return (
// //     <section className="bg-brand-primary text-brand-text-light">
// //       <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
// //         {/* Left - text */}
// //         <div>
// //           <p className="uppercase text-xs tracking-[0.2em] text-white/60 mb-4">
// //             Elevate Your Style
// //           </p>
// //           <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4">
// //             A Legacy of <br />
// //             <span className="italic font-light">Hand-Picked</span> <br />
// //             Elegance
// //           </h1>
// //           <p className="text-white/70 text-sm md:text-base mb-8 tracking-wide">
// //             Kerala Sarees · Organza · Premium Ethnic Wear · Worldwide Shipping
// //           </p>
// //           <div className="flex flex-wrap gap-4">
// //             <Button variant="primary" className="bg-white text-brand-primary hover:bg-white/90">
// //               Explore Collections
// //             </Button>
// //             <Button variant="outline" className="border-white/40 text-white hover:bg-white/10">
// //               DM to Order
// //             </Button>
// //           </div>
// //         </div>

// //         {/* Right - image placeholder */}
// //         <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-white/5">
// //           <img
// //             src="https://images.unsplash.com/photo-1610189844303-c5e2f7eb5c5d?w=800"
// //             alt="Saree model"
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }