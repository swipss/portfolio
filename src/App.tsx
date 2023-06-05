import { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/tabs/About";
import Resume from "./components/tabs/Resume";
import Portfolio from "./components/tabs/Portfolio";
import Contact from "./components/tabs/Contact";

const tabs = [
  {
    tab: "about",
    label: "About",
    component: <About />,
  },
  {
    tab: "resume",
    label: "Resume",
    component: <Resume />,
  },
  {
    tab: "portfolio",
    label: "Portfolio",
    component: <Portfolio />,
  },
  {
    tab: "contact",
    label: "Contact",
    component: <Contact />,
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const renderTabContent = () => {
    const tab = tabs.find((tab) => tab.tab == activeTab);
    return tab?.component;
  };

  return (
    <div className="w-full h-full p-4 pb-20  xl:max-w-[1200px] md:max-w-[800px] md:m-auto xl:m-auto xl:flex xl:justify-center xl:items-stretch xl:gap-6 sm:pb-28 sm:p-8 bg-neutral-950">
      <Sidebar />
      <div className="relative w-full">
        {renderTabContent()}
        <nav className="fixed bottom-0 left-0 z-10 flex items-center justify-center w-full gap-4 py-5 text-xs font-medium border xl:rounded-bl-2xl xl:rounded-tl-none xl:gap-10 xl:px-10 xl:w-max xl:left-auto xl:right-0 xl:bottom-auto xl:top-[16px] xl:absolute bg-blur text-neutral-100 border-neutral-700 rounded-t-2xl bg-neutral-800">
          {tabs.map(({ tab, label }) => (
            <button
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab == tab && "text-yellow-400"
              } transition-all hover:text-neutral-40 xl:text-sm`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default App;
