import React from "react";

const WhatsappFloatingButton = () => {
  return (
    <a
      href="https://wa.me/917030173156?text=Hi%20I%20want%20to%20inquire%20about%20cakes"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded-full shadow-lg z-50 flex items-center gap-2 transition duration-300"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.6 5.86L0 24l6.31-1.64A11.97 11.97 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.18-3.48-8.52zM12 22a9.97 9.97 0 01-5.3-1.53l-.38-.24-3.75.97.99-3.65-.25-.38A10 10 0 1122 12c0 5.52-4.48 10-10 10zm5.1-7.54c-.27-.13-1.63-.8-1.88-.89-.25-.09-.43-.13-.62.13-.19.25-.71.88-.87 1.06-.16.19-.32.21-.6.07a8.02 8.02 0 01-2.35-1.45 8.4 8.4 0 01-1.56-1.94c-.16-.27 0-.42.12-.56.12-.13.27-.32.4-.48.13-.16.18-.28.27-.47.09-.19.04-.35-.02-.48-.06-.13-.62-1.5-.85-2.06-.22-.53-.44-.45-.62-.46-.16 0-.35-.01-.54-.01s-.5.07-.76.35c-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.02c.13.19 2 3.05 4.84 4.28.68.29 1.22.46 1.64.59.69.22 1.31.19 1.8.12.55-.08 1.63-.67 1.86-1.31.23-.65.23-1.21.16-1.31-.07-.1-.24-.16-.51-.29z" />
      </svg>

      {/* Button Text */}
      <span className="font-medium text-sm">Inquire on WhatsApp</span>
    </a>
  );
};

export default WhatsappFloatingButton;
