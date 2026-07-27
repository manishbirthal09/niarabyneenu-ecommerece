  import { useEffect, useState } from "react";

import api from "../../api/axios";
import { useCart } from "../../context/CartContext";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { Link, useNavigate } from "react-router-dom";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/products", { params: { limit: 100 } }).then(({ data }) => {
      const featured = data.products.filter((p) => p.isFeatured);
      setProducts(featured.length > 0 ? featured : data.products.slice(0, 4));
    });
  }, []);

  const handleAddToCart = async (e, productId) => {
    e.preventDefault();
    await addToCart(productId, 1);
  };

  const handleBuyNow = async (e, productId) => {
    e.preventDefault();
    await addToCart(productId, 1);
    navigate("/checkout");
  };

  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="font-['Cormorant_Garamond',serif] text-[1.9rem] font-semibold tracking-[0.02em]  md:text-3xl text-left mb-10 text-[#16271C]">
          Featured Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((p) => {
            const displayPrice = p.discountPrice || p.price;
            const hasDiscount = p.discountPrice && p.discountPrice < p.price;
            const discountPct = hasDiscount
              ? Math.round(((p.price - p.discountPrice) / p.price) * 100)
              : 0;
            const imageUrl = p.images?.[0]?.url || p.images?.[0];

            return (
              <Card key={p._id} className="group cursor-pointer">
                <Link to={`/products/${p._id}`}> 
                <div className="overflow-hidden aspect-3/4 relative">
                  <img
                    src={imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
</Link>
                <div className="p-3">
                  <Link to={`/products/${p._id}`}> 
                  <p className="text-sm font-medium text-[#16271C] truncate">
                    {p.name}
                  </p>
</Link>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-[#16271C] font-semibold">
                      Rs. {displayPrice.toLocaleString("en-IN")}.00
                    </span>
                    {hasDiscount && (
                      <>
                        <span className="text-sm text-[#16271C] line-through">
                          Rs. {p.price.toLocaleString("en-IN")}.00
                        </span>
                        <Badge className="bg-brand-primary! text-[10px] px-1.5 py-0.5">
                          {discountPct}% OFF
                        </Badge>
                      </>
                    )}
                  </div>

                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={(e) => handleAddToCart(e, p._id)}
                      className="flex-1 border border-[#16271C] text-[#16271C] text-xs py-2 rounded transition-colors duration-300 hover:bg-[#16271C] hover:text-white"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={(e) => handleBuyNow(e, p._id)}
                      className="flex-1 bg-[#16271C] text-white text-xs py-2 rounded transition-colors duration-300 hover:opacity-90"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
        <a
          href="/products"
          className="inline-flex items-center gap-2 mt-12 px-8 py-3.5 rounded-full bg-[#16271C] hover:bg-[#16271C] text-white font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide transition-colors duration-300"
        >
          View more products
        </a>
      </div>
    </section>
  );
}
  
  
  
  // import { useEffect, useState } from "react";
// import api from "../../api/axios";
// import Card from "../ui/Card";
// import Badge from "../ui/Badge";

// export default function FeaturedProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     api.get("/products", { params: { limit: 100 } }).then(({ data }) => {
//       const featured = data.products.filter((p) => p.isFeatured);
//       setProducts(featured.length > 0 ? featured : data.products.slice(0, 4));
//     });
//   }, []);

//   if (products.length === 0) return null;

//   return (
//     <section className="py-16 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-5 md:px-8">
//         <h2 className="font-['Cormorant_Garamond',serif] text-[1.9rem] font-semibold tracking-[0.02em]  md:text-3xl text-left mb-10 text-[#16271C]">
//           Featured Collection
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//           {products.map((p) => {
//             const displayPrice = p.discountPrice || p.price;
//             const hasDiscount = p.discountPrice && p.discountPrice < p.price;
//             const discountPct = hasDiscount
//               ? Math.round(((p.price - p.discountPrice) / p.price) * 100)
//               : 0;
//             const imageUrl = p.images?.[0]?.url || p.images?.[0];

//             return (
//               <Card key={p._id} className="group cursor-pointer">
//                 <div className="overflow-hidden aspect-3/4 relative">
//                   <img
//                     src={imageUrl}
//                     alt={p.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 <div className="p-3">
//                   <p className="text-sm font-medium text-[#16271C] truncate">
//                     {p.name}
//                   </p>

//                   <div className="flex items-center gap-2 mt-1 flex-wrap">
//                     <span className="text-[#16271C] font-semibold">
//                       Rs. {displayPrice.toLocaleString("en-IN")}.00
//                     </span>
//                     {hasDiscount && (
//                       <>
//                         <span className="text-sm text-[#16271C] line-through">
//                           Rs. {p.price.toLocaleString("en-IN")}.00
//                         </span>
//                         <Badge className="bg-brand-primary! text-[10px] px-1.5 py-0.5">
//                           {discountPct}% OFF
//                         </Badge>
//                       </>
//                     )}
//                   </div>

//                   <button className="mt-3 w-full border border-[#16271C] text-[#16271C] text-sm py-2 rounded transition-colors duration-300 hover:bg-[#16271C] hover:text-white">
//                     Add to Cart
//                   </button>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//       <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
//         <a
//           href="/products"
//           className="inline-flex items-center gap-2 mt-12 px-8 py-3.5 rounded-full bg-[#16271C] hover:bg-[#16271C] text-white font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide transition-colors duration-300"
//         >
//           View more products
//         </a>
//       </div>
//     </section>
//   );
// }


// // import { featuredProducts } from "../../data/products";
// // import Card from "../ui/Card";
// // import Badge from "../ui/Badge";

// // export default function FeaturedProducts() {
// //   return (
// //     <section className="py-16 bg-white overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// //         <h2 className="font-['Cormorant_Garamond',serif] text-[1.9rem] font-semibold tracking-[0.02em]  md:text-3xl text-left mb-10 text-[#16271C]">
// //           Featured Collection
// //         </h2>
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
// //           {featuredProducts.map((p) => {
// //             const hasDiscount = p.originalPrice && p.originalPrice > p.price;
// //             const discountPct = hasDiscount
// //               ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
// //               : 0;

// //             return (
// //               <Card key={p.id} className="group cursor-pointer">
// //                 <div className="overflow-hidden aspect-3/4 relative">
// //                   <img
// //                     src={p.image}
// //                     alt={p.name}
// //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //                   />
// //                 </div>

// //                 <div className="p-3">
// //                   <p className="text-sm font-medium text-[#16271C] truncate">
// //                     {p.name}
// //                   </p>

// //                   <div className="flex items-center gap-2 mt-1 flex-wrap">
// //                     <span className="text-[#16271C] font-semibold">
// //                       Rs. {p.price.toLocaleString("en-IN")}.00
// //                     </span>
// //                     {hasDiscount && (
// //                       <>
// //                         <span className="text-sm text-[#16271C] line-through">
// //                           Rs. {p.originalPrice.toLocaleString("en-IN")}.00
// //                         </span>
// //                         <Badge className="bg-brand-primary! text-[10px] px-1.5 py-0.5">
// //                           {discountPct}% OFF
// //                         </Badge>
// //                       </>
// //                     )}
// //                   </div>

// //                   <button
// //                     className="mt-3 w-full border border-[#16271C] text-[#16271C] text-sm py-2 rounded transition-colors duration-300 hover:bg-[#16271C] hover:text-white"
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </Card>
// //             );
// //           })}
// //         </div>
// //       </div>
// //       <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
// //         <a
// //           href="/"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="inline-flex items-center gap-2 mt-12 px-8 py-3.5 rounded-full bg-[#16271C] hover:bg-[#16271C] text-white font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide transition-colors duration-300"
// //         >
// //           {/* <Instagram size={16} strokeWidth={2} /> */}
// //           View more products
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }

// // // import { featuredProducts } from "../../data/products";
// // // import Card from "../ui/Card";
// // // import Badge from "../ui/Badge";

// // // export default function FeaturedProducts() {
// // //   return (
// // //     <section className="py-16 bg-white">
// // //       <div className="max-w-7xl mx-auto px-5 md:px-8">
// // //         <h2 className="text-2xl md:text-3xl text-center mb-10 text-brand-primary">
// // //           Featured Collection
// // //         </h2>
// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
// // //           {featuredProducts.map((p) => (
// // //             <Card key={p.id} className="group cursor-pointer">
// // //               <div className="overflow-hidden aspect-[3/4] relative">
// // //                 <img
// // //                   src={p.image}
// // //                   alt={p.name}
// // //                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // //                 />
// // //                 <Badge className="absolute top-2 left-2 !bg-brand-primary">New</Badge>
// // //               </div>
// // //               <div className="p-3">
// // //                 <p className="text-sm font-medium text-brand-text truncate">{p.name}</p>
// // //                 <p className="text-brand-primary font-semibold mt-1">₹{p.price}</p>
// // //               </div>
// // //             </Card>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }