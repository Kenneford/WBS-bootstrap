import React from 'react'
import './Header.css'
import logo from './my-pic.jpg'
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div className='userHeader'>
            <div className='header-left'>
            <i className="fa-brands fa-github new-git"></i>
                <div className='header-search'>
                    <input type="text" placeholder="Search or jump to..." />
                    <i className="fa-solid fa-square-full"></i>
                    <i className="fa-regular fa-slash-forward">/</i>
                </div>
                <div className='aTags'>
                    <a href="#">Pull request</a>
                    <a href="#">Issues</a>
                    <a href="#">Marhetplace</a>
                    <a href="#">Explore</a>
                </div>
            </div>
            <div className='header-right'>
                <i className="fa-regular fa-bell"></i>
                <p>
                    <i className="fa-solid fa-plus"></i> 
                    <i className="fa-solid fa-sort-down down-key"></i>
                </p>
                <div className='user'>
                    <img src={logo} alt='' width="30px" height="30px" />
                    <i className="fa-solid fa-sort-down user-arrow"></i>
                </div>
            </div>
        </div>
        <div className='repositoryHeader'>
            <div className='repoTop'>
                <div className='repoTop-left'>
                    <i className="fa-regular fa-book-blank"></i>
                    <p className='facebook'>facebook</p> 
                    <p>/</p>
                    <p className='react-app'>create-react-app</p>
                    <button id='public-btn'>Public</button>
                </div>
                <div className='repoTop-right'>
                    <div className='sponsor'>
                        <i className="fa-regular fa-heart"></i>
                        <p>Sponsor</p>
                    </div>
                    <div className='watch'>
                        <i className="fa-regular fa-eye"></i>
                        <p>Watch</p>
                        <p className='rates'>1.9k</p>
                        <i className="fa-solid fa-sort-down"></i>
                    </div>
                    <div className='fork'>
                        <div className='fork-wrap'>
                            <i className="fa-regular fa-code-fork"></i>
                            <p>Fork</p>
                            <p className='rates'>24.9k</p>
                        </div>
                        <div className='div-downKey'>
                            <i className="fa-solid fa-sort-down div-down"></i>
                        </div>
                    </div>
                    <div className='star'>
                        <div className='star-wrap'>
                            <i className="fa-regular fa-star"></i>
                            <p>Star</p>
                            <p className='rates'>96.1k</p>
                        </div>
                        <div className='div-downKey'>
                            <i className="fa-solid fa-sort-down div-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='repoDown'>
                <div className='code'>
                    <i className="fa-regular fa-code"></i>
                    <p>Code</p>
                </div>
                <div className='issues'>
                    <i className="fa-regular fa-circle-dot"></i>
                    <p className='issues-link'><Link to="/issues-messages">Issues</Link></p>
                    <p className='rates'>1.4k</p>
                    <p className='line'></p>
                </div>
                <div className='pull-request'>
                <i className="fa-regular fa-code-pull-request-draft"></i>
                    <p>Pull request</p>
                    <p className='rates'>350</p>
                </div>
                <div className='discussions'>
                    <i className="fa-regular fa-comments"></i>
                    <p>Discussions</p>
                </div>
                <div className='action'>
                    <i className="fa-regular fa-circle-play"></i>
                    <p>Actions</p>
                </div>
                <div className='project'>
                    <i className="fa-regular fa-chart-network"></i>
                    <p>Project</p>
                </div>
                <div className='security'>
                    <i className="fa-regular fa-shield-exclamation"></i>
                    <p>Security</p>
                </div>
                <div className='insights'>
                    <i className="fa-regular fa-chart-line"></i>
                    <p>Insights</p>
                </div>
            </div>
        </div>
    </div>
  )
}
