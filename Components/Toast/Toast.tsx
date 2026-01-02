import { ToastProps } from "@/Types/Merchbay";
import { useEffect } from "react";



export default function Toast({ message, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  return (
    <div className={`toast ${visible ? "show" : ""}`}>
      {message}
    </div>
  );
}
