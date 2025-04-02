import React from "react";
import "../App.css";
import ModalImage from "react-modal-image";

import sign1 from "../assets/Bathroom.png";
import sign2 from "../assets/Friend.png";
import sign3 from "../assets/Hello.png";
import sign4 from "../assets/No.png";
import sign5 from "../assets/Ok.png";
import sign6 from "../assets/Please.png";
import sign7 from "../assets/Thank You.png";
import sign8 from "../assets/Yes.png";
import sign9 from "../assets/Taijutsu.png";

const Images = () => {
  const images = [
    { src: sign1, alt: "Bathroom" },
    { src: sign2, alt: "Friend" },
    { src: sign3, alt: "Hello" },
    { src: sign4, alt: "No" },
    { src: sign5, alt: "Ok" },
    { src: sign6, alt: "Please" },
    { src: sign7, alt: "Thank You" },
    { src: sign8, alt: "Yes" },
    { src: sign9, alt: "Taijutsu" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Grid-based horizontal slider */}
      <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto scrollbar-hide p-4">
        {images.map((image, index) => (
          <div key={index} className="w-40 h-32 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <ModalImage
              small={image.src}
              large={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
