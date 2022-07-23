import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import NoInternet from "./NoInternet";
<<<<<<< HEAD
=======
import InputGroup from 'react-bootstrap/InputGroup';
>>>>>>> 34b365eccc191dc5893fc3b4bf47aff737924333
function Signup() {
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
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Confirm Password</InputGroup.Text>
                            <Form.Control
                                placeholder="*******"
                                aria-label="*******"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label={<a href='/terms'>I accept the Terms of Service</a>} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <br></br>
                    <p>Already have an account go to <a href="/login">Login</a></p>
                </Container>
            </NoInternet>
        </>
    );
}


export default Signup;