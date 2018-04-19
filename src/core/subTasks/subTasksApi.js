import ApiService from "../../services/ApiService";

const subTasksApi = {
  getForTask(taskId) {
    return ApiService.get(`/tasks/${taskId}/sub_tasks`);
  },

  create(subTask) {
    return ApiService.post(`/tasks/${subTask.taskId}/sub_tasks`, {
      name: subTask.name,
      task_id: subTask.taskId
    });
  }
};

export default subTasksApi;