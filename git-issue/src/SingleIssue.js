import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import ContentIntro from './ContentIntro'
import Issues from './Issues'

// Using params to display maore information:
export default function SingleIssue() {
    const params = useParams()
    const singleIssue = Issues(parseInt(params.issueID))
  return (
        <div className='issues-container'>
            <p>Number: {singleIssue.number}</p>
            <p>NodeID: {singleIssue.node_id}</p>
            <p>Body: {singleIssue.body}</p>
        </div>
  )
  
}
