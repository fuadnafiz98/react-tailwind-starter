import { useContext, Suspense } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import { Loading } from "./components/Loading";

function App() {
  return (
    <div className="grid h-screen font-sans font-medium place-content-center">
      <Suspense fallback={<Loading />}>
        <div className="text-4xl font-black">🍋 React Starter</div>
        <Router>
          <div className="flex justify-center space-x-4 font-medium text-blue-400 ">
            <Link to="/">Home</Link>
          </div>
          <Route exact path="/">
            <Home />
          </Route>
        </Router>
      </Suspense>
    </div>
  );
}

const Home = () => {
  return <div> Welcome Home! Have a 🥧</div>;
};

export default App;
