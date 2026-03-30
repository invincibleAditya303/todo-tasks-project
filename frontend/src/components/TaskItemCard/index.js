import { UserItemContainer, UsernameText, UserTitle } from "./styledComponents"

const TaskItemCard = props => {
   const {taskDetails} = props
   const {title, completed} = taskDetails

    return (
        <UserItemContainer >
            <UserTitle>{title}</UserTitle>
            {completed && <UsernameText>Task Completed</UsernameText>}
            {!completed && <UsernameText>Task inProgress</UsernameText>}
        </UserItemContainer>
    )
}

export default TaskItemCard