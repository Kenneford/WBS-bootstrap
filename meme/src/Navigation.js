import React from 'react'

export default function Navigation({memes, page, pageSize}) {
    if( memes.length < 1){
        return<div>Loading...</div>
    }
    let rows = []
    for(let i = page * pageSize; i <= (page * pageSize + pageSize - 1); i++){
        const element = memes[i]
        rows.push(
        <div key={i} >
            <img src={element.url} alt={element.name} className="memePics"/>
        </div>
        )
    }
  return (
    <div>
        <h1>Navigation</h1>
        {rows}
    </div>
  )
}
