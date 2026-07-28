export default function PolicyLayout({ title, children }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl md:text-3xl font-serif text-[#16271C] mb-8">{title}</h1>
      <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}