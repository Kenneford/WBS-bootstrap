
import './App.css';
import {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer';
import ContentIntro from './ContentIntro';
import {Link, Routes, Route} from 'react-router-dom'
import SingleIssue from './SingleIssue';

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
        
        <Routes>
            <Route path='/' element={
                <div className='issues-cont'>
                    {issues.map((issue, index)=>{
                    return(
                            
                        <div key={index} className="issues-wrap">
                            <p className='issue-msg'><i className="fa-regular fa-circle-dot open-dot"></i><Link to="/single-issue" >{issue.title}</Link></p>
                            <div>
                                {issue.labels.map((lable, index)=>{
                                    return(
                                        <p key={index} className='label-links'>
                                            <Link to="/single-issue">{lable.name}</Link>
                                        </p>
                                    )
                                })}
                            </div>
                            {/* <p>{issue.labels.name}</p>
                            <p></p> */}
                        </div>
                    )
                    })}
                </div>
            } />
            <Route path="/single-issue" element={<SingleIssue />} exact/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

// return(
//     <div key={index}>
//         <p>
//             <Link to="/single-issue">{lable.name}</Link>
//         </p>
//     <div>
// )