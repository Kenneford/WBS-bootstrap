import React from 'react'
import {useState, useEffect} from 'react'

export default function IssuesData() {
    const [issues, setIssues] = useState([])
    const dataUrl = "http://api.github.com/repos/facebook/create-react-app/issues?"
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
  return issues;
}

// Funtion to lookup issues by their number: Linked to SingleIssue.js
// export function getIssue(number){
//     return issues.find(
//         (issue) => issue.number === number
//     )
// }
