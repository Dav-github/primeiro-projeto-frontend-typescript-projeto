type ReturnAuth = {
    gravarToken: Function;
    lerToken: Function;
    apagarToken: Function;
};

export function useAuth(): ReturnAuth {
    const gravarToken = (token: string) => {
        localStorage.setItem("token", token);
    };
    const lerToken = (): string => {
        // console.log(localStorage.getItem("token"));
        return "lerToken";
    };
    const apagarToken = (): string => {
        // localStorage.removeItem("token");
        return "ApagarToken";
    };

    return {
        gravarToken,
        lerToken,
        apagarToken,
    };
}
