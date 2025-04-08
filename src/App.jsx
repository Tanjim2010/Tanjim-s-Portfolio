import { Outlet } from "react-router-dom";
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="bg-background text-text-color ">
      <Outlet />
      <div className="sticky top-0 z-50 bg-background  mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
