import React from 'react'
import IssuesData from './IssuesData'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import ContentIntro from './ContentIntro'
import './Issues.css'
import App from './App'

export default function Issues() {
  const issues = IssuesData()
  return (
    <div>
        <div className='issues-cont'>
            {issues.map((issue, index)=>{
            return(
                    
                <div key={index} className="issues-container">
                    <div className="issues-wrap">
                        <i className="fa-regular fa-circle-dot open-dot"></i>
                        <p className='issue-msg'><Link to={`/issues-messages/${issue.id}`} >{issue.title}</Link></p>
                        <p className='date-created'>{issue.created_at}</p>
                        <p className='date-updated'>{issue.updated_at}</p>
                    </div>
                        <p className='issue-info'>#{issue.number} {issue.state}ed {issue.comments} days ago by {issue.user.login}</p>
                    {/* <div>
                        {issue.labels.map((lable, index)=>{
                            return(
                                <p key={index} className='label-links'>
                                    <Link to="/single-issue">{lable.name}</Link>
                                </p>
                            )
                        })}
                    </div> */}
                    {/* <p>{issue.labels.name}</p>
                    <p></p> */}
                </div>
            )
            })}
        </div>
        {/* <Outlet /> */}
    </div>
  )
}
