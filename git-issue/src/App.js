
import './App.css';
import {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer';
import ContentIntro from './ContentIntro';
import {Link} from 'react-router-dom'

function App() {
    const [issues, setIssues] = useState([])
    const dataUrl = "http://api.github.com/repos/facebook/create-react-app/issues"
    useEffect(()=>{
        const issuesData = async () =>{
        const response = await fetch(dataUrl)
            if(response.ok){
                const jsonIssues = await response.json()
                console.log(jsonIssues)
                setIssues(jsonIssues)
            }
        }
        issuesData()
    }, [])
    useEffect(()=>{
        if(!issues){
            return (
                <div>
                    Loading...
                </div>
            )
          }
    })
  return (
    <div className="App">
        <Header />
        <ContentIntro />
        <div className='issues-cont'>
            {issues.map((issue, index)=>{
            return(
                    
                <div key={index} className="issues-wrap">
                    <p>{issue.title}</p>
                </div>
            )
            })}
        </div>
        <Footer />
    </div>
  );
}

export default App;
