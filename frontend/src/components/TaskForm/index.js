import { useState } from "react"
import Cookies from 'js-cookie'
import { AddtaskErrMsg, AddTaskSuccessMsg, TaskAddButton, TaskFormBgContainer, TaskFormContainer, TaskFormDetailsContainer, TaskFormImage, TaskFormTitle, TaskInputContainer, TaskInputText, TaskLabelHeading, TaskCompletedSelect, TaskCompletedSelectOption } from "./styledComponents"

const TaskForm = () => {
    const [title, setTitle] = useState('')
    const [completed, setCompleted] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const onChangeTitle = event => setTitle(event.target.value)
    const onChangeCompleted = event => setCompleted(Boolean(Number(event.target.value)))

    const onSubmitTaskForm = async event => {
        event.preventDefault()

        if (!title || !completed) {
            setErrMsg('Please fill in all the fields')
        }
        const newTask = {
            title,
            completed,
        }

        const jwtToken = Cookies.get('userDetails')
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/tasks`
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        }

        const response = await fetch(apiUrl, options)
        const data = await response.json()
        if (response.ok) {
            setSuccessMsg(data.message)
            setTitle('')
            setCompleted('')
            setErrMsg('')
        } else {
            setErrMsg(data.message)
            setSuccessMsg('')
        }
    }

    return (
        <TaskFormBgContainer>
            <TaskFormTitle>Add Task</TaskFormTitle>
            <TaskFormDetailsContainer>
                <TaskFormImage src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1765957242/Sandy_Bus-37_Single-08_ywqxcq.jpg" alt='task logo' />
                <TaskFormContainer onSubmit={onSubmitTaskForm}>
                    <TaskInputContainer>
                        <TaskLabelHeading htmlFor="title">Title</TaskLabelHeading>
                        <TaskInputText type="text" placeholder="Title" value={title} id="title" onChange={onChangeTitle} />
                    </TaskInputContainer>
                    <TaskInputContainer>
                        <TaskLabelHeading htmlFor="description">Completed</TaskLabelHeading>
                        <TaskCompletedSelect value={completed} onChange={onChangeCompleted}>
                            <TaskCompletedSelectOption value="1">Yes</TaskCompletedSelectOption>
                            <TaskCompletedSelectOption value="0">No</TaskCompletedSelectOption>
                        </TaskCompletedSelect>
                    </TaskInputContainer>
                    <TaskAddButton>Add Task</TaskAddButton>
                    {errMsg && <AddtaskErrMsg>{errMsg}</AddtaskErrMsg>}
                    {successMsg && <AddTaskSuccessMsg>{successMsg}</AddTaskSuccessMsg>}
                </TaskFormContainer>
            </TaskFormDetailsContainer>
        </TaskFormBgContainer>
    )
}

export default TaskForm