import { Link } from "react-router-dom";
import logo from "../assets/logooggo.png"; 

export default function Header() {
    return(
        <div className="header">
            <img src={logo} alt="Game Logo" className="logo" />
            <div className="headingz">
                <h1>Which Amphoreus Character are You?</h1>
                <h3>From Honkai:Star Rail</h3>
                <h5><i>let's see your fate..</i></h5>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/quiz">Quiz</Link>
            </div>
        </div>
    );
}