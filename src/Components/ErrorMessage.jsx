import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div className="w-full font-bold bg-red-600 text-white py-2 px-3 mb-5">
      <p className="text-lg">{children}</p>
    </div>
  );
};

export default ErrorMessage;
