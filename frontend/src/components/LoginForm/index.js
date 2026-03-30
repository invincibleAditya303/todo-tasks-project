import {  useState } from 'react';
import Cookies from 'js-cookie'
import { InputContainer, InputText, LabelHeading, LoginBgContainer, LoginButton, LoginContainer, LoginImage, LoginFormContainer, LoginImageContainer, ErrorMsg, LoginHeading } from "./styledComponents";
import { Link } from 'react-router-dom';

const LoginForm = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    
    const onChangeEmail = event => setEmail(event.target.value)
    const onChangePassword = event => setPassword(event.target.value)

    const onSubmitSuccess = jwtToken => {
        const {history} = props

        Cookies.set('userDetails', jwtToken, {expiresIn: '1d'})

        history.replace('/')
    }

    const onSubmitFailure = errMsg => {
        setErrMsg(errMsg)
    }

    const onSubmitLoginForm = async event => {
        event.preventDefault()
        const userDetails = {email, password}

        if (!email || !password) {
            setErrMsg('Please fill in all fields')
        }

        const apiUrl = `${process.env.REACT_APP_API_URL}/api/auth/login`
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json'
            }

        }

        const response = await fetch(apiUrl, options)
        const data = await response.json()

        if (response.ok) {
            onSubmitSuccess(data.token)
        } else {
            onSubmitFailure(data.message)
        }
    }

    return (
        <LoginBgContainer>
                <LoginContainer>
                    <LoginImageContainer>
                        <LoginImage src='https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png' alt='website login' />
                    </LoginImageContainer>
                    <LoginFormContainer onSubmit={onSubmitLoginForm}>
                        <LoginHeading>Category Managment</LoginHeading>
                        <InputContainer>
                            <LabelHeading>USERNAME</LabelHeading>
                            <InputText type='text' placeholder='Enter Username' value={email} onChange={onChangeEmail} />
                        </InputContainer>
                        <InputContainer>
                            <LabelHeading>PASSWORD</LabelHeading>
                            <InputText type='password' placeholder='Enter Password' value={password} onChange={onChangePassword} />
                        </InputContainer>
                            <LoginButton type='submit'>Login</LoginButton>
                        {errMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
                    </LoginFormContainer>
                </LoginContainer>
                <Link to='/register' target="_blank">
                    <LoginButton>Register</LoginButton>
                </Link>
            </LoginBgContainer>
    )
}

export default LoginForm