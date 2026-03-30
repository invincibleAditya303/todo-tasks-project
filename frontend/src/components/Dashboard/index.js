import { DashboardBgContainer, DashboardContainer, TasksFailureContainer, TasksFailureImg, TasksFailureHeading, TasksFailureText, RetryButton, DashboardListContainer } from "./styledComponents"
import Header from '../Header'
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import {jwtDecode} from 'jwt-decode'
import {RingLoader} from 'react-spinners'
import TaskItemCard from "../TaskItemCard"

const apisStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}


const Dashboard = () => {
    const [tasksList, setTasksList] = useState([])
    const [apiStatus, setApiStatus] = useState(apisStatusConstants.initial)

    useEffect(() => {
        const getAlltasks = async () => {
            setApiStatus(apisStatusConstants.inProgress)
            const jwtToken = Cookies.get('userDetails')
            const decoded = jwtDecode(jwtToken)
            console.log(decoded)
            const apiUrl = `${process.env.REACT_APP_API_URL}/api/tasks`
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`
                }
            }
            const response = await fetch(apiUrl, options)

            if (response.ok) {
                const data = await response.json()
                setTasksList(data.message)
                console.log(data.message)
                setApiStatus(apisStatusConstants.success)
            } else {
                setApiStatus(apisStatusConstants.failure)
            }
        }

        getAlltasks()
    }, [])

    const renderLoaderView = () => (
        <RingLoader color="#36d7b7"  size={30} />
    )

    const renderFailureView = () => (
        <TasksFailureContainer>
            <TasksFailureImg src="https://assets.ccbp.in/frontend/react-js/failure-img.png" alt="failuere view" />
            <TasksFailureHeading>Oops! Something went Wrong</TasksFailureHeading>
            <TasksFailureText>We cannot seem to find the page you are looking for</TasksFailureText>
            <RetryButton type='button' onClick={this.onClickRetry}>Retry</RetryButton>
        </TasksFailureContainer>
    )

    const renderSuccessView = () => (
        <DashboardListContainer>
            {tasksList.map(eachTask => 
                <TaskItemCard key={eachTask.id} taskDetails={eachTask} />
            )}
        </DashboardListContainer>
    )

    const renderStatusView = () => {
        switch (apiStatus) {
          case apisStatusConstants.success:
            return renderSuccessView()
          case apisStatusConstants.inProgress:
            return renderLoaderView()
          case apisStatusConstants.failure:
            return renderFailureView()
          default:
            return null
        }
      }



    return (
        <DashboardBgContainer>
            <Header />
            <DashboardContainer>
                {renderStatusView()}
            </DashboardContainer>
        </DashboardBgContainer>
    )
}

export default Dashboard