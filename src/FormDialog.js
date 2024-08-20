import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, InputLabel, MenuItem, FormControl, Select, OutlinedInput } from "@mui/material";
import { useState } from "react";

const FormDialog = ({ getTitleData, getBodyData, getPriorityData, setInputTask }) => {

    //const [taskInput, setTaskInput] = useState("initial value");

    const [open, openChange] = useState(false);
    const [priority, setPriority] = useState('');

    const openPopUp = () => {
        openChange(true);
    }
    const closePopUp = () => {
        openChange(false);
    }
    const CloseAndAdd = () => {
        setInputTask();
        closePopUp();
    }


    return (
        <div /*style={{ textAlign: 'center' }}*/>
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
                        //multiline
                        rows={3}
                        onChange={getBodyData}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={CloseAndAdd} sx={{ color: 'blue' }} variant="contained">
                        add task
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}

export default FormDialog;