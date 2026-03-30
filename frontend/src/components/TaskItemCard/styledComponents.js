import styled from "styled-components"

export const TaskItemContainer = styled.li`
    width: 30vw;
    height: 28vh;
    background-color: #ffffff;
    border-radius: 15px;
    margin-top: 10px;
    margin-left: 10px;
    list-style-type: none;

    @media (max-width: 776px) {
        width: 90%;
    }
`

export const TaskTitle = styled.p`
    color: #333333;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 700;
    padding-left: 20px;
    padding-top: 10px;
`

export const TaskNameText = styled.p`
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    padding-left: 20px;
`

export const ButtonsContainer = styled.div`
    width: 95%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
`

export const TaskButton = styled.button`
    width: 80px;
    height: 100%;
    background-color: #306acf;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding: 7px;
    border-radius: 8px;
    border-width: 0px;
    margin-top: 10px;
    cursor: pointer;
    outline: none;

    @media (max-width: 776px) {
        width: 60px;
        font-size: 10px;
    }
`