import { Checkbox as MCheckbox } from "@mui/material";

const Checkbox = ({ handleDelete, task }) => {
    return (
        <MCheckbox
                inputProps= {{ "aria-label": "Checkbox" }}
                onChange={() => {
                  handleDelete(task.id);
                }}
                sx={{ backgroundColor: task.priority }}
              />
    );
};

export default Checkbox