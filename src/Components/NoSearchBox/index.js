import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function NoSearchBox({ onClick, title, btnLabel, linkLabel, linkTarget }) {
    return (
        <Container>
            <h2>{title}</h2>
            {btnLabel ? <button onClick={onClick}>{btnLabel}</button> : null}    
            {linkLabel ? <Link to={linkTarget}>{linkLabel}</Link> : null}        
        </Container>
    );
}

export default NoSearchBox;