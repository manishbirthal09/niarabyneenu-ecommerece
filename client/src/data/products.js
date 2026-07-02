// export const featuredProducts = [
//   { id: 1, name: "Kerala Kasavu Saree", price: 2499, img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500" },
//   { id: 2, name: "Red Organza Saree", price: 3299, img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500" },
//   { id: 3, name: "Banarasi Silk Saree", price: 4999, img: "https://images.unsplash.com/photo-1610189844303-c5e2f7eb5c5d?w=500" },
//   { id: 4, name: "Cotton Handloom Saree", price: 1899, img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500" },
// ];
import suitsSetsImg from "./../assets/PremiumSettumundu.png";
import shirtsImg from "./../assets/PremiumtissueSettumundu .png";
import coOrdSetsImg from "./../assets/Tissuesettumundu.png";
import sareesImg from "./../assets/Settumundu.png";
import dressesImg from "./../assets/Settusaree.png";
import sareesImg2 from "./../assets/Settumundu (1).png";
import sareesImg3 from "./../assets/Settusaree (1).png";
import sareesImg4 from "./../assets/Tissuesettusaree.png";



export const featuredProducts = [
  {
    id: 1,
    name: "Kerala Kasavu Saree",
    price: 3499,
    originalPrice: 4374,
    category: "Kerala Saree",
    fabric: "Cotton",
    color: "Gold",
    image: suitsSetsImg ,
  },
  {
    id: 2,
    name: "Organza Floral Saree",
    price: 5299,
    originalPrice: 4374,
    category: "Organza",
    fabric: "Organza",
    color: "Red",
    image: shirtsImg,
  },
  {
    id: 3,
    name: "Banarasi Silk Saree",
    price: 7999,
    originalPrice: 4374,
    category: "Silk",
    fabric: "Silk",
    color: "Maroon",
    image: coOrdSetsImg,
  },
  {
    id: 4,
    name: "Chiffon Printed Saree",
    price: 2799,
    originalPrice: 4374,
    category: "Chiffon",
    fabric: "Chiffon",
    color: "Blue",
    image: sareesImg4,
  },
  {
    id: 5,
    name: "Pure Cotton Handloom Saree",
    price: 1999,
    originalPrice: 4374,
    category: "Handloom",
    fabric: "Cotton",
    color: "Green",
    image: sareesImg2,
  },
  {
    id: 6,
    name: "Designer Georgette Saree",
    price: 4599,
    originalPrice: 4374,
    category: "Georgette",
    fabric: "Georgette",
    color: "Pink",
    image: sareesImg3,
  },
   {
    id: 7,
    name: "Designer Georgette Saree",
    price: 4599,
    originalPrice: 4374,
    category: "Georgette",
    fabric: "Georgette",
    color: "Pink",
    image: sareesImg,
  },
   {
    id: 8,
    name: "Designer Georgette Saree",
    price: 4599,
    originalPrice: 4374,
    category: "Georgette",
    fabric: "Georgette",
    color: "Pink",
    image: dressesImg,
  },
];

export const filterOptions = {
  categories: ["Kerala Saree", "Organza", "Silk", "Chiffon", "Handloom", "Georgette"],
  fabrics: ["Cotton", "Silk", "Organza", "Chiffon", "Georgette"],
  colors: ["Gold", "Red", "Maroon", "Blue", "Green", "Pink"],
};