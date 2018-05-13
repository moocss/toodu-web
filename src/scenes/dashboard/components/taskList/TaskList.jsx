import PropTypes from "prop-types";
import React, { Component } from "react";
import taskApi from "../../../../core/tasks/tasksApi.js";
import taskListContainer from "./taskListContainer.js";
import TaskListItem from "../taskListItem/TaskListItem";
import TaskFilter from "../taskFilter/TaskFilter";

export class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    tasksWithUsers: PropTypes.array.isRequired,
    linkPath: PropTypes.string.isRequired,
    currentTaskId: PropTypes.string
  };

  state = {
    filteredTasks: this.props.tasksWithUsers.filter(task => !task.completed)
  };

  componentDidMount(e) {
    this.props.getUsers();
  }

  updateComplete(taskId, completed) {
    taskApi.update(taskId, {
      completed
    });
  }

  filter(filteredTasks) {
    this.setState({ filteredTasks });
  }

  render() {
    if (!this.props.tasks.length)
      return (
        <div className="empty empty--white">
          <p>No tasks yet...</p>
        </div>
      );

    return (
      <div>
        <TaskFilter
          onFilter={this.filter.bind(this)}
          tasks={this.props.tasksWithUsers}
        />
        <ul className="taskList">
          {this.state.filteredTasks.map(task => (
            <TaskListItem
              key={task.id}
              task={task}
              onComplete={this.updateComplete.bind(this)}
              user={task.user}
              linkTo={this.props.linkPath + task.id}
              active={
                this.props.activeTask && task.id === this.props.activeTask.id
              }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default taskListContainer(TaskList);