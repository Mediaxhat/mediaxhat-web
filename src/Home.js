import Button from "react-bootstrap/Button";
import "./Home.css";
function Home() {
    return (
        <>
            <div id="intro">
                <div className="transbox">
                    <h1 id="title">A Re-defined Chat focused on privacy</h1>
                    <i className="bi bi-lock-fill"></i>
                    <br></br>
                    <Button variant="primary">Try the Chat</Button>
                </div>
            </div>
            <div id="open">
                <div className="transbox">
                    <h1 id="code">Open source </h1>
                    <i className="bi bi-file-earmark-code-fill"></i>
                    <br></br>
                    <Button variant="primary">View code</Button>
                </div>
            </div>
        </>
    );
}


export default Home;