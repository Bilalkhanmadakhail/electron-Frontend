// // import React, { useState } from "react";
// // const SideBar = ({ isVisible ,activeItem, setActiveItem }) => {

// //   const handleItemClick = (index) => {
// //     setActiveItem(index);
// //   };

// //   const listItemStyle = (index) => {
// //     return {
// //       backgroundColor: activeItem === index ? "#303030" : "",
// //       borderRight: activeItem === index ? "4px solid white" : "",
// //     };
// //   };
// //   return (
// //     <>
// //       <div style={{ display: isVisible ? 'block' : 'none' }}  className="w-[100%] relative bg-[#020202] h-[88vh] border-b border-color rounded-br-[5px] border-r">
// //         <div className="pt-7">
// //           <div>
// //             <ul>
// //               <li className=" ">
// //                 <div  style={listItemStyle(0)}
// //                 onClick={() => handleItemClick(0)} className="group flex justify-start mb-4 cursor-pointer fill-none  hover:fill-[white] w-full hover:border-r-[4px] items-center px-8 py-2 hover:border-white hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99] hover:text-white relative" >
// //                   <svg
// //                     width="16"
// //                     height="16"
// //                     viewBox="0 0 16 16"
// //                     className="cursor-pointer"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       d="M14.2222 1.77778V3.55556H10.6667V1.77778H14.2222ZM5.33333 1.77778V7.11111H1.77778V1.77778H5.33333ZM14.2222 8.88889V14.2222H10.6667V8.88889H14.2222ZM5.33333 12.4444V14.2222H1.77778V12.4444H5.33333ZM16 0H8.88889V5.33333H16V0ZM7.11111 0H0V8.88889H7.11111V0ZM16 7.11111H8.88889V16H16V7.11111ZM7.11111 10.6667H0V16H7.11111V10.6667Z"
// //                       fill="#FFFFFF99"
// //                       fill-opacity="0.6"
// //                     />
// //                     <path
// //                       d="M14.7222 1.77778V1.27778H14.2222H10.6667H10.1667V1.77778V3.55556V4.05556H10.6667H14.2222H14.7222V3.55556V1.77778ZM5.83333 1.77778V1.27778H5.33333H1.77778H1.27778V1.77778V7.11111V7.61111H1.77778H5.33333H5.83333V7.11111V1.77778ZM14.7222 8.88889V8.38889H14.2222H10.6667H10.1667V8.88889V14.2222V14.7222H10.6667H14.2222H14.7222V14.2222V8.88889ZM5.83333 12.4444V11.9444H5.33333H1.77778H1.27778V12.4444V14.2222V14.7222H1.77778H5.33333H5.83333V14.2222V12.4444ZM9.38889 4.83333V0.5H15.5V4.83333H9.38889ZM6.61111 0.5V8.38889H0.5V0.5H6.61111ZM9.38889 15.5V7.61111H15.5V15.5H9.38889ZM0.5 15.5V11.1667H6.61111V15.5H0.5Z"
// //                       stroke="#FFFFFF99"
// //                       stroke-opacity="0.6"
// //                     />
// //                   </svg>
// //                   <p className="text-sm pl-2 font-sanssem leading-4">
// //                     Overview
// //                   </p>
// //                 </div>

// //               </li>
// //               <li>
// //                 <div className=" hover:text-white hover:border-r-[4px] hover:border-white group flex justify-start mb-4 cursor-pointer  active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-8 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99]  relative  fill-[#FFFFFF99] "   style={listItemStyle(1)}
// //                 onClick={() => handleItemClick(1)}>
// //                   <svg
// //                     width="16"
// //                     height="16"
// //                     viewBox="0 0 19 16"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path d="M11.0427 4.44444H14.5982L11.0427 0.888889V4.44444ZM4.47822 16C4.08355 16 3.74578 15.8593 3.46489 15.5778C3.18341 15.2969 3.04267 14.9591 3.04267 14.5644V12H15.4871V14.5644C15.4871 14.9591 15.3464 15.2969 15.0649 15.5778C14.784 15.8593 14.4462 16 14.0516 16H4.47822ZM0 10.2222V9.33333H18.5298V10.2222H0ZM3.04267 7.55556V1.43556C3.04267 1.04089 3.18341 0.703111 3.46489 0.422222C3.74578 0.140741 4.08355 0 4.47822 0H11.4871L15.4871 4V7.55556H3.04267Z" />
// //                   </svg>

// //                   <p className="text-sm pl-2 font-sanssem leading-4">
// //                     Scan Now
// //                   </p>
// //                 </div>

// //               </li>
// //               <li>
// //                 <div style={listItemStyle(2)}
// //                 onClick={() => handleItemClick(2)} className=" hover:text-white hover:border-r-[4px] hover:border-white group flex justify-start mb-4 cursor-pointer  active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-8 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99]  relative  fill-[#FFFFFF99] ">
// //                   <svg
// //                     width="16"
// //                     height="16"
// //                     viewBox="0 0 18 17"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path d="M0 2.8125C0 2.06658 0.296316 1.35121 0.823762 0.823762C1.35121 0.296316 2.06658 0 2.8125 0H12.9375C13.6834 0 14.3988 0.296316 14.9262 0.823762C15.4537 1.35121 15.75 2.06658 15.75 2.8125V5.886C15.3367 5.63932 14.9602 5.33558 14.6318 4.98375C14.4722 4.817 14.2778 4.68755 14.0625 4.60462V2.8125C14.0625 2.51413 13.944 2.22798 13.733 2.017C13.522 1.80603 13.2359 1.6875 12.9375 1.6875H2.8125C2.51413 1.6875 2.22798 1.80603 2.017 2.017C1.80603 2.22798 1.6875 2.51413 1.6875 2.8125V12.9375C1.6875 13.2359 1.80603 13.522 2.017 13.733C2.22798 13.944 2.51413 14.0625 2.8125 14.0625H8.51737C8.78939 14.6775 9.15483 15.2467 9.60075 15.75H2.8125C2.06658 15.75 1.35121 15.4537 0.823762 14.9262C0.296316 14.3988 0 13.6834 0 12.9375V2.8125ZM13.8195 5.76225C14.9355 6.92775 16.1719 7.50037 17.55 7.50037C17.7705 7.50037 17.955 7.66575 17.9932 7.884L18 7.96838V10.782C18 13.7992 16.5229 15.8512 13.6429 16.8514C13.5504 16.8837 13.4496 16.8837 13.3571 16.8514C10.5649 15.8805 9.09113 13.923 9.00338 11.0543L9 10.782V7.9695C9 7.71075 9.2025 7.50037 9.45 7.50037C10.8259 7.50037 12.0634 6.92662 13.1828 5.76225C13.2237 5.71887 13.273 5.68431 13.3278 5.66069C13.3825 5.63706 13.4415 5.62488 13.5011 5.62488C13.5608 5.62488 13.6198 5.63706 13.6745 5.66069C13.7292 5.68431 13.7786 5.71887 13.8195 5.76225ZM13.5 10.6538L11.97 9.12375C11.89 9.04923 11.7843 9.00866 11.675 9.01059C11.5657 9.01252 11.4614 9.05679 11.3841 9.13409C11.3068 9.21138 11.2625 9.31566 11.2606 9.42496C11.2587 9.53425 11.2992 9.64003 11.3737 9.72L12.9038 11.25L11.3794 12.7744C11.3049 12.8543 11.2643 12.9601 11.2662 13.0694C11.2681 13.1787 11.3124 13.283 11.3897 13.3603C11.467 13.4376 11.5713 13.4819 11.6806 13.4838C11.7899 13.4857 11.8957 13.4451 11.9756 13.3706L13.5 11.8462L15.0244 13.3706C15.1043 13.4451 15.2101 13.4857 15.3194 13.4838C15.4287 13.4819 15.533 13.4376 15.6103 13.3603C15.6876 13.283 15.7319 13.1787 15.7338 13.0694C15.7357 12.9601 15.6951 12.8543 15.6206 12.7744L14.0962 11.25L15.6206 9.72563C15.6951 9.64565 15.7357 9.53988 15.7338 9.43058C15.7319 9.32129 15.6876 9.21701 15.6103 9.13971C15.533 9.06242 15.4287 9.01814 15.3194 9.01621C15.2101 9.01429 15.1043 9.05485 15.0244 9.12937L13.5 10.6538Z" />
// //                   </svg>
// //                   <p className="text-sm pl-2 font-sanssem leading-4">Threats</p>
// //                 </div>

// //               </li>
// //               <li  className="">
// //                 <div style={listItemStyle(3)}
// //                 onClick={() => handleItemClick(3)} className=" hover:text-white hover:border-r-[4px] hover:border-white group flex justify-start mb-4 cursor-pointer  active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-8 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99]  relative  fill-[#FFFFFF99] ">
// //                   <svg
// //                     width="16"
// //                     height="16"
// //                     viewBox="0 0 17 18"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path d="M7.65 10.2256C7.65 10.0002 7.73955 9.78398 7.89896 9.62457C8.05837 9.46516 8.27457 9.37561 8.5 9.37561C8.72543 9.37561 8.94164 9.46516 9.10104 9.62457C9.26045 9.78398 9.35 10.0002 9.35 10.2256V12.7756C9.35 13.001 9.26045 13.2172 9.10104 13.3767C8.94164 13.5361 8.72543 13.6256 8.5 13.6256C8.27457 13.6256 8.05837 13.5361 7.89896 13.3767C7.73955 13.2172 7.65 13.001 7.65 12.7756V10.2256ZM8.5 5.55061C8.16185 5.55061 7.83755 5.68494 7.59844 5.92405C7.35933 6.16316 7.225 6.48746 7.225 6.82561C7.225 7.16376 7.35933 7.48806 7.59844 7.72717C7.83755 7.96628 8.16185 8.10061 8.5 8.10061C8.83815 8.10061 9.16245 7.96628 9.40156 7.72717C9.64067 7.48806 9.775 7.16376 9.775 6.82561C9.775 6.48746 9.64067 6.16316 9.40156 5.92405C9.16245 5.68494 8.83815 5.55061 8.5 5.55061ZM0 9.37561C0 7.12127 0.895533 4.95926 2.48959 3.3652C4.08365 1.77114 6.24566 0.87561 8.5 0.87561C10.7543 0.87561 12.9163 1.77114 14.5104 3.3652C16.1045 4.95926 17 7.12127 17 9.37561C17 11.63 16.1045 13.792 14.5104 15.386C12.9163 16.9801 10.7543 17.8756 8.5 17.8756C6.24566 17.8756 4.08365 16.9801 2.48959 15.386C0.895533 13.792 0 11.63 0 9.37561ZM8.5 2.57561C6.69653 2.57561 4.96692 3.29204 3.69167 4.56728C2.41643 5.84253 1.7 7.57214 1.7 9.37561C1.7 11.1791 2.41643 12.9087 3.69167 14.1839C4.96692 15.4592 6.69653 16.1756 8.5 16.1756C10.3035 16.1756 12.0331 15.4592 13.3083 14.1839C14.5836 12.9087 15.3 11.1791 15.3 9.37561C15.3 7.57214 14.5836 5.84253 13.3083 4.56728C12.0331 3.29204 10.3035 2.57561 8.5 2.57561Z" />
// //                   </svg>

// //                   <p className="text-sm pl-2 font-sanssem leading-4">
// //                     Information
// //                   </p>
// //                 </div>

// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default SideBar;
// // import React, { useState } from "react";

// //   return (
// //     <div className="absolute top-[5%]">
// //       <div style={{ display: isVisible ? 'block' : 'none' }}  className="w-[100%] relative bg-[#020202] h-[88vh] border-b border-color rounded-br-[5px] border-r">
// //         <div className="pt-7">
// //           <div>
// //             <ul>
// //               <li className=" ">
// //                 <div  style={listItemStyle(0)}
// //                 onClick={() => handleItemClick(0)} className="group flex justify-start mb-4 cursor-pointer fill-none  hover:fill-[white] w-full hover:border-r-[4px] items-center px-8 py-2 hover:border-white hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99] hover:text-white relative" >
// //                   <svg
// //                     width="16"
// //                     height="16"
// //                     viewBox="0 0 16 16"
// //                     className="cursor-pointer"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       d="M14.2222 1.77778V3.55556H10.6667V1.77778H14.2222ZM5.33333 1.77778V7.11111H1.77778V1.77778H5.33333ZM14.2222 8.88889V14.2222H10.6667V8.88889H14.2222ZM5.33333 12.4444V14.2222H1.77778V12.4444H5.33333ZM16 0H8.88889V5.33333H16V0ZM7.11111 0H0V8.88889H7.11111V0ZM16 7.11111H8.88889V16H16V7.11111ZM7.11111 10.6667H0V16H7.11111V10.6667Z"
// //                       fill="#FFFFFF99"
// //                       fill-opacity="0.6"
// //                     />
// //                     <path
// //                       d="M14.7222 1.77778V1.27778H14.2222H10.6667H10.1667V1.77778V3.55556V4.05556H10.6667H14.2222H14.7222V3.55556V1.77778ZM5.83333 1.77778V1.27778H5.33333H1.77778H1.27778V1.77778V7.11111V7.61111H1.77778H5.33333H5.83333V7.11111V1.77778ZM14.7222 8.88889V8.38889H14.2222H10.6667H10.1667V8.88889V14.2222V14.7222H10.6667H14.2222H14.7222V14.2222V8.88889ZM5.83333 12.4444V11.9444H5.33333H1.77778H1.27778V12.4444V14.2222V14.7222H1.77778H5.33333H5.83333V14.2222V12.4444ZM9.38889 4.83333V0.5H15.5V4.83333H9.38889ZM6.61111 0.5V8.38889H0.5V0.5H6.61111ZM9.38889 15.5V7.61111H15.5V15.5H9.38889ZM0.5 15.5V11.1667H6.61111V15.5H0.5Z"
// //                       stroke="#FFFFFF99"
// //                       stroke-opacity="0.6"
// //                     />
// //                   </svg>
// //                   <p className="text-sm pl-2 font-sanssem leading-4">
// //                     Overview
// //                   </p>
// //                 </div>
// //               </li>
// //               <li>
// //                 <div className=" hover:text-white hover:border-r-[4px] hover:border-white group flex justify-start mb-4 cursor-pointer  active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-8 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99]  relative  fill-[#FFFFFF99] "   style={listItemStyle(1)}
// //                 onClick={() => handleItemClick(1)}>
// //                   <svg
// //                     width="16"
// //                     height="16"
// //                     viewBox="0 0 19 16"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path d="M11.0427 4.44444H14.5982L11.0427 0.888889V4.44444ZM4.47822 16C4.08355 16 3.74578 15.8593 3.46489 15.5778C3.18341 15.2969 3.04267 14.9591 3.04267 14.5644V12H15.4871V14.5644C15.4871 14.9591 15.3464 15.2969 15.0649 15.5778C14.784 15.8593 14.4462 16 14.0516 16H4.47822ZM0 10.2222V9.33333H18.5298V10.2222H0ZM3.04267 7.55556V1.43556C3.04267 1.04089 3.18341 0.703111 3.46489 0.422222C3.74578 0.140741 4.08355 0 4.47822 0H11.4871L15.4871 4V7.55556H3.04267Z" />
// //                   </svg>
// //                   <p className="text-sm pl-2 font-sanssem leading-4">
// //                     Scan Now
// //                   </p>
// //                 </div>
// //               </li>
// //               <li>
// //                 <div style={listItemStyle(2)}
// //                 onClick={() => handleItemClick(2)} className=" hover:text-white hover:border-r-[4px] hover:border-white group flex justify-start mb-4 cursor-pointer  active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-8 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99]  relative  fill-[#FFFFFF99] ">
// //                   <svg
// //                     width="16"
// //                     height="16"
// //                     viewBox="0 0 18 17"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path d="M0 2.8125C0 2.06658 0.296316 1.35121 0.823762 0.823762C1.35121 0.296316 2.06658 0 2.8125 0H12.9375C13.6834 0 14.3988 0.296316 14.9262 0.823762C15.4537 1.35121 15.75 2.06658 15.75 2.8125V5.886C15.3367 5.63932 14.9602 5.33558 14.6318 4.98375C14.4722 4.817 14.2778 4.68755 14.0625 4.60462V2.8125C14.0625 2.51413 13.944 2.22798 13.733 2.017C13.522 1.80603 13.2359 1.6875 12.9375 1.6875H2.8125C2.51413 1.6875 2.22798 1.80603 2.017 2.017C1.80603 2.22798 1.6875 2.51413 1.6875 2.8125V12.9375C1.6875 13.2359 1.80603 13.522 2.017 13.733C2.22798 13.944 2.51413 14.0625 2.8125 14.0625H8.51737C8.78939 14.6775 9.15483 15.2467 9.60075 15.75H2.8125C2.06658 15.75 1.35121 15.4537 0.823762 14.9262C0.296316 14.3988 0 13.6834 0 12.9375V2.8125ZM13.8195 5.76225C14.9355 6.92775 16.1719 7.50037 17.55 7.50037C17.7705 7.50037 17.955 7.66575 17.9932 7.884L18 7.96838V10.782C18 13.7992 16.5229 15.8512 13.6429 16.8514C13.5504 16.8837 13.4496 16.8837 13.3571 16.8514C10.5649 15.8805 9.09113 13.923 9.00338 11.0543L9 10.782V7.9695C9 7.71075 9.2025 7.50037 9.45 7.50037C10.8259 7.50037 12.0634 6.92662 13.1828 5.76225C13.2237 5.71887 13.273 5.68431 13.3278 5.66069C13.3825 5.63706 13.4415 5.62488 13.5011 5.62488C13.5608 5.62488 13.6198 5.63706 13.6745 5.66069C13.7292 5.68431 13.7786 5.71887 13.8195 5.76225ZM13.5 10.6538L11.97 9.12375C11.89 9.04923 11.7843 9.00866 11.675 9.01059C11.5657 9.01252 11.4614 9.05679 11.3841 9.13409C11.3068 9.21138 11.2625 9.31566 11.2606 9.42496C11.2587 9.53425 11.2992 9.64003 11.3737 9.72L12.9038 11.25L11.3794 12.7744C11.3049 12.8543 11.2643 12.9601 11.2662 13.0694C11.2681 13.1787 11.3124 13.283 11.3897 13.3603C11.467 13.4376 11.5713 13.4819 11.6806 13.4838C11.7899 13.4857 11.8957 13.4451 11.9756 13.3706L13.5 11.8462L15.0244 13.3706C15.1043 13.4451 15.2101 13.4857 15.3194 13.4838C15.4287 13.4819 15.533 13.4376 15.6103 13.3603C15.6876 13.283 15.7319 13.1787 15.7338 13.0694C15.7357 12.9601 15.6951 12.8543 15.6206 12.7744L14.0962 11.25L15.6206 9.72563C15.6951 9.64565 15.7357 9.53988 15.7338 9.43058C15.7319 9.32129 15.6876 9.21701 15.6103 9.13971C15.533 9.06242 15.4287 9.01814 15.3194 9.01621C15.2101 9.01429 15.1043 9.05485 15.0244 9.12937L13.5 10.6538Z" />
// //                   </svg>
// //                   <p className="text-sm pl-2 font-sanssem leading-4">Threats</p>
// //                 </div>
// //               </li>
// //               <li  className="">
// //                 <div style={listItemStyle(3)}
// //                 onClick={() => handleItemClick(3)} className=" hover:text-white hover:border-r-[4px] hover:border-white group flex justify-start mb-4 cursor-pointer  active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-8 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99]  relative  fill-[#FFFFFF99] ">
// //                   <svg
// //                     width="16"
// //                     height="16"
// //                     viewBox="0 0 17 18"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path d="M7.65 10.2256C7.65 10.0002 7.73955 9.78398 7.89896 9.62457C8.05837 9.46516 8.27457 9.37561 8.5 9.37561C8.72543 9.37561 8.94164 9.46516 9.10104 9.62457C9.26045 9.78398 9.35 10.0002 9.35 10.2256V12.7756C9.35 13.001 9.26045 13.2172 9.10104 13.3767C8.94164 13.5361 8.72543 13.6256 8.5 13.6256C8.27457 13.6256 8.05837 13.5361 7.89896 13.3767C7.73955 13.2172 7.65 13.001 7.65 12.7756V10.2256ZM8.5 5.55061C8.16185 5.55061 7.83755 5.68494 7.59844 5.92405C7.35933 6.16316 7.225 6.48746 7.225 6.82561C7.225 7.16376 7.35933 7.48806 7.59844 7.72717C7.83755 7.96628 8.16185 8.10061 8.5 8.10061C8.83815 8.10061 9.16245 7.96628 9.40156 7.72717C9.64067 7.48806 9.775 7.16376 9.775 6.82561C9.775 6.48746 9.64067 6.16316 9.40156 5.92405C9.16245 5.68494 8.83815 5.55061 8.5 5.55061ZM0 9.37561C0 7.12127 0.895533 4.95926 2.48959 3.3652C4.08365 1.77114 6.24566 0.87561 8.5 0.87561C10.7543 0.87561 12.9163 1.77114 14.5104 3.3652C16.1045 4.95926 17 7.12127 17 9.37561C17 11.63 16.1045 13.792 14.5104 15.386C12.9163 16.9801 10.7543 17.8756 8.5 17.8756C6.24566 17.8756 4.08365 16.9801 2.48959 15.386C0.895533 13.792 0 11.63 0 9.37561ZM8.5 2.57561C6.69653 2.57561 4.96692 3.29204 3.69167 4.56728C2.41643 5.84253 1.7 7.57214 1.7 9.37561C1.7 11.1791 2.41643 12.9087 3.69167 14.1839C4.96692 15.4592 6.69653 16.1756 8.5 16.1756C10.3035 16.1756 12.0331 15.4592 13.3083 14.1839C14.5836 12.9087 15.3 11.1791 15.3 9.37561C15.3 7.57214 14.5836 5.84253 13.3083 4.56728C12.0331 3.29204 10.3035 2.57561 8.5 2.57561Z" />
// //                   </svg>
// //                   <p className="text-sm pl-2 font-sanssem leading-4">
// //                     Information
// //                   </p>
// //                 </div>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default SideBar;
// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// // import InboxIcon from '@mui/icons-material/MoveToInbox';

// export default function TemporaryDrawer({
//   isVisible,
//   activeItem,
//   setActiveItem,
// }) {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };
//   const handleItemClick = (index) => {
//     setActiveItem(index);
//   };
//   const listItemStyle = (index) => {
//     return {
//       backgroundColor: activeItem === index ? "#303030" : "",
//       borderRight: activeItem === index ? "4px solid white" : "",
//     };
//   };
//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//       className="bg-[#020202]"
//     >
//       <div className="absolute top-[5%]">
//         <div
//           style={{ display: isVisible ? "block" : "none" }}
//           className="w-[100%] relative bg-[#020202] h-[88vh] border-b border-color rounded-br-[5px] border-r"
//         >
//           <div className="pt-7">
//             <div>
//               <ul>
//                 <li className=" ">
//                   <div
//                     style={listItemStyle(0)}
//                     onClick={() => handleItemClick(0)}
//                     className="group flex justify-start mb-4 cursor-pointer fill-none  hover:fill-[white] w-full hover:border-r-[4px] items-center px-8 py-2 hover:border-white hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99] hover:text-white relative"
//                   >
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       className="cursor-pointer"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M14.2222 1.77778V3.55556H10.6667V1.77778H14.2222ZM5.33333 1.77778V7.11111H1.77778V1.77778H5.33333ZM14.2222 8.88889V14.2222H10.6667V8.88889H14.2222ZM5.33333 12.4444V14.2222H1.77778V12.4444H5.33333ZM16 0H8.88889V5.33333H16V0ZM7.11111 0H0V8.88889H7.11111V0ZM16 7.11111H8.88889V16H16V7.11111ZM7.11111 10.6667H0V16H7.11111V10.6667Z"
//                         fill="#FFFFFF99"
//                         fill-opacity="0.6"
//                       />
//                       <path
//                         d="M14.7222 1.77778V1.27778H14.2222H10.6667H10.1667V1.77778V3.55556V4.05556H10.6667H14.2222H14.7222V3.55556V1.77778ZM5.83333 1.77778V1.27778H5.33333H1.77778H1.27778V1.77778V7.11111V7.61111H1.77778H5.33333H5.83333V7.11111V1.77778ZM14.7222 8.88889V8.38889H14.2222H10.6667H10.1667V8.88889V14.2222V14.7222H10.6667H14.2222H14.7222V14.2222V8.88889ZM5.83333 12.4444V11.9444H5.33333H1.77778H1.27778V12.4444V14.2222V14.7222H1.77778H5.33333H5.83333V14.2222V12.4444ZM9.38889 4.83333V0.5H15.5V4.83333H9.38889ZM6.61111 0.5V8.38889H0.5V0.5H6.61111ZM9.38889 15.5V7.61111H15.5V15.5H9.38889ZM0.5 15.5V11.1667H6.61111V15.5H0.5Z"
//                         stroke="#FFFFFF99"
//                         stroke-opacity="0.6"
//                       />
//                     </svg>
//                     <p className="text-sm pl-2 font-sanssem leading-4">
//                       Overview
//                     </p>
//                   </div>
//                 </li>
//                 <li>
//                   <div
//                     className=" hover:text-white hover:border-r-[4px] hover:border-white group flex justify-start mb-4 cursor-pointer  active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-8 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99]  relative  fill-[#FFFFFF99] "
//                     style={listItemStyle(1)}
//                     onClick={() => handleItemClick(1)}
//                   >
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 19 16"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M11.0427 4.44444H14.5982L11.0427 0.888889V4.44444ZM4.47822 16C4.08355 16 3.74578 15.8593 3.46489 15.5778C3.18341 15.2969 3.04267 14.9591 3.04267 14.5644V12H15.4871V14.5644C15.4871 14.9591 15.3464 15.2969 15.0649 15.5778C14.784 15.8593 14.4462 16 14.0516 16H4.47822ZM0 10.2222V9.33333H18.5298V10.2222H0ZM3.04267 7.55556V1.43556C3.04267 1.04089 3.18341 0.703111 3.46489 0.422222C3.74578 0.140741 4.08355 0 4.47822 0H11.4871L15.4871 4V7.55556H3.04267Z" />
//                     </svg>
//                     <p className="text-sm pl-2 font-sanssem leading-4">
//                       Scan Now
//                     </p>
//                   </div>
//                 </li>
//                 <li>
//                   <div
//                     style={listItemStyle(2)}
//                     onClick={() => handleItemClick(2)}
//                     className=" hover:text-white hover:border-r-[4px] hover:border-white group flex justify-start mb-4 cursor-pointer  active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-8 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99]  relative  fill-[#FFFFFF99] "
//                   >
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 18 17"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M0 2.8125C0 2.06658 0.296316 1.35121 0.823762 0.823762C1.35121 0.296316 2.06658 0 2.8125 0H12.9375C13.6834 0 14.3988 0.296316 14.9262 0.823762C15.4537 1.35121 15.75 2.06658 15.75 2.8125V5.886C15.3367 5.63932 14.9602 5.33558 14.6318 4.98375C14.4722 4.817 14.2778 4.68755 14.0625 4.60462V2.8125C14.0625 2.51413 13.944 2.22798 13.733 2.017C13.522 1.80603 13.2359 1.6875 12.9375 1.6875H2.8125C2.51413 1.6875 2.22798 1.80603 2.017 2.017C1.80603 2.22798 1.6875 2.51413 1.6875 2.8125V12.9375C1.6875 13.2359 1.80603 13.522 2.017 13.733C2.22798 13.944 2.51413 14.0625 2.8125 14.0625H8.51737C8.78939 14.6775 9.15483 15.2467 9.60075 15.75H2.8125C2.06658 15.75 1.35121 15.4537 0.823762 14.9262C0.296316 14.3988 0 13.6834 0 12.9375V2.8125ZM13.8195 5.76225C14.9355 6.92775 16.1719 7.50037 17.55 7.50037C17.7705 7.50037 17.955 7.66575 17.9932 7.884L18 7.96838V10.782C18 13.7992 16.5229 15.8512 13.6429 16.8514C13.5504 16.8837 13.4496 16.8837 13.3571 16.8514C10.5649 15.8805 9.09113 13.923 9.00338 11.0543L9 10.782V7.9695C9 7.71075 9.2025 7.50037 9.45 7.50037C10.8259 7.50037 12.0634 6.92662 13.1828 5.76225C13.2237 5.71887 13.273 5.68431 13.3278 5.66069C13.3825 5.63706 13.4415 5.62488 13.5011 5.62488C13.5608 5.62488 13.6198 5.63706 13.6745 5.66069C13.7292 5.68431 13.7786 5.71887 13.8195 5.76225ZM13.5 10.6538L11.97 9.12375C11.89 9.04923 11.7843 9.00866 11.675 9.01059C11.5657 9.01252 11.4614 9.05679 11.3841 9.13409C11.3068 9.21138 11.2625 9.31566 11.2606 9.42496C11.2587 9.53425 11.2992 9.64003 11.3737 9.72L12.9038 11.25L11.3794 12.7744C11.3049 12.8543 11.2643 12.9601 11.2662 13.0694C11.2681 13.1787 11.3124 13.283 11.3897 13.3603C11.467 13.4376 11.5713 13.4819 11.6806 13.4838C11.7899 13.4857 11.8957 13.4451 11.9756 13.3706L13.5 11.8462L15.0244 13.3706C15.1043 13.4451 15.2101 13.4857 15.3194 13.4838C15.4287 13.4819 15.533 13.4376 15.6103 13.3603C15.6876 13.283 15.7319 13.1787 15.7338 13.0694C15.7357 12.9601 15.6951 12.8543 15.6206 12.7744L14.0962 11.25L15.6206 9.72563C15.6951 9.64565 15.7357 9.53988 15.7338 9.43058C15.7319 9.32129 15.6876 9.21701 15.6103 9.13971C15.533 9.06242 15.4287 9.01814 15.3194 9.01621C15.2101 9.01429 15.1043 9.05485 15.0244 9.12937L13.5 10.6538Z" />
//                     </svg>
//                     <p className="text-sm pl-2 font-sanssem leading-4">
//                       Threats
//                     </p>
//                   </div>
//                 </li>
//                 <li className="">
//                   <div
//                     style={listItemStyle(3)}
//                     onClick={() => handleItemClick(3)}
//                     className=" hover:text-white hover:border-r-[4px] hover:border-white group flex justify-start mb-4 cursor-pointer  active:text-white active:fill-white active:bg-opacity-[0.10] hover:fill-[white] w-full items-center px-8 py-2 hover:bg-white hover:bg-opacity-[0.10] text-[#FFFFFF99]  relative  fill-[#FFFFFF99] "
//                   >
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 17 18"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M7.65 10.2256C7.65 10.0002 7.73955 9.78398 7.89896 9.62457C8.05837 9.46516 8.27457 9.37561 8.5 9.37561C8.72543 9.37561 8.94164 9.46516 9.10104 9.62457C9.26045 9.78398 9.35 10.0002 9.35 10.2256V12.7756C9.35 13.001 9.26045 13.2172 9.10104 13.3767C8.94164 13.5361 8.72543 13.6256 8.5 13.6256C8.27457 13.6256 8.05837 13.5361 7.89896 13.3767C7.73955 13.2172 7.65 13.001 7.65 12.7756V10.2256ZM8.5 5.55061C8.16185 5.55061 7.83755 5.68494 7.59844 5.92405C7.35933 6.16316 7.225 6.48746 7.225 6.82561C7.225 7.16376 7.35933 7.48806 7.59844 7.72717C7.83755 7.96628 8.16185 8.10061 8.5 8.10061C8.83815 8.10061 9.16245 7.96628 9.40156 7.72717C9.64067 7.48806 9.775 7.16376 9.775 6.82561C9.775 6.48746 9.64067 6.16316 9.40156 5.92405C9.16245 5.68494 8.83815 5.55061 8.5 5.55061ZM0 9.37561C0 7.12127 0.895533 4.95926 2.48959 3.3652C4.08365 1.77114 6.24566 0.87561 8.5 0.87561C10.7543 0.87561 12.9163 1.77114 14.5104 3.3652C16.1045 4.95926 17 7.12127 17 9.37561C17 11.63 16.1045 13.792 14.5104 15.386C12.9163 16.9801 10.7543 17.8756 8.5 17.8756C6.24566 17.8756 4.08365 16.9801 2.48959 15.386C0.895533 13.792 0 11.63 0 9.37561ZM8.5 2.57561C6.69653 2.57561 4.96692 3.29204 3.69167 4.56728C2.41643 5.84253 1.7 7.57214 1.7 9.37561C1.7 11.1791 2.41643 12.9087 3.69167 14.1839C4.96692 15.4592 6.69653 16.1756 8.5 16.1756C10.3035 16.1756 12.0331 15.4592 13.3083 14.1839C14.5836 12.9087 15.3 11.1791 15.3 9.37561C15.3 7.57214 14.5836 5.84253 13.3083 4.56728C12.0331 3.29204 10.3035 2.57561 8.5 2.57561Z" />
//                     </svg>
//                     <p className="text-sm pl-2 font-sanssem leading-4">
//                       Information
//                     </p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Box>
//   );

//   return (
//     <div>
//       {["left"].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
