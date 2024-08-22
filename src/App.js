import './App.css';
import { Container, Typography, Box, Checkbox } from "@mui/material";
import { useState } from 'react';
import FormDialog from './FormDialog';

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({ title: 'NEW TASK', body: 'task', priority: 'Green', date: "" });
  const [selectedDate, setSelectedDate] = useState(Date());
  const [count, setCount] = useState(0);
  const label = { inputProps: { 'aria-label': 'Checkbox' } }; 

  const getBodyData = (e) => {
    setTaskInput({
      ...taskInput,
      body: e.target.value
    })
  };

  const getTitleData = (e) => {
    setTaskInput({
      ...taskInput,
      title: e.target.value
    })
  };

  const getPriorityData = (e) => {
    setTaskInput({
      ...taskInput,
      priority: e.target.value
    })
  };

  /*const getDateData = (e) => {
    setTaskInput({
      ...taskInput,
      date: e.target.value
    });
    setSelectedDate(e.target.value);
  };*/

  const addNewTask = (dateString) => {
    setTasks([...tasks, {
      title: taskInput.title,
      body: taskInput.body,
      priority: taskInput.priority,
      date: dateString,
      id: count
    }]);
    setCount(count + 1);
    setTaskInput({
      ...taskInput,
      body: 'task',
      title: 'NEW TASK',
      priority: 'Green',
      date: Date()
    })
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter(x => x.id !== id);
    setTasks(newTasks);
  };



  return (

    <Container>

      <Typography variant="h2" sx={{ my: 4, textAlign: "left", fontFamily: "inherit" }}>TO DO LIST</Typography>

      <FormDialog 
      getTitleData={getTitleData} 
      getBodyData={getBodyData} 
      getPriorityData={getPriorityData} 
      addNewTask={addNewTask} />

      <div className="task-list">

        {tasks.map(task => {
          return (
            <Box className="task-box" key={task.id} size="large" variant="outlined" sx={{ p: 5, border: '1px dashed grey', color: task.priority }}>
              <Checkbox {...label} onChange={() => { handleDelete(task.id) }} sx={{ backgroundColor: task.priority }} />
              <b> {task.title}</b> {task.body} ~ {task.date} 
            </Box>
          )
        })}
      </div>


    </Container>
  );
}

export default App;
