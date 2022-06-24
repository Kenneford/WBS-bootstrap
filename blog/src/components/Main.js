import Header from './components/Header';
import Content from './components/Content';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import './Main.css';

function Main(){
    return (
        <div>
            <Header/>
            <main>
                <Content />
                <SideBar/>
            </main>
            <Footer/>
        </div>
    )
}
export default Main;