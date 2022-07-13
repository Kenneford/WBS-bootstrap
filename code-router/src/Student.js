import React from 'react'
import { useParams } from 'react-router-dom'

export default function Student() {
  return (
    <div>Hello you {params.id || 'None'}!</div>
  )
}
