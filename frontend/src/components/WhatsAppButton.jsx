import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    const tooltipTimer = setTimeout(() => setShowTooltip(false), 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    const message =
      "Hi, I am interested in your tuition classes. Please share details.";

    window.location.href = `https://wa.me/918778690834?text=${encodeURIComponent(
      message
    )}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-5 bg-white shadow-2xl rounded-2xl p-5 w-72 border-2 border-gray-200 animate-bounce">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            aria-label="Close tooltip"
          >
            <X className="w-4 h-4" />
          </button>

          <p className="text-sm font-bold text-[#0f172a] mb-1">
            👋 Need Help?
          </p>
          <p className="text-xs text-gray-600">
            Chat with us on WhatsApp for instant support!
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        className="
          relative z-10
          bg-gradient-to-br from-green-400 via-green-600 to-green-800
          text-white w-20 h-20 rounded-full
          shadow-[0_12px_0_#14532d,0_20px_35px_rgba(0,0,0,0.35)]
          flex items-center justify-center
          transition-all duration-300 ease-out
          hover:translate-y-1 hover:scale-110
          hover:shadow-[0_8px_0_#14532d,0_16px_30px_rgba(0,0,0,0.35)]
          active:translate-y-3 active:shadow-[0_3px_0_#14532d,0_8px_15px_rgba(0,0,0,0.25)]
        "
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-white/20 blur-sm"></span>
        <MessageCircle className="relative z-10 w-10 h-10 drop-shadow-lg" />
      </button>

      <div className="pointer-events-none absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></div>
    </div>
  );
};

export default WhatsAppButton;