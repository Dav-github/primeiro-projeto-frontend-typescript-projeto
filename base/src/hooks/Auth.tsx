import { useState } from "react";

export function Auth() {
    const [tokenAtual, setTokenAtual] = useState("");

    const gravarToken = (token: string) => {
        localStorage.setItem("token", token);
        setTokenAtual(token);
    };
    const lerToken = () => {
        console.log(tokenAtual);
    };
    const apagarToken = () => {
        setTokenAtual("");
        localStorage.removeItem("token");
    };

    return {
        gravarToken,
        lerToken,
        apagarToken,
    };
}
