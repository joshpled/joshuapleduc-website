//bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function TopBar() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Joshua Perez Leduc</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
