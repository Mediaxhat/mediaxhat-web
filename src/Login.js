import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from "react-bootstrap";
import NoInternet from "./NoInternet";
<<<<<<< HEAD
=======
import Button from "react-bootstrap/Button";

>>>>>>> 34b365eccc191dc5893fc3b4bf47aff737924333
function Login() {
    return (
        <>
            <NoInternet>
                <Container>
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                            <Form.Control
                                placeholder="example@example.com"
                                aria-label="example@example.com"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                            <Form.Control
                                placeholder="*******"
                                aria-label="*******"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <br></br>
                    <p>Don't have an account go to <a href="/signup">Signup</a></p>
                </Container>
            </NoInternet>
        </>
    );
}


export default Login;