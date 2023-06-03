import { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/tabs/About";
import Resume from "./components/tabs/Resume";

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
  },
  {
    tab: "contact",
    label: "Contact",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const renderTabContent = () => {
    const tab = tabs.find((tab) => tab.tab == activeTab);
    return tab?.component;
  };

  return (
    <div className="w-full h-full p-4 pb-20 bg-neutral-950">
      <Sidebar />
      {renderTabContent()}
      <nav className="fixed bottom-0 left-0 z-10 flex items-center justify-center w-full gap-4 py-5 text-xs font-medium border bg-blur text-neutral-100 border-neutral-700 rounded-t-2xl bg-neutral-800">
        {tabs.map(({ tab, label }) => (
          <button
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab == tab && "text-yellow-400"
            } transition-all hover:text-neutral-400`}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
