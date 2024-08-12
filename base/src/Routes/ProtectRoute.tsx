import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ReactElement } from "react";

export default function ProtecRoute(): ReactElement {
    const auth = useAuth();

    if (auth.lerToken()) {
        return <Navigate to="/" />;
    } else {
        return <Navigate to="/dashboard" />;
    }
}
