import AddTodo from "./Components/addTodo/addTodo";
import Todos from "./Components/todos/todos";
import "./App.css";

const App = () => {
    return (
    <div className="App">
        <AddTodo />
        <Todos />
    </div>
    );
}
export default App
