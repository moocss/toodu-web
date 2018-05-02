import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getUsers } from "../../../../../../core/users/usersActions";
import { getTasksForProject } from "../../../../../../core/tasks/tasksActions";

const tasksSelector = state => state.core.tasks.data;
const usersSelector = state => state.core.users.data;
const currentProjectIdSelector = (state, props) => props.projectId;
const activeTaskIdSelector = state => state.scenes.dashboard.activeTask;

const tasksForCurrentProjectSelector = createSelector(
  [tasksSelector, currentProjectIdSelector],
  (tasks, currentProjectId) =>
    tasks
      .filter(task => task.project_id === currentProjectId)
      .sort((a, b) => (a.completed ? 1 : -1))
);

const mapStateToProps = (state, props) => ({
  tasks: tasksForCurrentProjectSelector(state, props),
  activeTaskId: activeTaskIdSelector(state),
  users: usersSelector(state)
});

export default connect(mapStateToProps, { getTasksForProject, getUsers });
