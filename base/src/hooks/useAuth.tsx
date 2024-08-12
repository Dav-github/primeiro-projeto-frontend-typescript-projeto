import { useState } from "react";

type ReturnAuth = {
    gravarToken: Function;
    lerToken: Function;
    apagarToken: Function;
};

export function useAuth(): ReturnAuth {
    const [token, setToken] = useState<string | null>(null);

    const gravarToken = (token: string) => {
        setToken(token);
        localStorage.setItem("token", token);
    };
    const lerToken = (): boolean => {
        return token === null;
    };
    const apagarToken = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return {
        gravarToken,
        lerToken,
        apagarToken,
    };
}
