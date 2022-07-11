import Button from "react-bootstrap/Button";
import "./Home.css";
import "./NoInternet";
import NoInternet from "./NoInternet";
function Home() {
    return (
        <>
            <NoInternet>
                <div id="intro">
                    <div className="transbox">
                        <h1 className="title">A Re-defined Chat focused on privacy<span id="icon"></span></h1>
                        <i className="bi bi-lock-fill"></i>
                        <br></br>
                        <Button variant="primary">Try the Chat</Button>
                    </div>
                </div>
                <div id="opensc">
                    <div className="transbox">
                        <h1 className="title">Open source<br></br><span id="icon"><i className="bi bi-file-earmark-code-fill"></i></span></h1>
                        <Button variant="primary">View code</Button>
                    </div>
                </div>
                <div id="about">
                    <h1 className="title">About</h1>
                    <p> Mediaxhat is devloped by Akash k</p>
                    <p> For inquires please email: akash.kallumkal@gmail.com </p>
                </div>
            </NoInternet>
        </>
    );
}


export default Home;