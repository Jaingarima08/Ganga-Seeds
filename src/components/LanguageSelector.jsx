import React, { useEffect } from "react";
import "../index.css";

const LanguageSelector = () => {
  // Wait until Google Translate loads
  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        clearInterval(interval); 
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Change handler for language selection
  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    const googleSelect = document.querySelector(".goog-te-combo");

    if (googleSelect) {
      googleSelect.value = lang;
      googleSelect.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="flex items-center ">
      {/* <label htmlFor="language" className="text-sm font-medium">
        🌐
      </label> */}
      <select
        id="language"
        onChange={handleLanguageChange}
        className="mt-1 text-sm bg-green-500 text-center"
      >
        <option value="">🌐Language</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="pa">Punjabi</option>
        <option value="mr">Marathi</option>
        <option value="gu">Gujarati</option>
        {/* <option value="ta">Tamil</option> */}
        {/* <option value="te">Telugu</option> */}
        {/* <option value="bn">Bengali</option> */}
      </select>
    </div>
  );
};

export default LanguageSelector;
