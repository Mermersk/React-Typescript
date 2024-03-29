import React from "react";
import {Task} from "../models/task";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    task: Task;

}

const NewTaskForm: React.FC<Props> = ({
    onChange,
    onAdd,
    task

}) => (
    <form onSubmit = {onAdd} className = "newTaskForm">
        <input onChange = {onChange} value = {task.name}/>
        <button type = "submit">Add a task</button>
    </form>
);

export default NewTaskForm;