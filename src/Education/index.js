import React, { Component } from 'react'
import './Education.css'

class Education extends Component {
	render () {
		return (
			<div className="education-container">
				<div className="education-row-1">
					<div className="education-card ga">
						<span className="job-card-header">
							<h2 className="job-card-left">General Assembly</h2>
							<p className="job-card-right">Dec 2018 - Mar 2019</p>
						</span>
						<h3>Web Development Immersive</h3>
						<ul>
							<li>Completed (700+ hour) immersive web development course</li>
							<li>Extensive training in the MERN stack and DB development</li>
							<li>Problem soliving... idk</li>
						</ul>
					</div>
					<img src="/project-imgs/ga-sq.jpg" alt="ga" className="logo"/>
				</div>
				<div className="education-row-2">
					<img src="/project-imgs/iu.jpg" alt="radler" className="logo"/>
					<div className="education-card radler">
						<span className="job-card-header">
							<h2 className="job-card-left">Indiana University</h2>
							<p className="job-card-right">August 2009 - Dec 2010</p>
						</span>
						<h3>Physics</h3>
						<ul>
							<li>Coursework Completed towards B.S. in Physics</li>
							<li>stuff</li>
							<li>idk</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Education