import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout1";

function App() {
  return (
    <div className="App ">
      <Layout/>
    </div>
  );
}

export default App;
// import React, { useState } from 'react';

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   const changeTab = (tabNumber) => {
//     setActiveTab(tabNumber);
//   };

//   return (
// <>
//       <div className="flex ">
//         <div
//           className={`cursor-pointer text-[#B9C0C9] py-2 px-4 ${
//             activeTab === 1 ? 'border-b-4 border-[#B9C0C9]' : ''
//           }`}
//           onClick={() => changeTab(1)}
//         >
//           Tab 1
//         </div>
//         <div
//           className={`cursor-pointer text-[#B9C0C9] py-2 px-4 ${
//             activeTab === 2 ? 'border-b-4 border-[#B9C0C9]' : ''
//           }`}
//           onClick={() => changeTab(2)}
//         >
//           Tab 2
//         </div>
//         <div
//           className={`cursor-pointer text-[#B9C0C9] py-2 px-4 ${
//             activeTab === 3 ? 'border-b-4 border-[#B9C0C9]' : ''
//           }`}
//           onClick={() => changeTab(3)}
//         >
//           Tab 3
//         </div>
//       </div>
//       <div className="mt-4">
//         {activeTab === 1 && <div>Content for Tab 1</div>}
//         {activeTab === 2 && <div>Content for Tab 2</div>}
//         {activeTab === 3 && <div>Content for Tab 3</div>}
//       </div>
//       </>
//   );
// };

// export default Tabs;

