import styled from "styled-components";
import {Link as ReactRouterLink} from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(
        ${
            ({src}) => (
                src ? 
                    `../images/misc/${src}.jpg`
                    : 
                    `../images/misc/home-bg.jpg`
            ) 
        }
    ) top left / cover no-repeat;
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display:flex;
    }

    @media (min-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Logo = styled.img`
    height: 120px;
    width: 216px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 170px;
        width: 324px; 
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display:block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color:white;
    border:0;
    font-size:15px;
    border-radius:3px;
    padding: 8px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612
    }
`;