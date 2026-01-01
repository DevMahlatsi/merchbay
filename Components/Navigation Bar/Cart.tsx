'use client';
import { useState } from "react";
import Toast from "../Toast/Toast";

export default function cart() {

const [showToast, setShowToast] = useState(false);

const handleComingSoon = () => {
    setShowToast(true);
  };
  return(
    <>
      <div className="cart">
        <img  onClick={handleComingSoon}
        src="/cart-shopping-svgrepo-com.svg" alt="cart-icon" 
        className="nav-icon nav-icon-lg"
        />
      </div>
      <Toast
      message="Cart feature is not available yet!"
      visible={showToast}
      onClose={() => setShowToast(false)}
      />
    </>
  )
};
