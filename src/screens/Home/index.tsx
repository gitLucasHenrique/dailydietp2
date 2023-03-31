import { HomeHeader } from "@components/HomeHeader";
import { StatisticsBox } from "@components/StatisticsBox";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Container } from "./styles";

export function Home(){
    return (
        <Container>
            <HomeHeader />
            <StatisticsBox />
        </Container>
    )
}
