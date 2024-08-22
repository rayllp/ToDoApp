import "./App.css";
import { Container } from "@mui/material";
import ToDoList from "./components/ToDoList/ToDoList";


/*
It is usually good practice to keep the App component as clean as possible. I would refactor everything that is not the container and title into a separate component or components and then import that into here.
 */

/*
Using an automatic code formatter is a good idea as it will ensure consistency. In VS Code you can install an extension called Prettier which will handle most of this for you.
*/

function App() {
  return (
    <Container>
      <ToDoList />
    </Container>
  );
}

export default App;
