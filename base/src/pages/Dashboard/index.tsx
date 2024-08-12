import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const auth = useAuth();
    const navigate = useNavigate();

    function logoff(e: React.MouseEvent) {
        e.preventDefault();
        auth.apagarToken();
        navigate("/");
    }

    return (
        <>
            <button onClick={logoff}>Logoff</button>
        </>
    );
}
