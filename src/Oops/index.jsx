import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, OopsText } from './styles';


const Oops = () => {
    const location = useLocation();
    React.useEffect(() => {
        window.document.title = 'minlaxz | Oops!';
    }, []);

    return (
        <Container>
            <OopsText>
                Oops 😯! Well this is embarassing.
            </OopsText>
            <pre>Not weed on this {location.pathname}</pre>
            <Link to="/">Home is safe 🤓</Link>
        </Container>
    );
}

export default Oops;