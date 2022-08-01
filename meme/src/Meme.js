import React, {useState, useEffect} from 'react'

function Meme({meme}) {
    const [text1, setText1] = useState()
    const [text2, setText2] = useState()
    
    const inputMeme1 = (e)=>{
        setText1(e.target.value)
    }
    const inputMeme2 = (e)=>{
        setText2(e.target.value)
    }
    // useEffect(()=>{
    //     setText("")
    // }, [])
    if (!meme) {
        return <div>Loading ...</div>
    }

    return (
        // style={{backgroundImage: `url("${meme.url}")`, width: `${meme.width}px`, height: `${meme.height}px`}}
        <div>
            <div style={{backgroundImage: `url("${meme.url}")`}} 
            className="bgImage" >
                <p className="memeTitle">{meme.name}</p>
                <div className='memeTexts'>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
            <input type="text" value={text1}
             onChange={inputMeme1}/>
            <input type="text" value={text2}
             onChange={inputMeme2}/>
            {/* <button >Previous</button>
            <button >Next</button> */}
        </div>
    )

}

export default Meme