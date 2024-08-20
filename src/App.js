import './App.css';
import { Container, Typography, Box, Checkbox } from "@mui/material";
import { useState } from 'react';
import FormDialog from './FormDialog';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({ title: 'NEW TASK', body: 'task', priority: 'Green' })
  const [count, setCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState();
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

  const addNewTask = () => {
    setTasks([...tasks, {
      title: taskInput.title,
      body: taskInput.body,
      priority: taskInput.priority,
      id: count
    }]);
    setCount(count + 1);

    setTaskInput({
      ...taskInput,
      body: 'task',
      title: 'NEW TASK',
      priority: 'Green'
    })
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter(x => x.id !== id);
    setTasks(newTasks);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }



  return (

    <Container>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          filterDate={filterWeekends}
          showTimeSelect
        />

      </div>


      <Typography variant="h2" sx={{ my: 4, textAlign: "left", fontFamily: "inherit" }}>TO DO LIST</Typography>

      <DatePicker selected={startdate} onChange={(date => setStartDate(date))} />

      {/*<Button onClick={() => {
        addNewTask(FormDialog.taskInput, "body")
      }} variant="outlined">NEW</Button>*/}

      <FormDialog getTitleData={getTitleData} getBodyData={getBodyData} getPriorityData={getPriorityData} setInputTask={addNewTask} />

      <div className="task-list">

        {tasks.map(task => {
          return (
            <Box className="task-box" key={task.id} size="large" variant="outlined" sx={{ p: 5, border: '1px dashed grey', color: task.priority }}>
              <Checkbox {...label} onChange={() => { handleDelete(task.id) }} sx={{ backgroundColor: task.priority }} />
              <b> {task.title}</b> {task.body}
            </Box>
          )
        })}
      </div>


    </Container>
  );
}

export default App;
