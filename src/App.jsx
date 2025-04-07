import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-background md:px-4  xl:px-0 text-text-color relative">
        <div className="sticky top-0 z-50 bg-background max-w-[1290px] mx-auto">
          <Navbar />
        </div>
      <div className="max-w-7xl min-h-screen mx-auto ">
        {/* Sticky Navbar */}

        {/* Page Content */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
