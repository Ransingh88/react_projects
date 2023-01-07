import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [open, setOpen] = useState(false)
  const menu = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth < 786) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [windowSize.innerWidth]);
  return (
    <div className="bg-slate-100 p-2 h-screen flex items-center justify-center">
      <div className="h-5/6 w-9/12 rounded-md flex overflow-hidden drop-shadow-lg max-w-6xl">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } duration-300 bg-gray-900 text-slate-50 p-5 relative`}
        >
          <img
            className={`border-2 w-6 bg-slate-200 border-slate-900 rounded-full absolute -right-2.5 top-10 cursor-pointer duration-75 ${
              !open && "rotate-180"
            }`}
            src="./assets/control.png"
            alt=""
            onClick={() => {
              setOpen(!open);
            }}
          />
          <div className="flex items-center gap-4 ">
            <img
              src="./assets/logo.png"
              alt=""
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-lg uppercase font-medium duration-300 origin-left ${
                !open && "scale-0"
              }`}
            >
              Apselon
            </h1>
          </div>
          <ul className="pt-6">
            {menu.map((item, index) => (
              <li
                key={index}
                className={`text-slate-300 text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-slate-800 rounded-md ${
                  item.gap ? "mt-6" : "mt-2"
                }`}
              >
                <img src={`./assets/${item.src}.png`} alt="" />
                <span
                  className={`duration-300 origin-left ${!open && "scale-0"}`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 bg-slate-200 p-4">
          <h1 className="text=xl">Dashboard</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
