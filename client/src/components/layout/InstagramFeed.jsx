import React from "react";
import image1 from "../../assets/Instagram1.png";
import image2 from "../../assets/Instagram2.png";
import image3 from "../../assets/Instagram3.jpg";
import image4 from "../../assets/Instagram4.png";
import image5 from "../../assets/Instagram5.png";
import image6 from "../../assets/Instagram6.jpg";
// import { Instagram } from "lucide-react";

// Swap these src values with your actual Instagram photo URLs when ready.
// Keep 5–6 items — grid adapts automatically.
const posts = [
  { src: image1, alt: "Niara by Neenu Instagram post" },
  { src: image2, alt: "Niara by Neenu Instagram post" },
  { src: image3, alt: "Niara by Neenu Instagram post" },
  { src: image4, alt: "Niara by Neenu Instagram post" },
  { src: image5, alt: "Niara by Neenu Instagram post" },
  { src: image6, alt: "Niara by Neenu Instagram post" },
];

const INSTAGRAM_URL = "https://www.instagram.com/niara_by_neenu/?hl=en";

export default function InstagramFeed() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block font-['Plus_Jakarta_Sans'] text-xs tracking-[0.25em] uppercase text-[#16271C] font-semibold mb-4">
          @niarabyneenu
        </span>

        <h2 className="font-['Fraunces'] text-3xl md:text-4xl text-[#16271C] mb-3">
          Follow Us on Instagram
        </h2>

        <p className="font-['Plus_Jakarta_Sans'] text-[#16271C] text-sm md:text-base mb-12 max-w-md mx-auto">
          Daily drapes, new arrivals, and a closer look at every saree we curate
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {posts.map((post, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-[#3A1418]/0 group-hover:bg-[#3A1418]/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  size={26}
                  strokeWidth={1.75}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div> */}
            </a>
          ))}
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-12 px-8 py-3.5 rounded-full bg-[#16271C] hover:bg-[#16271C] text-white font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide transition-colors duration-300"
        >
          {/* <Instagram size={16} strokeWidth={2} /> */}
          Visit Instagram
        </a>
      </div>
    </section>
  );
}