import styled from "styled-components";

export const HeaderBgContainer = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderTitle = styled.p`
    color: #ffffff;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 700;
    padding-left: 10px;
`

export const LinksContainer = styled.ul`
    width: 30vw;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0px;
`

export const LinkItem = styled.li`
    color: #ffffff;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 400;
    text-decoartion: none;
    list-style-type: none;
`

export const LogoutButton = styled.button`
    width: 80px;
    height: 36px;
    background-color: #32cad6;
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 8px;
    border-width: 0px;
    margin-right: 30px;
    cursor: pointer;
    outline: none;

    @media (width <= 776px) {
        width: 60px;
        font-size:  10px;
    }
`