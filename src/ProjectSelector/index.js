import React from 'react'

const ProjectSelector = ({projects}) => {
	return (
		<div>
			{projects.map((p, i) => <button>{p.name}</button>)}
		</div>
	)
}

export default ProjectSelector