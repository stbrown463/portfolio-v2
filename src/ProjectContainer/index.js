import React, { Component } from 'react'
import ProjectSelector from '../ProjectSelector'
// import ProjectShow from '../ProjectShow'
import ProjectInfo from '../ProjectInfo'
import './ProjectContainer.css'


class Projects extends Component {
	constructor () {
		super()

		this.state = {
			index: 0,
			projects: [
				{
					name: "BandConnectr",
					url: "https://band-manager-react.herokuapp.com/",
					img: "/project-imgs/bandconnectr.png",
					description: "BandConnectr is a band-facing app for keeping track of a band's shows, and the connections that are made each time they play.  The goal of the app is to aid in the tour booking process",
					tech: "React | React Router | Python | Flask | PeeWee | PostgreSQL | CSS3",
					github: ["https://github.com/stbrown463/band-manager-fe", "https://github.com/stbrown463/band-manager-be"],
					website: "https://band-manager-react.herokuapp.com/"
				},
				{
					name: "BandCrackr",
					url: "https://bandcrackr.herokuapp.com/",
					img: "/project-imgs/bandcrackr.png",
					description: "BandCrackr is a music recommending app for finding artists and suggesting artists based on user created lists",
					tech: "React | Node | Express | MongoDB | Mongoose | LastFM API | CSS3",
					github: ["https://github.com/stbrown463/where-to-start-FE", "https://github.com/stbrown463/where-to-start-BE"],
					website: "https://bandcrackr.herokuapp.com/"
				},
				{
					name: "Earfull",
					url: "https://earfull.herokuapp.com/earfull",
					img: "/project-imgs/earfull.png",
					description: "Earfull is a CRUD app for podcast listeners to create playlists of their favorite shows",
					tech: "Express | Node | EJS | MongoDB | Mongoose | ListenNotes API | jQuery | jQueryUI | CSS3",
					github: ["https://github.com/nathanlamontsmith12/earfull-app"],
					website: "https://earfull.herokuapp.com/earfull"
				},
				{
					name: "Hamm's Passer",
					url: "https://stbrown463.github.io/Hamm-s-Passer/",
					img: "/project-imgs/hamms.png",
					description: "Hamm's Passer is a browser game that runs on the HTML Canvas element. It's based on the arcade classic, Tapper, a game where you play as a bartender that slides beers down a bar to customers. This was my first Javascript project, and was inspired by passing staff beers to coworkers after a long night bartending.",
					tech: "HTML | Canvas | Javascript | CSS3",
					github: ["https://github.com/stbrown463/Hamm-s-Passer"],
					website: "https://stbrown463.github.io/Hamm-s-Passer/"
				}
			]
		}
	}

	setProject = (index, e) => {
		e.preventDefault()
		console.log('setProject was called');
		console.log('this is index', index);
		this.setState({
			index: index
		})
	}

	render () {
		const projects = this.state.projects;
		const project = this.state.projects[this.state.index]
		return (
			<div className="projects-container">
				<ProjectSelector 
					projects={projects}
					setProject={this.setProject} />
				<ProjectInfo 
					name={project.name}
					img={project.img}
					url={project.url}
					description={project.description}
					tech={project.tech}
					github={project.github}
					website={project.website}/>
			</div>
		)
	}
}

// <ProjectShow 
// name={project.name}
// img={project.img}/>

export default Projects


