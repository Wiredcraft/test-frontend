import React, { useState } from "react";
import ReactDOM from "react-dom";

import TableMain from "./TableMain";
import { Regions } from "./Regions.js";

// const Test = () => {
//   const [showDistricts, setShowDistricts] = useState([]);
//   const [showTownships, setShowTownships] = useState([]);

//   const handleShowDistrictsButton = (index) => {
//     setShowDistricts([...showDistricts, ...index]);
//   };

//   const handleShowTownshipsButton = (index) => {
//     setShowTownships([...showTownships, ...index]);
//   };

//   return Regions.map((region) => {
//     return (
//       <div key={region.id}>
//         {region.name}
//         <button
//           key={region.id}
//           onClick={() =>
//             handleShowDistrictsButton(
//               region.districts.map((district) => district)
//             )
//           }
//         >
//           Show Districts
//         </button>
//         {region.districts.map((district) => {
//           return (
//             <>
//               {showDistricts[showDistricts.length - 1] ===
//               "undefined" ? null : showDistricts[showDistricts.length - 1] ===
//                 region.districts.map((district) => district)[
//                   region.districts.map((district) => district).length - 1
//                 ] ? (
//                 <div
//                   key={district.id}
//                   style={
//                     showDistricts ? { display: "block" } : { display: "none" }
//                   }
//                 >
//                   {district.name}
//                   <button
//                     key={district.id}
//                     onClick={() =>
//                       handleShowTownshipsButton(
//                         district.townships.map((township) => township)
//                       )
//                     }
//                   >
//                     Show Townships
//                   </button>
//                   {district.townships.map((township) => {
//                     return (
//                       <>
//                         {showTownships[showTownships.length - 1] ===
//                         "undefined" ? null : showTownships[
//                             showTownships.length - 1
//                           ] ===
//                           district.townships.map((township) => township)[
//                             district.townships.map((township) => township)
//                               .length - 1
//                           ] ? (
//                           <div
//                             key={township.id}
//                             style={
//                               showTownships
//                                 ? { display: "block" }
//                                 : { display: "none" }
//                             }
//                           >
//                             {township.name}
//                           </div>
//                         ) : null}
//                       </>
//                     );
//                   })}
//                 </div>
//               ) : null}
//             </>
//           );
//         })}
//       </div>
//     );
//   });
// };

ReactDOM.render(
  <TableMain Regions={Regions} />,
  document.getElementById("root")
);
