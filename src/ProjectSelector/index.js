import React from 'react'
import './ProjectSelector.css'

const ProjectSelector = ({projects, setProject}) => {
	return (

			<div className="project-selector-inner">
				{projects.map((p, i) => <button key={i} onClick={setProject.bind(null, i)}>{p.name}</button>)}
			</div>

	)
}

export default ProjectSelector