import styled from "styled-components";

export const DashboardBgContainer = styled.div`
    width: 100vw;
`

export const DashboardContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    background-color: #1f1f1f;
`

export const DashboardListContainer = styled.ul`
    width: 90%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 0px;

    @media (max-width: 776px) {
        flex-direction: column;
    }
`

export const TasksFailureContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TasksFailureHeading = styled.h1`
    color: #ffffff;
    font-size: 42px;
    font-family: 'Roboto';
    font-weight: 700;

    @media (max-width: 776px) {
        font-size: 18px;
    }
`

export const TasksFailureText = styled.p`
    color: #f8fafc;
    font-size: 22px;
    font-family: 'Roboto';

    @media (width < 776px) {
        font-size: 12px;
    }
`

export const TasksFailureImg = styled.img`
    height: 40vh;
    width: 50vw;
`

export const RetryButton = styled.button`
    height: 42px;
    width: 90px;
    background-color: #4f46e5;
    color: #ffffff;
    font-size: 18px;
    font-family: 'Roboto';
    text-align: center;
    padding-top: auto;
    border-width: 0px;
    cursor: pointer;
    outline: none;

    @media (max-width: 776px) {
        height: 24px;
        font-size: 10px;
        padding: 3px;
    }
`