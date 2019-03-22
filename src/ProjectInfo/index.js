import React from 'react'
import './ProjectInfo.css'

const ProjectInfo = ({name, img, url, description, tech, github, website}) => {

	const githubList = github.map((link, i) => {
		return (
		<span key={i}>
			<a href={github[i]} key={i}>Github {i === 0 ? "Frontend " : "Backend " }</a>{github.length > 1 && i === 0 ? " | " : null}
		</span>
		)
	})

	return (
		<div className="project-info-container">
			<h2 className="project-name">{name}</h2>
			<a href={url}>Deployment</a><br />
			{githubList}<br />
			<div className="description-container">
				<p>{tech}</p>
				<p>{description}</p>
			</div>
			<img src={img} alt={name} />
		</div>
	)
}

export default ProjectInfo