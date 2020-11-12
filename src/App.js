import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    console.log("hello world");
  }, []);
  return (
    <div className="">
      <Navbar />
    </div>
  );
}

export default App;
