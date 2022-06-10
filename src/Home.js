import Button from "react-bootstrap/Button";
import "./Home.css";
function Home() {
    return (
        <>
            <div id="intro">
                <div className="transbox">
                    <h1 className="title">A Re-defined Chat focused on privacy</h1>
                    <i className="bi bi-lock-fill"></i>
                    <br></br>
                    <Button variant="primary">Try the Chat</Button>
                </div>
            </div>
            <div id="absec">
                <div className="transbox">
                    <h1 className="title">About Us</h1>
                    <br></br>
                    <Button variant="primary">Contact</Button>
                </div>
            </div>
        </>
    );
}


export default Home;