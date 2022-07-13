import React from 'react'

export default function Student() {
    const params = useParams(i)
  return (
    <div>Hello {params.id}</div>
  )
}
