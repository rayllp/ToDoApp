import "./App.css";
import { Container, Typography, Box, Checkbox } from "@mui/material";
import { useState } from "react";
import FormDialog from "./FormDialog";

import "react-datepicker/dist/react-datepicker.css";

/*
It is usually good practice to keep the App component as clean as possible. I would refactor everything that is not the container and title into a separate component or components and then import that into here.
 */

/*
Using an automatic code formatter is a good idea as it will ensure consistency. In VS Code you can install an extension called Prettier which will handle most of this for you.
*/

function App() {
  const [tasks, setTasks] = useState([]);
  // It would be cleaner to put the default state into a separate variable, which could be outside of the App component.
  // Additionally, we should discuss scoping state - this data is only required within the FormDialog component so it should live in there.
  const [taskInput, setTaskInput] = useState({
    title: "NEW TASK",
    body: "task",
    priority: "Green",
    date: "",
  });
  // This is unused (I assume you have refactored this into the FormDialog) so this can be removed.
  const [selectedDate, setSelectedDate] = useState(Date());
  // You actually don't need to keep this in state as you can derive this from your other state.
  const [count, setCount] = useState(0);
  const label = { inputProps: { "aria-label": "Checkbox" } };

  /* 
  These three functions are called 'get...' and yet they are setting state, not getting state, which is a touch confusing.
  Additionally, all three of these functions do the same thing, just targeting a different bit of the state.
  Could you possibly think of a way to combine these into a single function that allows you to specify which bit of state you want to manipulate?
   */
  const getBodyData = (e) => {
    setTaskInput({
      ...taskInput,
      body: e.target.value,
    });
  };

  const getTitleData = (e) => {
    setTaskInput({
      ...taskInput,
      title: e.target.value,
    });
  };

  const getPriorityData = (e) => {
    setTaskInput({
      ...taskInput,
      priority: e.target.value,
    });
  };

  /*const getDateData = (e) => {
    setTaskInput({
      ...taskInput,
      date: e.target.value
    });
    setSelectedDate(e.target.value);
  };*/

  // Scope on this should also be changed - we can discuss
  const addNewTask = (dateString) => {
    setTasks([
      ...tasks,
      {
        title: taskInput.title,
        body: taskInput.body,
        priority: taskInput.priority,
        date: dateString,
        id: count,
      },
    ]);
    setCount(count + 1);
    // This could also be simplified by extracting a taskDefault object - see comment on line 18
    setTaskInput({
      ...taskInput,
      body: "task",
      title: "NEW TASK",
      priority: "Green",
      date: Date(),
    });
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((x) => x.id !== id);
    setTasks(newTasks);
  };

  return (
    <Container>
      <Typography
        variant="h2"
        sx={{ my: 4, textAlign: "left", fontFamily: "inherit" }}
      >
        TO DO LIST
      </Typography>

      <FormDialog
        getTitleData={getTitleData}
        getBodyData={getBodyData}
        getPriorityData={getPriorityData}
        addNewTask={addNewTask}
      />
      {/* Task list could be refactored to be a separate component */}
      <div className="task-list">
        {tasks.map((task) => {
          return (
            <Box
              className="task-box"
              key={task.id}
              size="large"
              variant="outlined"
              sx={{ p: 5, border: "1px dashed grey", color: task.priority }}
            >
              {/* Again, you might want to create your own Checkbox component to function as a wrapper */}
              <Checkbox
                {...label}
                onChange={() => {
                  handleDelete(task.id);
                }}
                sx={{ backgroundColor: task.priority }}
              />
              <b> {task.title}</b> {task.body} ~ {task.date}
            </Box>
          );
        })}
      </div>
    </Container>
  );
}

export default App;
