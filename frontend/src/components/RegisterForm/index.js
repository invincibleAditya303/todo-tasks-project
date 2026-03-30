import { useState } from 'react'
import {RegisterBgContainer, RegisterContainer, RegisterImageContainer, RegisterImage, RegisterFormContainer, InputContainer, LabelHeading, InputText, RegisterButton, RegisterSuccessButton, RegisterErrorButton } from './styledComponents'

const Register = () => {
    const [formData, setFormData] = useState({
       name: '',
       email: '',
       password: '', 
    })

    const [successMsg, setSuccessMsg] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const onSubmitForm = async event => {
        event.preventDefault()

        const newProfile = {...formData}
        
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/auth/register`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProfile),
        }

        const response = await fetch(apiUrl, options)

        if (response.ok) {
            const data = await response.json()
            setSuccessMsg(data.message)
            setFormData({name: '', email: '', password: ''})
        } else {
            const data = await response.json()

            setErrMsg(data.message)
        }
    }

    const onChangeName = event => {
        setFormData({...formData, name: event.target.value})
    }

    const onChangePassword = event => {
        setFormData({...formData, password: event.target.value})
    }

    const onChangeEmail = event => {
        setFormData({...formData, email: event.target.value})
    }

    return (
        <RegisterBgContainer>
            <RegisterContainer>
                <RegisterImageContainer>
                    <RegisterImage src='https://res.cloudinary.com/dtrjr55q7/image/upload/v1745240119/Mobile-login_1_ztgsll.jpg' alt='register user' />
                </RegisterImageContainer>
                <RegisterFormContainer onSubmit={onSubmitForm}>
                    <InputContainer>
                        <LabelHeading htmlFor='name'>Name</LabelHeading>
                        <InputText type="text" placeholder="Enter Name" id="name" value={formData.name} onChange={onChangeName} />
                    </InputContainer>
                    <InputContainer>
                        <LabelHeading htmlFor='email'>Email</LabelHeading>
                        <InputText type="text" placeholder="Enter Email" id="gender" value={formData.email} onChange={onChangeEmail} />
                    </InputContainer>
                    <InputContainer>
                        <LabelHeading htmlFor='password'>Password</LabelHeading>
                        <InputText type="password" placeholder="Enter Password" id="password" value={formData.password} onChange={onChangePassword} />
                    </InputContainer>
                    <RegisterButton type='submit'>Register</RegisterButton>
                    {successMsg && <RegisterSuccessButton>{successMsg}</RegisterSuccessButton>}
                    {errMsg && <RegisterErrorButton>{errMsg}</RegisterErrorButton>}
                </RegisterFormContainer>
            </RegisterContainer>
        </RegisterBgContainer>
    )
}

export default Register