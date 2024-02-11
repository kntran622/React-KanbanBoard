import { Task } from "../types"

interface Props {
  task: Task
}

function TaskCard({ task }: Props) {
  return <div>{task.content}</div>
}

export default TaskCard
