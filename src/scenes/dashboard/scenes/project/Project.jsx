// import PropTypes from "prop-types";
import React, { Component } from "react";
import projectContainer from "./projectContainer";
import TaskList from "./components/taskList/TaskList";

export class Project extends Component {
  // static propTypes = {};

  render() {
    if (!this.props.project) return <p>Project not found</p>;
    return (
      <div>
        <h2>{this.props.project.name}</h2>
        <TaskList projectId={this.props.project.id} />
      </div>
    );
  }
}

export default projectContainer(Project);
