import { useContext } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import { TaskContext } from "./context/TaskContext";

function App() {
  return (
    <div className="grid h-screen font-sans font-medium place-content-center">
      <TaskProvider>
        <div>🧁 React Starter</div>
        <Router>
          <div className="space-x-4 font-medium text-blue-400">
            <Link to="/">Home</Link>
            <Link to="/pie">Pie</Link>
          </div>
          <Route path="/pie">
            <Pie />
          </Route>
        </Router>
      </TaskProvider>
    </div>
  );
}

const Pie = () => {
  const task = useContext(TaskContext);
  console.log(task?.createTab("first"));

  return <div>🥧 Pie</div>;
};

export default App;
