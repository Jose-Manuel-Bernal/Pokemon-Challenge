import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { nameState } from "../state/slices/nameLogSlice";
import { setLogIn } from "../state/slices/nameLogSlice";


type navBarProps = {
    user: nameState
}

const NavigationBar: React.FC<navBarProps> = ( {user} ) => {

  const dispatch = useDispatch();

  const logOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    let logOutUser: nameState = {
        name: "",
        logged: false
    }
    dispatch(setLogIn(logOutUser))
  }
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/pokedex">
                            Pokedex
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" onClick={logOut}>
                            Logout
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Brand> {user.name} </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar