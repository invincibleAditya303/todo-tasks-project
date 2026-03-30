import styled from "styled-components"

export const LoginBgContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    height: 60vh;
    width: 70vw;
    display: flex;
`

export const LoginImageContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 100%;
  width: 75%;

  @media (width < 776px) {
    width: 100%;
  }
`

export const LoginFormContainer = styled.form`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LoginHeading = styled.h1`
  color: #334155;
  font-size: 36px;
  font-family: "Roboto";
  font-weight: bold;

  @media (width < 776px) {
    font-size: 14px;
  }
`

export const InputContainer = styled.div`
  height: 5vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
`

export const LabelHeading = styled.label`
  color: #475569;
  font-size: 18px;
  font-family: "Roboto";
  padding-bottom: 5px;

  @media (width < 776px) {
    font-size: 12px;
  }
`

export const InputText = styled.input`
  height: 4vh;
  width: 100%;
  background-color: transparent;
  color: #64748b;
  font-size: 18px;
  font-family: "Roboto";
  padding-left: 10px;
  border-radius: 8px;
  border: 2px #cbd5e1 solid;
  outline: none;

  @media (width < 776px) {
    font-size: 12px;
  }
`

export const LoginButton = styled.button`
  height: 4vh;
  width: 8vw;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 16px;
  font-family: "Roboto";
  text-align: center;
  padding-top: auto;
  margin-right: 5px;
  border-radius: 6px;
  border-width: 0px;
  cursor: pointer;
  outline: none;

  @media (width < 776px) {
    width: 9vw;  
    font-size: 10px;
    padding: 3px;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 18px;
  font-family: "Roboto";

  @media (width < 776px) {
    font-size: 12px;
  }
`