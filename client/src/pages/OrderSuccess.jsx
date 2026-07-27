import { useParams, Link } from "react-router-dom";

export default function OrderSuccess() {
  const { orderId } = useParams();

  return (
    <div className="max-w-lg mx-auto px-6 py-24 text-center">
      <h1 className="text-2xl font-serif mb-4 text-[#16271C]">Order Placed!</h1>
      <p className="text-gray-500 mb-2">Thank you for shopping with us.</p>
      <p className="text-xs text-gray-400 mb-8">Order ID: {orderId}</p>
      <Link to="/products" className="inline-block px-6 py-3 bg-[#16271C] text-white text-sm rounded">
        Continue Shopping
      </Link>
    </div>
  );
}