import React from 'react';
import { Container } from './styles';

function NoSearchBox({ onClick }) {
    return (
        <Container>
            <h2>You haven't searched for anything yet...</h2>
            <button onClick={onClick}>Search a movie or tv show now!</button>
        </Container>
    );
}

export default NoSearchBox;