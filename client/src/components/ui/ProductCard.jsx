import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const imageUrl = product.images?.[0]?.url || product.images?.[0] || "/placeholder.jpg";

  const handleAddToCart = async (e) => {
    e.preventDefault();
    await addToCart(product._id, 1);
  };

  const handleBuyNow = async (e) => {
    e.preventDefault();
    await addToCart(product._id, 1);
    navigate("/checkout");
  };

  return (
    <div className="group">
      <Link to={`/products/${product._id}`}>
        <div className="aspect-4/5.5 overflow-hidden rounded-lg bg-brand-border">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="pt-3">
        <h3 className="font-serif text-base text-brand-text">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">₹{product.price.toLocaleString("en-IN")}</p>
        <div className="flex gap-2 mt-3">
          <Button variant="outline" className="flex-1 text-xs" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button className="flex-1 text-xs" onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

// // import { Link } from "react-router-dom";
// // import Button from "./Button";

// // export default function ProductCard({ product }) {
// //   return (
// //     <div className="group">
// //       <Link to={`/products/${product.id}`}>
// //         <div className="aspect-[4/5.5] overflow-hidden rounded-lg bg-brand-border">
// //           <img
// //             src={product.image}
// //             alt={product.name}
// //             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// //           />
// //         </div>
// //       </Link>
// //       <div className="pt-3">
// //         <h3 className="font-serif text-base text-brand-text">{product.name}</h3>
// //         <p className="text-sm text-gray-500 mt-1">₹{product.price.toLocaleString("en-IN")}</p>
// //         <Button variant="outline" className="mt-3 w-full text-xs">
// //           Add to Cart
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }

// import { Link } from "react-router-dom";
// import Button from "./Button";

// export default function ProductCard({ product }) {
//   const imageUrl = product.images?.[0]?.url || product.images?.[0] || "/placeholder.jpg";

//   return (
//     <div className="group">
//       <Link to={`/products/${product._id}`}>
//         <div className="aspect-[4/5.5] overflow-hidden rounded-lg bg-brand-border">
//           <img
//             src={imageUrl}
//             alt={product.name}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       </Link>
//       <div className="pt-3">
//         <h3 className="font-serif text-base text-brand-text">{product.name}</h3>
//         <p className="text-sm text-gray-500 mt-1">₹{product.price.toLocaleString("en-IN")}</p>
//         <Button variant="outline" className="mt-3 w-full text-xs">
//           Add to Cart
//         </Button>
//       </div>
//     </div>
//   );
// }