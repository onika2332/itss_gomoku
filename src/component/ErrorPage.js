import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>404 Not found</h2>
            <div onClick={() => navigate("/")}>Back to the app</div>
        </div>
    )
}

export default ErrorPage