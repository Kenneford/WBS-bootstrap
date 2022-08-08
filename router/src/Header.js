import {NavLink} from 'react-router-dom';
function Header(){
    return(
        <header>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/sign-up">SignUp</NavLink>
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/articles">Contact</NavLink>
        </header>
    )
}
export default Header;