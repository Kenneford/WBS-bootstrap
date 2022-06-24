import Content from './Content';
import SideBar from './SideBar';
import Footer from './Footer';
import './Header.css';

const blogs = [
    {
    title: 'My First Travel',
    amount: 94.12,
    country: 'Ghana'
},
    {
    title: 'My Second Travel',
    amount: 94.12,
    country: 'Brazil'
},
    {
    title: 'My Third Travel',
    amount: 94.12,
    country: 'Brazil'
}
]
function Header(){
    const blogTitle = 'My Travels'
    return (
        <>
            <header>
                    {blogTitle}
            </header>
            <main>
                <Content blogs={blogs}/>
                <SideBar/>
            </main>
            <Footer/>
        </>
    )
}
export default Header;