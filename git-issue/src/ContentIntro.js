import React from 'react'
import './ContentIntro.css'

export default function ContentIntro() {
  return (
    <div>
        <div className='intro-1'>
            <div className='intr-1-top'>
                <p>👋 Want to contribute to facebook/create-react-app?</p>
                <div className='dismiss-cont'>
                    <p className='dismiss-p'>Dismiss</p>
                    <i class="fa-solid fa-sort-down dismiss-down"></i>
                </div>
            </div>
            <p>If you have a bug or an idea, read the <span>contributing guidelines</span> before opening an issue.</p>
            <p>If you're ready to tackle some open issues, <span>we've collected some good first issues for you</span>.</p>
        </div>
        <div className='intro-2'>
            <div className='intro-2-left'>
                <p>Help, npm audit says I have a vulnerability in react-<br/>scripts!</p>
                <p className='small-fonts'>#11174 opened on Jul 2, 2021 by gaearon</p>
                <p className='small-fonts'>
                    <i className="fa-regular fa-circle-dot open-dot"></i>Open 
                    <i class="fa-regular fa-message"></i>71
                </p>
            </div>
            <div className='intro-2-right'>
                <p>Error when using new 'react-jsx' TypeScript <br/>transform</p>
                <p className='small-fonts'>#10144 by dcsan was closed on Nov 25, 2020</p>
                <p className='small-fonts'>
                    <i class="fa-regular fa-circle-check"></i>Closed 
                    <i class="fa-regular fa-message"></i>28
                </p>
            </div>
        </div>
        <div className='intro-3'>
            <div className='filter-cont'>
                <div className='filter'>
                    <p>Filter</p> 
                    <i class="fa-solid fa-sort-down filter-down"></i>
                </div>
                <i className="fa-solid fa-magnifying-glass" id="search"></i>
                <input type="text" placeholder="is:issue is:open" id='filter-input'/>
            </div>
            <div className='lab-mile-cont'>
                <div className='lables'>
                <i class="fa-regular fa-window-restore"></i>
                    <p>Lables</p>
                    <p className='rates'>32</p>
                </div>
                <div className='milestones'>
                <i class="fa-regular fa-gem"></i>
                    <p>Milestones</p>
                    <p className='rates'>4</p>
                </div>
                <button className='new-issue'>New Issue</button>
            </div>
        </div>
    </div>
  )
}
