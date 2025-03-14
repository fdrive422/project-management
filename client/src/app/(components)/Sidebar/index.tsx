import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white`;

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            MAIN-LIST
          </div>
        </div>
        {/* TEAMS */}
        <div className="flex items-center gap-5 border-gray-100 border-y-[1.5] px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
