import { Link } from "react-router-dom"
import Cookies from 'js-cookie'
import { ButtonsContainer, TaskButton, TaskItemContainer, TaskNameText, TaskTitle } from "./styledComponents"

const TaskItemCard = props => {
   const {taskDetails} = props
   const {_id, title, completed} = taskDetails

   const onClickDeleteButton = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this task?")

    if (!confirmed) return

    const jwtToken = Cookies.get('userDetails')
    const apiUrl = `${process.env.REACT_APP_API_URL}/api/tasks/${_id}`
    const options = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    window.alert(data.message)

   }

    return (
        <TaskItemContainer >
            <TaskTitle>{title}</TaskTitle>
            {completed && <TaskNameText>Task Completed</TaskNameText>}
            {!completed && <TaskNameText>Task inProgress</TaskNameText>}
            <ButtonsContainer>
                <Link to={`/addtask/${_id}`} target="_blank">
                    <TaskButton type="button">Update</TaskButton>
                </Link>
                <TaskButton type="button" onClick={onClickDeleteButton}>Delete</TaskButton>
            </ButtonsContainer>
        </TaskItemContainer>
    )
}

export default TaskItemCard