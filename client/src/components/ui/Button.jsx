export default function Button({ children, variant = "primary", onClick, className = "" }) {
  const base = "px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-brand-primary text-white hover:opacity-90",
    outline: "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
    ghost: "text-gray-600 hover:text-brand-primary",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}