import React from "react";
import { Gem, Heart, Sparkles, Users } from "lucide-react";
import aboutImage from "../../assets/About.png";

const points = [
  {
    icon: Gem,
    title: "Handpicked Sarees",
    subtitle: "Settu, Mul Cotton & Semi Silk",
  },
  {
    icon: Heart,
    title: "Made With Passion",
    subtitle: "Founded By Two Friends",
  },
  {
    icon: Sparkles,
    title: "Timeless Elegance",
    subtitle: "Tradition Meets Modern Style",
  },
  {
    icon: Users,
    title: "Comfort & Confidence",
    subtitle: "For Every Occasion",
  },
];

export default function AboutNiara() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left column — image */}
        <div className="relative">
          {/* <div className="absolute -inset-3 border border-[#16271C] rounded-[2rem] pointer-events-none" />*/}
          <div className="overflow-hidden rounded-[1.75rem] shadow-[0_20px_60px_-15px_rgba(122,31,43,0.25)]"> 
            <img
              src={aboutImage}
              alt="Niara by Neenu saree draped on a model, showcasing traditional craftsmanship"
              className="w-full h-full object-top aspect-[4/5]"
            />
          </div>
        </div>

        {/* Right column — text + points */}
        <div>
          <span className="inline-block font-['Plus_Jakarta_Sans'] text-xs tracking-[0.25em] uppercase text-[#16271C] font-semibold mb-4">
            Our Story
          </span>

          <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-[#16271C] mb-6">
            About Niara by Neenu
          </h2>

          <div className="font-['Plus_Jakarta_Sans'] text-[#16271C] text-[15px] md:text-base leading-relaxed space-y-4">
            <p>
              Niara by Neenu is a curated saree brand born from a passion for
              timeless elegance, traditional craftsmanship, and the beauty of
              Indian textiles. Founded with the vision of bringing carefully
              selected saree collections to women who appreciate quality,
              grace, and authenticity, the brand celebrates tradition while
              embracing modern style.
            </p>
            <p>
              Every saree at Niara by Neenu is thoughtfully handpicked, with
              attention to fabric, design, comfort, and detail. From classic
              Kerala settu sarees and breathable mul cottons to elegant semi
              silks, tissue sarees, and festive collections, each piece is
              chosen to make every occasion feel special.
            </p>
            <p>
              Founded by two friends who shared a love for passion and a
              dream of creating something meaningful, Niara by Neenu has
              grown through dedication, creativity, and the support of
              family and friends who have been part of the journey from the
              very beginning.
            </p>
            <p>
              At Niara by Neenu, we believe a saree is more than just an
              outfit—it is a reflection of confidence, tradition, and
              individuality. More than a saree brand, Niara by Neenu is a
              journey of friendship, passion, tradition, and a shared dream
              brought to life. ✨🤍
            </p>
          </div>

          {/* Highlight points */}
          <div className="mt-10 pt-8 border-t border-[#16271C]/25 grid grid-cols-2 gap-x-6 gap-y-8">
            {points.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#16271C] border border-[#16271C]/30 flex items-center justify-center">
                  <Icon size={18} strokeWidth={1.75} className="text-white" />
                </div>
                <div>
                  <p className="font-['Fraunces'] text-[15px] text-[#16271C] leading-tight mb-1">
                    {title}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wide text-[#16271C]">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}