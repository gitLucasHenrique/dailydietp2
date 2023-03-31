import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}
`;


