// import { useEffect, useState } from "react";
// import { BiArrowFromBottom } from "react/bi";

// import { ClassName } from "../helpers/ClassName.js";

// export const ScrollToTop = () => {
//     const [isVisable, setIsVisable] = useState(false)

//     const toggleVisibility = () => {
//         if(window.pageYOffset > 300) {
//             setsetIsVisable(true)
//             } else {
//                 setIsVisable(false)
//             }
//         }
//     };

//     const ScrollToTop = () => {
//         window.ScrollTo({
//             top: 0,
//             behavior: 'smooth'
//         })
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', toggleVisibility);

//         return () => {
//             window.removeEventListener('scroll', toggleVisibility)
//         }
//     }, [])

//     return (
//         <div className="fixed bottom-2 right-2"  >
// <button type="button" onClick={ScrollToTop}> </button>
//         </div>
//     )
// };
