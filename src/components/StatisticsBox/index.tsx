import { Text } from "react-native";
import { Container, GoToButton, GoToIcon, StatisticsDescription, StatisticsText } from "./styles";

type Props = {
    showGoToButton?: boolean
}

export function StatisticsBox({showGoToButton = true}: Props){
    function handleGoToPress(){
        console.log('pressed go to');
    }

    return (
        <Container>
            {
                showGoToButton &&
                <GoToButton onPress={handleGoToPress}>
                    <GoToIcon />
                </GoToButton>
            }
            <StatisticsText>
                90,86%
            </StatisticsText>
            <StatisticsDescription>
                das refeições dentro da dieta
            </StatisticsDescription>
        </Container>
    )
}