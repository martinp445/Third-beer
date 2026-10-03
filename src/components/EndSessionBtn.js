import { useNavigate } from "react-router-dom";

import './EndSessionBtn.css'

const EndSessionBtn = ({nickname}) => {
    const navigate = useNavigate()

    const buttonHandler = () => {
        const routePath = '/conclusion-' + nickname
        navigate(routePath)
    }

    return (
        <button type="button" className="end-session-btn" onClick={buttonHandler}>Platím</button>
    )
}

export default EndSessionBtn