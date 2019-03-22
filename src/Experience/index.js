import React, { Component } from 'react'
import './Experience.css'

class Experience extends Component {
	render () {
		return (
			<div className="experience-conatiner">
				<div className="experience-row-1">
					<div className="experience-card ga">
						<span className="job-card-header">
							<h2 className="job-card-left">General Assembly</h2>
							<p className="job-card-right">Dec 2018 - Mar 2019</p>
						</span>
						<h3>Web Development Fellow</h3>
						<ul>
							<li>Built full stack, modular web apps in HTML, CSS, Javascript, Python, along with many associated libraries and frameworks</li>
							<li>Designed and built apps following Agile Workflow, employing user stories, wireframing, and scrum meetings to stay organized</li>
							<li>Utilized version control with git and github to collaborate with partners across the United States</li>
						</ul>
					</div>
					<img src="/project-imgs/ga-sq.jpg" alt="ga" className="logo"/>
				</div>
				<div className="experience-row-2">
					<img src="/project-imgs/radler-sq.jpeg" alt="radler" className="logo"/>
					<div className="experience-card radler">
						<span className="job-card-header">
							<h2 className="job-card-left">The Radler</h2>
							<p className="job-card-right">July 2015 - Dec 2018</p>
						</span>
						<h3>Lead Bartender / Beverage Director</h3>
						<ul>
							<li>Curated a beverage menu including 24 rotating drafts, wines, package beers, unique cocktails, and NA beverages</li>
							<li>Dropped beverage costs from 31% to 24% by analyzing sales and reducing overhead</li>
							<li>Trained staff with classes on beer, spirits, and cocktails</li>
						</ul>
					</div>
				</div>
			</div>

		)
	}
}

export default Experience

// The Radler  // past tense  -- focus on the unique	Chicago, IL 
// Lead Bartender and Buyer	July 2015 – Dec 2018
// Provide bar patrons with superior service and an enjoyable, memorable experience
// Curate a beverage menu including 24 rotating drafts, wines, package beers, unique cocktails, and NA beverages
// Drop beverage costs from 31% to 24% by analyzing sales and reducing overhead
// Train staff with classes on beer, spirits, and cocktails	