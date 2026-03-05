"use client";
import { useState, ChangeEvent, FormEvent } from "react";

import { FiSearch } from "react-icons/fi";
import Toast from "../Toast/Toast";

type SearchSectionProps = {
  onSearch: (value: string) => void;
};

export default function SearchSection({ onSearch }: SearchSectionProps) {
  // const [showToast, setShowToast] = useState(false);

  // const handleComingSoon = () => {
  //   setShowToast(true);
  // };
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
    
    console.log("Search submitted:", searchTerm);
  };

  return (
    <>
      <div className="w-full bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button
              // onClick={}
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <FiSearch className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      {/* <Toast
        message="Search feature is not available yet!"
        visible={showToast}
        onClose={() => setShowToast(false)}
      /> */}
    </>
    
  );
}