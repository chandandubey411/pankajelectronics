import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingCTA = () => {
  const phoneNumber = "919821900257"; // +91 98219 00257
  const whatsappMessage = "Hello, I want to know more about your products.";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Call */}
      <a
        href={`tel:+${phoneNumber}`}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#12DAAA] text-white shadow-lg hover:scale-110 transition"
      >
        <FaPhoneAlt className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingCTA;
