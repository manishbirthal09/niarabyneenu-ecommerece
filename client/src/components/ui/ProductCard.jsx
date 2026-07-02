import { Link } from "react-router-dom";
import Button from "./Button";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-[4/5.5] overflow-hidden rounded-lg bg-brand-border">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="pt-3">
        <h3 className="font-serif text-base text-brand-text">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">₹{product.price.toLocaleString("en-IN")}</p>
        <Button variant="outline" className="mt-3 w-full text-xs">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}