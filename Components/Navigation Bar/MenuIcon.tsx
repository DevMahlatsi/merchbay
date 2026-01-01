'use client';
import {useState} from "react";
import Toast from "../Toast/Toast";

export default function MenuIcon() {
  
const [showToast, setShowToast] = useState(false);
  
const handleComingSoon = () => {
    setShowToast(true);
  };
  return(
    <>
      <div className="menu-icon" onClick={handleComingSoon}>
        <img
          src="/menu-svgrepo.svg"
          
          alt="It's supposed to be the Menu Icon here"
          className="nav-icon nav-icon-lg"
          />
          
      </div>
      <Toast
        message="Menu feature not available yet!"
        visible={showToast}
        onClose={() => setShowToast(false)}
        />
    </>
  )
};
