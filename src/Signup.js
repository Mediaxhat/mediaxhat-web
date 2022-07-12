import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import NoInternet from "./NoInternet";
function Signup() {
    return (
        <>
            <NoInternet>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password:</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" required />
                        </Form.Group>

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