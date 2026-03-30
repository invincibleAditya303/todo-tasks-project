import styled  from "styled-components";

export const RegisterBgContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #1f1f1f;
    background-size: cover;
    justify-content: center;
    align-items: center;
`


export const RegisterContainer = styled.div`
    height: 70vh;
    width: 50vw;
    display: flex;
    background-image: linear-gradient(to right, #4a90e2, #00bfff);
    background-size: cover;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 2px #585d75 solid;

    @media (width < 776px) {
        width: 70vw;
    }
`

export const RegisterImageContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RegisterImage =styled.img`
    height: 50vh;
    width: 20vw;

    @media (width < 776px) {
        width: 30vw;
    }
`

export const RegisterFormContainer = styled.form`
    height: 50vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputContainer = styled.div`
    height: 7vh;
    width: 20vw;
    margin-top: 20px;

    @media (width < 776px) {
        width: 98%;
    }
`

export const LabelHeading = styled.label`
    color: #61264b;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 400;

    @media (width < 776px) {
        font-size: 12px;
    }
`

export const InputText = styled.input`
    height: 6vh;
    width: 100%;
    background-color: transparent;
    font-size: 18px;
    font-family: "Roboto";
    padding-left: 5px;
    border-radius: 5px;
    border: 2px #7f5582 solid;
    outline: none;

    @media (width < 776px) {
        font-size: 12px;
    }
`

export const RegisterButton = styled.button`
    height: 5vh;
    width: 5vw;
    background-color: #c92042;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    margin-top: 20px;
    border-width: 0px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    @media (width < 776px) {
    width: 10vw;    
    font-size: 10px;
    padding: 3px;
    }
`

export const RegisterErrorButton = styled.p`
    color: #e04226;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 5px;

    @media (width < 776px) {
        font-size: 10px;
    }
`

export const RegisterSuccessButton = styled.p`
    color: #279123;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 5px;

    @media (width < 776px) {
        font-size: 10px;
    }
`