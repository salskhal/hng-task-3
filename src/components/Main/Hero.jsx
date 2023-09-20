import {useRef} from "react";

export default function Hero() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#F7F8F9] text-center py-10">
      <div className="text-[#22C55E] bg-[#DCFCE7] p-2 rounded-full ">
        <p className="font-semibold">GALLERY</p>
      </div>
      <h1 className="text-5xl font-bold w-3/4 mx-auto my-5 text-gray-900">
        Our mission is to allow you drag and drop your images
      </h1>
      <p
        className="
        text-gray-500 text-lg font-medium w-3/4 mx-auto mt-4
      "
      >
        Would it not be nice if you could arrange your gallery however you like
        without the constraint of when it was created. We have you covered. Try
        it out below.
      </p>
      <button className="mt-10">
        <a
          href="#gallery"
          className="text-white bg-[#22C55E] px-10 py-3 rounded-full mt-10"
        
        >
          Try it out below
        </a>
      </button>
    </div>
  );
}
