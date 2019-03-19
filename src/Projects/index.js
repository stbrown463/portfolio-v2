import React, { Component } from 'react'
import ProjectSelector from '../ProjectSelector'
import ProjectShow from '../ProjectShow'
import ProjectInfo from '../ProjectInfo'
import './Projects.css'


class Projects extends Component {
	constructor () {
		super()

		this.state = {
			projects: [
				{
					name: "BandConnectr",
					url: "https://band-manager-react.herokuapp.com/",
					img: "../project-imgs/bandconnectr.png",
					description: "BandConnectr is a band-facing app for keeping track of a band's shows, and the connections that are made each time they play.  The goal of the app is to aid in the tour booking process",
					tech: "Tech Stack: React, React Router, Python, Flask, PeeWee, PostgreSQL, CSS3",
					github: ["https://github.com/stbrown463/band-manager-fe", "https://github.com/stbrown463/band-manager-be"],
					website: "https://band-manager-react.herokuapp.com/"
				},
				{
					name: "BandCrackr",
					url: "https://bandcrackr.herokuapp.com/",
					img: "../project-imgs/bandcrackr.png",
					description: "BandCrackr is a music recommending app for finding artists and suggesting artists based on user created lists",
					tech: "Tech Stack: React, Node, Express, MongoDB, Mongoose, LastFM API, CSS3",
					github: ["https://github.com/stbrown463/where-to-start-FE", "https://github.com/stbrown463/where-to-start-BE"],
					website: "https://bandcrackr.herokuapp.com/"
				},
				{
					name: "Earfull",
					url: "https://earfull.herokuapp.com/earfull",
					img: "../project-imgs/earfull.png",
					description: "Earfull is a CRUD app for podcast listeners to create playlists of their favorite shows",
					tech: "Tech Stack: Express, Node, EJS, MongoDB, Mongoose, ListenNotes API, jQuery, jQueryUI, CSS3",
					github: "https://github.com/nathanlamontsmith12/earfull-app",
					website: "https://earfull.herokuapp.com/earfull"
				},
				{
					name: "Hamm's Passer",
					url: "https://stbrown463.github.io/Hamm-s-Passer/",
					img: "../project-imgs/hamms.png",
					description: "Hamm's Passer is a browser game that runs on the HTML Canvas element. It's based on the classsic Bally Arcade cabinet, Tapper, a game where you play a bartender that slides beers down a bar to customers. As opposed to using draft beers like the original game I chose cans of Hamm's as the beer of choice. Hamm's was the staff beer at the restarurant I worked for several years. Speaking from expericence, Hamm's always tastes better after being slid down a bar.",
					tech: "Tech Stack: HTML, Canvas, Javascript, CSS3",
					github: "https://github.com/stbrown463/Hamm-s-Passer",
					website: "https://stbrown463.github.io/Hamm-s-Passer/"
				}
			]
		}
	}
	render () {
		return (
			<div className="projects-container">
				<ProjectSelector projects={this.state.projects} />
				<ProjectShow />
				<ProjectInfo />
			</div>
		)
	}
}

export default Projects