import { Container } from "../../components/Container";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const DivForm = styled.div`
    width: 494px;
    height: 475px;
    background-color: var(--cinza-claro);
    padding: 0px 97px;
`;

export default function Home() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            const res = await api.post("/login", { email, password });
            auth.gravarToken(res.data.accessToken);

            navigate("/dashboard");
            return;
        } catch (error) {
            console.log(error.message);
            return;
        }
    }

    const handleChangeEmail = (event: FormEvent) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handleChangePassword = (event: FormEvent) => {
        event.preventDefault();
        setPassword(event.target.value);
    };

    return (
        <Container
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <DivForm>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "32px",
                    }}
                >
                    <img src={logo} alt="Logo Cubos Academy" />
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="E-mail"
                        style={{ marginTop: "60px" }}
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={{ marginTop: "16px" }}
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <p style={{ color: "var(--branco)", marginTop: "16px" }}>
                        Não tem cadastro? Clique aqui!
                    </p>
                    <button type="submit" style={{ marginTop: "60px" }}>
                        Login
                    </button>
                </form>
            </DivForm>
        </Container>
    );
}
