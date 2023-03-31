import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_3}
`
export const LoadIndicator = styled.ActivityIndicator`
    color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`