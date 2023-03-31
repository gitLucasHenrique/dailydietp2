import { Container, Logo } from "./styles";

import logoImg from "@assets/logo.png"
import CircleIcon from "phosphor-react-native/lib/typescript/icons/Circle";
import { UserCircle } from "phosphor-react-native";

export function HomeHeader() {
    return (
        <Container>
            <Logo source={logoImg} />
            <UserCircle size={45} />
        </Container>
    )
}