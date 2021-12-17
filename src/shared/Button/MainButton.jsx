import arrow from "../../gif/arrow.gif";
import "./button.scss";


export default function MainButton(props) {
    return (
        <button className="main__button">{props.name}<img src={arrow} className="browse-apps" alt="browse-apps"></img></button>
    )
    
};
