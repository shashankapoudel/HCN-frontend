const UnderConstruction = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      {/* Logo (optional) */}
      <img src="/Images/Logo.png" alt="Logo" className="w-28 mb-6" />

      <h1 className="text-3xl md:text-5xl font-bold text-[#bb2821]">
        🚧 Under Construction 🚧
      </h1>

      <p className="mt-4 text-gray-600 text-lg max-w-md">
        Our website is currently being built. We’ll be live soon. Stay tuned!
      </p>

      <p className="mt-6 text-sm text-gray-500">
        For inquiries: himalayascraft@gmail.com
      </p>
    </div>
  );
};

export default UnderConstruction;
