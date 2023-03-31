import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 20px;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`