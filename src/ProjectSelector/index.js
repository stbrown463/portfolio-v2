import React from 'react'
import './ProjectSelector.css'

const ProjectSelector = ({projects}) => {
	return (
		<div className="project-selector-container">
			{projects.map((p, i) => <button>{p.name}</button>)}
		</div>
	)
}

export default ProjectSelector