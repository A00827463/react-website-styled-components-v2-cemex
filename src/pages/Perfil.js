import React, {useState} from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import { Container } from "../globalStyles";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Perfil = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const refreshPage = () => {
    window.location.reload();
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
      refreshPage();
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Container>
      <Container>
        {/* <Card border="primary">
          <Card.Header as="h5">Personal</Card.Header>
          <Card.Body>
            <Card.Title>Username</Card.Title>
            <Card.Text>¿Quieres cambiar tu username?</Card.Text>
            <Button variant="primary">Cambiar</Button>
          </Card.Body>
        </Card>
        <br/>
        <Card border="warning">
          <Card.Header as="h5">Seguridad</Card.Header>
          <Card.Body>
            <Card.Title>Contraseña</Card.Title>
            <Card.Text>¿Quieres cambiar tu Contraseña?</Card.Text>
            <Button variant="primary">Cambiar</Button>
          </Card.Body>
        </Card>
        <br/>
        <Card border="danger">
          <Card.Header as="h5">Cerrar sesion</Card.Header>
          <Card.Body>
            <Card.Title>Cerrar sesion</Card.Title>
            <Card.Text>¿Seguro que quieres saltir?</Card.Text>
            <Button variant="primary">Salir</Button>
          </Card.Body>
        </Card> */}

        <CardDeck>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Personal</Card.Title>
              <Card.Text>¿Quieres cambiar tu username?</Card.Text>
              <Button variant="primary">Cambiar</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Seguridad</Card.Title>
              <Card.Text>¿Quieres cambiar tu contraseña?</Card.Text>
              <Button variant="primary">Cambiar</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Cerrar Sesion</Card.Title>
              <Card.Text>¿Seguro que quieres saltir?</Card.Text>
              <Button variant="primary">Salir</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>

        <Button onClick={handleLogout}>
          Log Out
        </Button>
      </Container>
    </Container>
  );
};

export default Perfil;
