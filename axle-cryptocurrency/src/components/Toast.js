import React, { useState, useEffect } from "react";

/**
 * Toast Notification Component
 * Used for success, error, warning, and info messages
 */
const Toast = ({ message, type = "success", duration = 4000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-darkblue",
    info: "bg-blue text-white",
  };

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed bottom-4 right-4 px-6 py-4 rounded-lg shadow-lg
        flex items-center gap-3 max-w-md w-full
        animate-slide-in-right ${typeStyles[type]}
        transition-all duration-300 ease-in-out
      `}
      role='alert'
      aria-live='polite'
    >
      <span className='text-xl font-bold'>{icons[type]}</span>
      <span className='font-medium'>{message}</span>
      <button
        onClick={() => setIsVisible(false)}
        className='ml-auto text-lg hover:opacity-75 transition'
        aria-label='Close notification'
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
