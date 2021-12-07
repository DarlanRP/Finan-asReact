import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    

`

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #f8f8f8;
    margin-bottom: 5px;

`

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#f8f8f8'}

`