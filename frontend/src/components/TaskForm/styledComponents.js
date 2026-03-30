import styled from "styled-components"

export const TaskFormBgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1f1f1f;
`

export const TaskFormTitle = styled.h1`
    color: #ffffff;
    font-size: 32px;
    font-family: "Roboto";
    font-weight: 700;
    text-align: center;
    padding-top: 20px;

    @media (width <= 776px) {
        font-size: 20px;
    }
`

export const TaskFormDetailsContainer = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (width <= 776px) {
        height: 85vh;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 20px;
    }
`

export const TaskFormContainer = styled.form`
    width: 45vw;
    height: 63vh;
    background-color: #ebe7e2;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;

    @media (width <= 776px) {
        height: 53vh;
        width: 80vw;
    }
`

export const TaskInputContainer = styled.div`
    width: 35vw;
    height: 8vh;
    margin-top: 40px;

    @media (width <= 776px) {
        height: 6vh;
        width: 70vw;
    }
`

export const TaskLabelHeading = styled.label`
    color: #333333;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 500;
    padding-left: 5px;
    padding-bottom: 12px;

    @media (width <= 776px) {
        font-size: 14px;
        padding-bottom: 6px;
    }
`

export const TaskInputText = styled.input`
    width: 100%;
    height: 7vh;
    background-color: transparent;
    color: #333333;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 400;
    padding-left: 10px;
    border-radius: 20px;
    border: 2px #1f1f1f solid;
    outline: none;

    @media (width <= 776px) {
        height: 5vh;
        font-size: 14px;
    }
`

export const TaskCompletedSelect = styled.select`
    width: 100%;
    height: 7vh;
    background-color: transparent;
    border-radius: 20px;
    border: 2px #1f1f1f solid;
    outline: none;
`

export const TaskCompletedSelectOption = styled.option`
     background-color: transparent;
    color: #333333;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 400;
    padding-left: 10px;
`

export const TaskAddButton = styled.button`
    width: 80px;
    height: 36px;
    background-color: #306acf;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding: 7px;
    border-radius: 8px;
    border-width: 0px;
    margin-top: 40px;
    cursor: pointer;
    outline: none;

    @media (width <= 776px) {
        width: 60px;
        font-size: 10px;
    }
`

export const TaskFormImage = styled.img`
    width: 35vw;
    height: 63vh;
    margin-right: 20px;
    border-radius: 30px;

    @media (width <= 776px) {
        height: 30vh;
        width: 80vw;
        margin-bottom: 20px;
    }
`

export const AddtaskErrMsg = styled.p`
    color: #ff0b37;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 15px;

    @media (width <= 776px) {
        font-size: 12px;
    }
`

export const AddTaskSuccessMsg = styled.p`
    color: #279123;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 15px;

    @media (width <= 776px) {
        font-size: 12px;
    }
`