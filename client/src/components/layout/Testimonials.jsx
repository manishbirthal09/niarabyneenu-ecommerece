import { useState } from "react";

const REVIEWS = [
  {
    name: "Ananya Menon",
    city: "Kochi",
    text: "Ordered a Kerala settu saree for Onam and the fabric quality blew me away. Drapes so beautifully and the finishing on the border is flawless. Niara by Neenu has become my go-to now.",
  },
  {
    name: "Priya Nair",
    city: "Bangalore",
    text: "First time buying a saree online and I was nervous, but the mul cotton saree I got was exactly as shown, maybe even better in person. Packaging was so thoughtful too.",
  },
  {
    name: "Ritika Sharma",
    city: "Delhi",
    text: "Bought a semi silk saree for my sister's engagement and got so many compliments. The colour and texture felt premium, not like typical online saree stores. Highly recommend.",
  },
  {
    name: "Meera Krishnan",
    city: "Chennai",
    text: "The tissue saree I ordered is stunning, lightweight and easy to drape even for a beginner like me. Customer support on WhatsApp was quick and genuinely helpful throughout.",
  },
  {
    name: "Anjali Varma",
    city: "Hyderabad",
    text: "Was looking for something traditional yet not too heavy for a day function. The Niara team helped me pick the right saree over chat and it turned out perfect.",
  },
  {
    name: "Divya Pillai",
    city: "Dubai",
    text: "Ordered internationally and shipping was smooth, saree reached in great condition with no wrinkles. The craftsmanship really shows the attention to detail in every drape.",
  },
  {
    name: "Kavya Reddy",
    city: "Pune",
    text: "This is my third saree from Niara by Neenu. Every single piece has been worth it, from the quality of the fabric to how well it photographs. Never disappointed.",
  },
  {
    name: "Sneha Iyer",
    city: "Mumbai",
    text: "Loved how the team helped me match a saree to my blouse for a festive look. It felt personal, not like a regular online order. The saree itself is gorgeous.",
  },
  {
    name: "Lakshmi Menon",
    city: "Thrissur",
    text: "Gifted a Kerala saree to my mother and she absolutely loved the weave and the zari work. Authentic quality that's genuinely hard to find outside Kerala these days.",
  },
  {
    name: "Ishita Kapoor",
    city: "London",
    text: "Found Niara by Neenu through Instagram and ordered a festive saree for Diwali. It arrived beautifully packed and looked even better than the photos. Will order again.",
  },
];

const ROW_1 = REVIEWS.slice(0, 5);
const ROW_2 = REVIEWS.slice(5, 10);

function Card({ r }) {
  const initial = r.name.charAt(0).toUpperCase();
  const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];
  const bg = colors[r.name.length % colors.length];

  return (
    <article
      className="shrink-0 w-[320px] mx-4 hover:-translate-y-1 transition-all duration-300 opacity-85"
      style={{
        background: "#e8e8e8",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        position: "relative",
      }}
    >
      {/* Google logo */}
      {/* <div style={{ position: "absolute", top: "16px", right: "16px" }}>
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div> */}

      {/* Avatar + Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <div style={{
          width: "40px", height: "40px", borderRadius: "50%",
          background: bg, display: "flex", alignItems: "center",
          justifyContent: "center", color: "#fff",
          fontWeight: 700, fontSize: "16px", flexShrink: 0,
        }}>
          {initial}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: "14px", color: "#202124" }}>{r.name}</div>
          <div style={{ fontSize: "12px", color: "#555759" }}>{r.city}</div>
        </div>
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
            <path d="M12 2l2.9 7.1L22 10l-5.5 4.8L18.2 22 12 18l-6.2 4 1.7-7.2L2 10l7.1-.9L12 2z"/>
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p style={{
        fontSize: "13px", color: "#3c4043", lineHeight: 1.7,
        display: "-webkit-box", WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical", overflow: "hidden",
      }}>
        {r.text}
      </p>
    </article>
  );
}

function Row({ items, reverse }) {
    const [paused, setPaused] = useState(false);
  const loop = [...items, ...items];
   const togglePause = () => setPaused((p) => !p);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePause();
    }
  };
  return (
    <div className="testimonial-row group relative overflow-hidden"
     onClick={togglePause}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={paused}
      aria-label={paused ? "Resume testimonials scroll" : "Pause testimonials scroll"}
    >
      <div
        className={`flex w-max ${
          reverse ? "testimonial-track-rev" : "testimonial-track"
        } group-hover:[animation-play-state:paused]`}
        style={paused ? { animationPlayState: "paused" } : undefined}
      >
        {loop.map((r, i) => (
          <Card key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

// Marquee keyframes. `loop` renders each row's items twice back to back,
// so animating exactly -50% (half the track's total width) creates a
// seamless infinite scroll with no visible jump/reset.
function MarqueeStyles() {
  return (
    <style>{`
      @keyframes testimonial-scroll-left {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes testimonial-scroll-right {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
      }
      .testimonial-track {
        animation: testimonial-scroll-left 45s linear infinite;
      }
      .testimonial-track-rev {
        animation: testimonial-scroll-right 45s linear infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .testimonial-track,
        .testimonial-track-rev {
          animation: none;
        }
      }
    `}</style>
  );
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden"
      id="testimonials"
      style={{
        background: "#16271C",
        borderTop: "1px solid #1e0e0e",
        borderBottom: "1px solid #1e0e0e",
        padding: "25px 0",
      }}
    >
      <header className="px-6 md:px-10 mb-12 max-w-7xl mx-auto reveal">
        {/* <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-12 bg-ink" />
          <div
            style={{
              color: "#c0392b",
              fontFamily: "Courier New, monospace",
              letterSpacing: "0.3em",
              fontSize: "11px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Client Stories
          </div>
        </div> */}
        <h2 className=" font-['Cormorant_Garamond',serif] text-[1.9rem]  text-white font-semibold tracking-[0.02em] ">
          What Our <span className="text-stroke">Clients Say</span>
        </h2>
        <div
          style={{
            height: "1px",
            background: "#ffffff",
            width: "120px",
            marginTop: "",
          }}
        />
      </header>

      {/* Google Rating Summary 
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "16px",
          background: "#111", border: "1px solid #2a0e0e",
          borderRadius: "12px", padding: "16px 32px",
        }}>
          {/* Google G
          <svg width="28" height="28" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>

          {/* Rating 
          <div>
            <span style={{ fontSize: "32px", fontWeight: 700, color: "#f0ebe4", lineHeight: 1 }}>4.9</span>
            <span style={{ fontSize: "13px", color: "#8b6b5b", marginLeft: "6px" }}>/ 5</span>
          </div> */}

          {/* Divider
          <div style={{ width: "1px", height: "36px", background: "#2a0e0e" }} />

          {/* Stars + count 
          <div>
            <div style={{ display: "flex", gap: "3px", marginBottom: "4px" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
                  <path d="M12 2l2.9 7.1L22 10l-5.5 4.8L18.2 22 12 18l-6.2 4 1.7-7.2L2 10l7.1-.9L12 2z"/>
                </svg>
              ))}
            </div>
            <div style={{ fontSize: "12px", color: "#8b6b5b", letterSpacing: "0.05em" }}>
              778 Google Reviews
            </div>
          </div>
        </div>
      </div>
 */}
      <MarqueeStyles />
      <div className="space-y-5">
        <Row items={ROW_1} />
        <Row items={ROW_2} reverse />
      </div>

      {/* View All Reviews Button */}
      {/* <div style={{ textAlign: "center", marginTop: "48px" }}>
        <a
          href="https://www.google.com/maps/place/Tattooinkfixers/@28.5703149,77.3245172,17z/data=!4m8!3m7!1s0x390ce44bf76b07dd:0xc46d93ccf270ec1f!8m2!3d28.5703149!4d77.3270921!9m1!1b1!16s%2Fg%2F11c0p_cyq2?authuser=0&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "#ffffff", color: "#3c4043",
            padding: "14px 28px", borderRadius: "8px",
            fontWeight: 600, fontSize: "14px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            textDecoration: "none",
            transition: "box-shadow 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)")}
          onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          View All Google Reviews
        </a>
      </div> */}
    </section>
  );
}