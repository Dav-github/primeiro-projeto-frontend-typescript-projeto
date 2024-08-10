import { Container } from "../../components/Container";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const DivForm = styled.div`
    width: 494px;
    height: 475px;
    background-color: var(--cinza-claro);
    padding: 0px 97px;
`;

export default function Home() {
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
                <form action="">
                    <input
                        type="text"
                        placeholder="E-mail"
                        style={{ marginTop: "60px" }}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        style={{ marginTop: "16px" }}
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
