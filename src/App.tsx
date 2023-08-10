import AddtoDo from "./components/addtodo";
import Navbar from "./components/Navbar";
import Todos from "./components/todos";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1 style={{marginBottom:"40px"}}>TODO REACT + TYPESCRIPT </h1>
      <Navbar />
      <AddtoDo />
      <Todos />
    </main>
  );
};

export default App;
