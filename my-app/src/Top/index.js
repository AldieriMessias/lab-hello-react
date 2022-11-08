import style from "./style.module.css"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"


function Top(props) {
    return(
        <div className={style.topPai}>   
            <div clasName={style.topFilho}>
                <img  src = {icon1} alt="foto"/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div clasName={style.topFilho}>
                <img  src = {icon2} alt="foto"/>
                <h3>Components</h3>
                <p>Build encapsuleted components that manage their state.</p>
            </div>  
            <div clasName={style.topFilho}>
                <img  src = {icon3} alt="foto"/>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's.</p>
            </div>  
            <div clasName={style.topFilho}>
                <img  src = {icon4} alt="foto"/>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>     
            
        </div>

    );
}

export default Top;
