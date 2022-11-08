import style from "./style.module.css"
import logo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"

function Botton(props){
    return(
        <div className={style.upBackground}>

            <nav className={style.navbar}>
            <img src={logo} alt="logo" />
            <img src={menu} alt="menu" />

            </nav>

            <h1 className={style.h1}>Say hello to ReactJS</h1>
            <p className={style.p}>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button className={style.btn} >Awesome!</button>

        </div>
    )

}
export default Botton;
