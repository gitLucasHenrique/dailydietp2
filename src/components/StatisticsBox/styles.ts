import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    border-radius: 10px;
`

export const GoToButton = styled.TouchableOpacity`
`

export const GoToIcon = styled(ArrowUpRight).attrs(
    ({theme}) => ({
        size: 30,
        color: theme.COLORS.GREEN_DARK,
    })
)`
    margin-left: auto;
    margin-top: 5px;
    margin-right: 5px;
`

export const StatisticsText = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    text-align: center;
`

export const StatisticsDescription = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
`