import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from "./tasksGateway";

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    fetchTasksList();
  }

  fetchTasks = () => {
    fetchTasksList().then((tasksList) =>
      this.setState({
        tasks: tasksList,
      })
    );
  };

  onCreate = (text) => {
    //const { tasks } = this.state;
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());

    // const updatedTasks = tasks.concat(newTask);
    // this.setState({ tasks: updatedTasks });
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              onDelete={this.handleTaskDelete}
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
