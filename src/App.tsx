import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="grid place-content-center h-screen font-sans font-medium">
      <div>🧁 React Starter</div>
      <Router>
        <div className="space-x-4 text-blue-400 font-medium">
          <Link to="/">Home</Link>
          <Link to="/pie">Pie</Link>
        </div>
        <Route path="/pie">
          <Pie />
        </Route>
      </Router>
    </div>
  );
}

const Pie = () => {
  return <div>🥧 Pie</div>;
};

export default App;
