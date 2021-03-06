import React, { Component } from 'react'
import './Navigation.css'

class Navigation extends Component {
	render () {
		return (
			<div className="nav-container">
				<div className="flex-left">
					<p>Sam Brown | Full Stack Developer</p>
				</div>
				<div className="flex-right">
					<ul>
						<a href="#about"><h4><li className="list-item">About</li></h4></a>  
					</ul>
					<ul>
						<a href="#skills"><h4><li className="list-item">Skills</li></h4></a>  
					</ul>
					<ul>
						<a href="#projects"><h4><li className="list-item">Projects</li></h4></a>  
					</ul>
					<ul>
						<a href="#experience"><h4><li className="list-item">Experience</li></h4></a>  
					</ul>
				</div>
			</div>
		)
	}
}

export default Navigation
// <ul>
// 	<a href="#education"><h4><li className="list-item">Education</li></h4></a>  
// </ul>