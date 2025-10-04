import { createContext, useState } from "react";

export const ImageSizeContext = createContext();

export const ImageSizeProvider = ({ children }) => {
  const [imageSize, setImageSize] = useState("medium");

  return (
    <ImageSizeContext.Provider value={{ imageSize, setImageSize }}>
      {children}
    </ImageSizeContext.Provider>
  );
};