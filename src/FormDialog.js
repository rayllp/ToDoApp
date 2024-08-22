import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import './App.css';

const FormDialog = ({ getTitleData, getBodyData, getPriorityData, addNewTask }) => {

    // It is customary to name state created by the useState function to [open, setOpen]
    const [open, openChange] = useState(false);

    // These functions are pretty redundant, seeing as you can just use setOpen(true) or setOpen(false)
    const openPopUp = () => {
        openChange(true);
    }
    const closePopUp = () => {
        openChange(false);
    }
    // I would probably rename this as onSubmit
    const CloseAndAdd = () => {
        const dateString = day + "/" + month + "/" + year;
        addNewTask(dateString);
        setDateInput(new Date());
        closePopUp();
    }

    // I would put all of my useStates together at the top of the component
    const [dateInput, setDateInput] = useState(new Date());

    // You might have an easier time by using a dedicated date library (there are lots to choose from because dealing with dates is a pain in the arse)
    const year = dateInput.getFullYear();
    const month = String(dateInput.getMonth() + 1).padStart(2, '0');;
    const day = String(dateInput.getDate()).padStart(2, '0');

    return (
        <div>
            <Button onClick={openPopUp} sx={{
                boxShadow: 'none', color: 'white', backgroundColor: 'gray', border: 1,
                '&:hover': { backgroundColor: 'darkgray', boxShadow: 'none' }
            }} n variant="contained">new</Button>

            <Dialog open={open} onClose={closePopUp}>
                <DialogTitle>ADD NEW TASK</DialogTitle>
                <DialogContent>
                    <FormControl sx={{ minWidth: 210, marginTop: 1 }}>
                        <InputLabel id="demo-simple-select-standard-label">Priority</InputLabel>
                        <Select
                            label="Priority"
                            onChange={getPriorityData}
                        >
                            <MenuItem value={'Green'}>Low Priority</MenuItem>
                            <MenuItem value={'Orange'}>Medium Priority</MenuItem>
                            <MenuItem value={'Red'}>High Priority</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        autoFocus
                        label="task title"
                        variant="outlined"
                        onChange={getTitleData}
                    />
                    <br />
                    <TextField
                        autoFocus
                        label="task content"
                        variant="outlined"
                        rows={3}
                        onChange={getBodyData}
                    />
                    <br />
                    {/* It would be nice to have a label associated with the date picker component, just to make it very clear to the user that they are selecting a due date for the to do item */}
                    <DatePicker
                        selected={dateInput}
                        onChange={(date) => setDateInput(date)}
                        dateFormat="dd/MM/yyyy"
                        useShortMonthInDropdown
                        className="date-time-picker"
                        minDate={Date()}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={CloseAndAdd} sx={{
                        boxShadow: 'none', color: 'white', backgroundColor: 'gray', border: 1,
                        '&:hover': { backgroundColor: 'darkgray', boxShadow: 'none' }
                    }} variant="contained">
                        add task
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;