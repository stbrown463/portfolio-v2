import React from 'react'
import './ProjectShow.css'

const ProjectShow = ({name, img}) => {
	console.log(img);
	return (
		<div className="project-show-container">
			<h2>{name}</h2>
			<img src={img} alt={name}/>
		</div>
	)
}

export default ProjectShow