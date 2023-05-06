import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col container w-5/6 mt-4 justify-start">
        {title && (
          <>
            <p className="text-4xl md:text-6xl mb-2 text-center md:text-start">
              {title}
            </p>
            <hr />
          </>
        )}
        {children && (
          <div className="mt-10">
            <p>{children}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
