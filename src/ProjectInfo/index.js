import React from 'react'
import './ProjectInfo.css'

const ProjectInfo = ({url, description, tech, github, website}) => {

	const githubList = github.map((link, i) => {
		return (
		<div>
			<a href={github[i]} key={i}>Github</a><br />
		</div>
		)
	})

	return (
		<div className="project-info-container">
			<a href={url}>Website</a>
			{githubList}
			<p>{description}</p>
		</div>
	)
}

export default ProjectInfo