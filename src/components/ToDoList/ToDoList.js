import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import FormDialog from '../../FormDialog';
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from './Checkbox/Checkbox';

const DEFAULT_INPUT = {
    title: "NEW TASK",
    body: "task",
    priority: "Green",
    date: "",
};

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
  // It would be cleaner to put the default state into a separate variable, which could be outside of the App component.
  // Additionally, we should discuss scoping state - this data is only required within the FormDialog component so it should live in there.
  const [taskInput, setTaskInput] = useState(DEFAULT_INPUT);
  // You actually don't need to keep this in state as you can derive this from your other state.
  const [count, setCount] = useState(0);

  /* 
  These three functions are called 'get...' and yet they are setting state, not getting state, which is a touch confusing.
  Additionally, all three of these functions do the same thing, just targeting a different bit of the state.
  Could you possibly think of a way to combine these into a single function that allows you to specify which bit of state you want to manipulate?
   */

  const setInputData = (e, param) => {
    setTaskInput({
        ...taskInput,
        [param]: e.target.value,
    })
  }

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
      ...DEFAULT_INPUT,
    });
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((x) => x.id !== id);
    setTasks(newTasks);
  };

  return (
    <>
      <Typography
        variant="h2"
        sx={{ my: 4, textAlign: "left", fontFamily: "inherit" }}
      >
        TO DO LIST
      </Typography>

      <FormDialog
        setInputData={setInputData}
        addNewTask={addNewTask}
      />
      {/* Task list could be refactored to be a separate component */}
      <div className="task-list">
        {tasks.map((task) => (
            <Box
              className="task-box"
              key={task.id}
              size="large"
              variant="outlined"
              sx={{ p: 5, border: "1px dashed grey", color: task.priority }}
            >
                <Checkbox handleDelete={handleDelete} task={task} />
              {/* Again, you might want to create your own Checkbox component to function as a wrapper */}
              <b> {task.title}</b> {task.body} ~ {task.date}
            </Box>
          ))}
      </div>
    </>
  );
};

export default ToDoList;