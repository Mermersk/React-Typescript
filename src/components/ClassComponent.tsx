import React, {Component} from "react";
import { Task } from "../models/task";
import NewTaskForm from "./NewTaskForm"
import { TasksList } from "./TaskList";

interface State {
    newTask: Task;
    tasks: Task[];
}

class ClassComponent extends Component<{}, State> {

    state = {
        newTask: {
            id: 1,
            name: ""
        },
        tasks: []
    };

    private addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
     
        this.setState(
            
            previousState => (
                {
                    newTask: {
                        id: previousState.newTask.id + 1,
                        name: ""
                    },
                    tasks: [...previousState.tasks, previousState.newTask]

                }
            )
        );
    };

      private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            newTask: {
                ...this.state.newTask,
                name: event.target.value
            }
        });
        };

        private deleteTask = (taskToDelete: Task) => {
            this.setState(previousState => ({
                tasks: [...previousState.tasks.filter(task => task.id !== taskToDelete.id)]
            }));
        };


    render() {
    return (
        <div>
            <NewTaskForm task={this.state.newTask} onAdd={this.addTask} onChange={this.handleTaskChange}/>
            <TasksList tasks = {this.state.tasks} onDelete = {this.deleteTask}/>
        </div>
    );

    }
}

export default ClassComponent;