import { useState } from "react"
import Cookies from 'js-cookie'
import { AddtaskErrMsg, AddTaskSuccessMsg, TaskAddButton, TaskFormBgContainer, TaskFormContainer, TaskFormDetailsContainer, TaskFormImage, TaskFormTitle, TaskInputContainer, TaskInputText, TaskLabelHeading, TaskCompletedSelect, TaskCompletedSelectOption } from "./styledComponents"
import { useParams } from "react-router-dom"


const TaskForm = () => {
    const {id} = useParams()

    const [title, setTitle] = useState('')
    const [completed, setCompleted] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const onChangeTitle = event => setTitle(event.target.value)
    const onChangeCompleted = event => setCompleted(event.target.value)

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
        let apiUrl
        let options

        if (id) {
            apiUrl = `${process.env.REACT_APP_API_URL}/api/tasks/${id}`
            console.log(apiUrl)
            options = {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            }
        } else {
            apiUrl = `${process.env.REACT_APP_API_URL}/api/tasks`
            options = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            }
        }

        const response = await fetch(apiUrl, options)
        const data = await response.json()
        if (response.ok) {
            setSuccessMsg(data.message)
            setTitle('')
            setCompleted(false)
            setErrMsg('')
        } else {
            setErrMsg(data.message)
            setSuccessMsg('')
        }
    }

    const buttonText = id ? 'Update' : 'Add Task'

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
                            <TaskCompletedSelectOption value="true">Yes</TaskCompletedSelectOption>
                            <TaskCompletedSelectOption value="false">No</TaskCompletedSelectOption>
                        </TaskCompletedSelect>
                    </TaskInputContainer>
                    <TaskAddButton>{buttonText}</TaskAddButton>
                    {errMsg && <AddtaskErrMsg>{errMsg}</AddtaskErrMsg>}
                    {successMsg && <AddTaskSuccessMsg>{successMsg}</AddTaskSuccessMsg>}
                </TaskFormContainer>
            </TaskFormDetailsContainer>
        </TaskFormBgContainer>
    )
}

export default TaskForm