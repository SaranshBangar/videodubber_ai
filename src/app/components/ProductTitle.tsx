// "use client"

// import { useState } from "react"
// import { IoTriangleSharp } from "react-icons/io5"

// const ProductTitle = () => {

//   const [upvote, setUpvote] = useState<number>(70);

//   const handleUpvote = () => {
//     setUpvote((prevUpvote) => prevUpvote + 1);
//   };

//   const handleDownvote = () => {
//     setUpvote((prevUpvote) => prevUpvote - 1);
//   };

//   const handleToggleUpvote = () => {
//     if (upvote % 2 === 0) {
//       handleUpvote();
//     } else {
//       handleDownvote();
//     }
//   };

//   return (
//     <section>
//       <div>
//         <img src="./Logo.svg" alt="Logo" className="size-[72px]" />
//       </div>
//       <div className="flex justify-between items-center">
//         <div className="flex-1 flex flex-col justify-center items-start">
//           <h1 className="text-xl font-bold">VideoDubber - Fast Video Translator</h1>
//           <p className="text-md font-normal">Translate videos in your own voice, globalize in a click!</p>
//         </div>
//         <div className="flex-1 flex flex-row justify-start gap-3">
//           <button className="h-16 text-xl text-black p-5 border-[#CCC8C7] border-[0.5px] rounded-[4px]">Visit</button>
//           <button className="h-16 text-white p-5 flex flex-row justify-center items-center gap-2 bg-[#FF6154] rounded-[4px]" onClick={() => handleToggleUpvote}><IoTriangleSharp /> Upvote {upvote}</button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ProductTitle

"use client"

import { useState } from "react"
import { IoTriangleSharp } from "react-icons/io5"
import { VscChevronDown } from "react-icons/vsc";

const ProductTitle = () => {
  const [upvote, setUpvote] = useState<number>(70);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const handleUpvote = () => {
    setUpvote((prevUpvote) => prevUpvote + 1);
  };

  const handleDownvote = () => {
    setUpvote((prevUpvote) => prevUpvote - 1);
  };

  const handleToggleUpvote = () => {
    if (upvote % 2 === 0) {
      handleUpvote();
    } else {
      handleDownvote();
    }
  };

  return (
    <section>
      <div>
        <img src="./Logo.svg" alt="Logo" className="size-[72px]" />
      </div>
      <div className="flex justify-between items-center max-md:flex-col">
        <div className="flex-[1.8] w-full flex flex-col justify-center items-start">
          <h1 className="text-[22px] font-extrabold mt-3">VideoDubber - Fast Video Translator</h1>
          <p className="text-[22px] font-extralight mt-2">Translate videos in your own voice, globalize in a click!</p>
        </div>
        <div className="flex-[1.2] max-md:w-full mt-12 flex flex-row justify-start items-end gap-3 relative">
          <button
            className="flex flex-row justify-center items-center gap-2 h-16 textmdl text-black p-5 border-[#CCC8C7] border-[0.5px] rounded-[4px] relative"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            Visit <VscChevronDown />
            {isDropdownVisible && (
              <div className="absolute top-full left-0 mt-[2px] h-fit bg-white border border-gray-300 rounded shadow-lg">
                <ul>
                  <li className="p-4 text-sm flex flex-row justify-start items-center gap-2 w-full hover:bg-gray-100"><span className="font-bold text-nowrap">Website</span>videodubber.ai</li>
                  <li className="p-4 text-sm flex flex-row justify-center items-center gap-2 w-fit hover:bg-gray-100"><span className="font-bold text-nowrap">Learn More</span>videodubber.ai</li>
                  <li className="p-4 text-sm flex flex-row justify-center items-center gap-2 w-fit hover:bg-gray-100"><span className="font-bold text-nowrap">Learn More</span>videodubber.ai</li>
                  <li className="p-4 text-sm flex flex-row justify-center items-center gap-2 w-fit hover:bg-gray-100"><span className="font-bold text-nowrap">Learn More</span>videodubber.ai</li>
                  <li className="p-4 text-sm flex flex-row justify-center items-center gap-2 w-fit hover:bg-gray-100"><span className="font-bold text-nowrap">Learn More</span>videodubber.ai</li>
                </ul>
              </div>
            )}
          </button>
          <button
            className={`w-[224px] max-md:w-full h-16 text-white p-5 flex flex-row justify-center items-center gap-2 rounded-[4px] ${upvote % 2 === 0 ? 'bg-[#FF6154]' : 'bg-white text-[#FF6154] border-[1px] border-[#FF6154]'}`}
            onClick={handleToggleUpvote}
          >
            <IoTriangleSharp className={`${upvote % 2 === 0 ? '' : 'rotate-180'} transition-transform`} />
            UPVOTE {upvote}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductTitle
