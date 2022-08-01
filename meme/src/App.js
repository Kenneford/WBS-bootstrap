import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Meme from './Meme';
import Navigation from './Navigation';

function App() {
  const [memeIndex, setMemeIndex] = useState()
  const [memes, setMemes] = useState([])
  const [page, setPage] = useState(0)
  const pageSize = 10
  const [lastPage, setLastPage] = useState(0)
  const [errMessage, setErrMessage] = useState("")

  async function loadMemePicIUrls() {
    let result;
    try{
    const response = await fetch( "https://api.imgflip.com/get_memes" )
    if(!response.ok){
      console.log("Something went wrong")
      return
    }
    result = await response.json()
  } catch(err){
    // console.log(err.message)
    setErrMessage(err.message)
  }
    console.log(result.data)
    const randomIndex = Math.floor(Math.random() * result.data.memes.length)
    console.log(result.data.memes[randomIndex])
    setMemeIndex(randomIndex)
    setMemes(result.data.memes)
    setLastPage(Math.floor((memes.length - 1) / pageSize))
    setErrMessage("")
  }

  useEffect(() => {
    loadMemePicIUrls()
  }, []) 

  function navigatePrevious() {
    if (memeIndex > 0)  {
      setMemeIndex(memeIndex - 1)
    }
  }
  
  function navigateNext() {
    if (memeIndex < memes.length -1)  {
      setMemeIndex(memeIndex + 1)
    }
  }

  return (
    <div className="App">
      <h1>Create a Meme</h1>
      <div className='container'>
        {errMessage ? <div>{errMessage}</div> : <></>}
        <div className='leftPane'>
          <div>
            {page + 1} / {lastPage + 1}
          </div>
          <div className='pageBtn' onClick={()=>{if(page > 0){ setPage(page - 1)}}}>{"<<"}</div>
          <div className='pageBtn' onClick={()=> {
            if(page < lastPage){ setPage(page + 1)}}}>&gt;&gt;</div>
          <Navigation memes={memes} page={page} pageSize={10}/>
        </div>
        <div className='content'>
          <Meme meme={memes[memeIndex]} />
          <button onClick={navigatePrevious}>Previous</button>
          <button onClick={navigateNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
