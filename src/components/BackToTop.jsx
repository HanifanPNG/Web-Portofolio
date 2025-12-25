import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        py-3 px-4 rounded-lg bg-gradient-to-r from-black via-violet-700 to-gray-400 text-white shadow-lg
        transition-all duration-300 ease-out
        
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"}
      `}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
