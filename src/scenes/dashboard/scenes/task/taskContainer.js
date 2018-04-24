import { connect } from "react-redux";
import { createSelector } from "reselect";
import { changeTask } from "../../dashboardActions";

const tasksSelector = state => state.core.tasks.data;
const currentTaskIdSelector = state => state.scenes.dashboard.activeTask;

const taskSelector = createSelector(
  [tasksSelector, currentTaskIdSelector],
  (tasks, currentTaskId) => tasks.find(task => task.id === currentTaskId)
);

const mapStateToProps = (state, props) => ({
  task: taskSelector(state, props)
});

export default connect(mapStateToProps, { changeTask });
