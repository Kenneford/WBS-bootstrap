import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import ContentIntro from './ContentIntro'
import Issues from './Issues'

// Using params to display maore information:
export default function SingleIssue() {
    const params = useParams()
    const singleIssue = Issues(parseInt(params.issueID, 10))
  return (
        <div>
            <p>Title: {singleIssue.title}</p>
            <p>Number: {singleIssue.number}</p>
            <p>NodeID: {singleIssue.node_id}</p>
            <h1>IssueID: {singleIssue.body}</h1>
        </div>
  )
}
