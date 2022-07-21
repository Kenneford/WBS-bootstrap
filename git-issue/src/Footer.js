import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='pagination'>
            <h4 className='left-angle'><i className="fa-solid fa-angle-left"></i> Previous</h4>
            <p className='page-1'>1</p>
            <p className='p'>2</p>
            <p className='p'>3</p>
            <p className='p'>4</p>
            <p className='p'>5</p>
            <p className='p'>...</p>
            <p className='p'>55</p>
            <p className='p'>56</p>
            <h4 className='right-angle'>Next <i className="fa-solid fa-angle-right"></i></h4>
        </div>
        <div className='tips'>
            <p>
                <i className="fa-regular fa-lightbulb"></i>
                <strong>ProTip!</strong> 
                Notify someone on an issue with a mention, like: @Kenneford.
            </p>
        </div>
        <div className='copy-right'>
            <div className='copy-wrap'>
                <i className="fa-brands fa-github git"></i> 
                <p className='copy-p'>&copy; 2022 GitHub, Inc.</p>
            </div>
            <p>Terms</p>
            <p>Privacy</p>
            <p>security</p>
            <p>Status</p>
            <p>Docs</p>
            <p>Contact GitHub</p>
            <p>Pricing</p>
            <p>API</p>
            <p>Training</p>
            <p>Blog</p>
            <p>About</p>
        </div>
    </div>
  )
}
