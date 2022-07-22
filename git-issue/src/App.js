
import './App.css';
import Header from './Header'
import Footer from './Footer';
import { Outlet, Routes, Route } from 'react-router-dom';
import ContentIntro from './ContentIntro';

function App() {
  return (
    <div className="App">
        <Header />
        <ContentIntro />
        <Outlet />
        <Footer />
        
    </div>
  );
}

export default App;
