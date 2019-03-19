import React, { Component } from 'react'

class Projects extends Component {
	constructor () {
		super()

		this.state = {
			projects: [
				{
					name: "Hamm's Passer",
					url: "",
					img: "",
					description: "",
					tech: "HTML | CSS | Javascript | Canvas",
					github: "",
					website: ""
				},
				{
					name: "Earfull",
					url: "",
					img: "",
					description: "",
					tech: "Express | MongoDB | ",
					github: "",
					website: ""
				},
				{
					name: "BandCrackr",
					url: "",
					img: "",
					description: "",
					tech: "",
					github: "",
					website: ""
				},
				{
					name: "BandConnectr",
					url: "",
					img: "",
					description: "",
					tech: "",
					github: "",
					website: ""
				},

			]
		}
	}
	render () {
		return (
			<div>
				Projects Container
			</div>
		)
	}
}

export default Projects