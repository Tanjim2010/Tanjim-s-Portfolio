import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-background text-text-color ">
      <Outlet />
    </div>
  );
}

export default App;
