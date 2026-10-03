import { useRef } from 'react'
import { useNavigate } from "react-router-dom";

import './Login.css'

const Login = ({onChangeNickname}) => {
    const navigate = useNavigate()
    const inputReference = useRef(null)

    const goToSessionHandler = () => {
        const nickname = inputReference.current.value
        if (nickname === '') {
            alert('Zadej prosím jméno!')
            return
        }
        
        onChangeNickname(nickname)
        const routePath = '/app-' + nickname
        navigate(routePath)
    }

    return (
        <div className='login-root'>
            <div className='nickname-row'>
                <label id='login-label'>Jmeno:</label>
                <input type='text' id='login-textbox' ref={inputReference} />
            </div>
            <button type='button' id='login-btn' onClick={goToSessionHandler}>Jdi na to!</button>
        </div>
    )
}

export default Login