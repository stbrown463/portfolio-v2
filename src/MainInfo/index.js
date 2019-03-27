import React from 'react'
import './MainInfo.css'

const MainInfo = (props) => {
	return (
    <div className="main-container">
			<div className="info-pic">
				<div className="info">
	        <h1 className="name-main">Sam Brown</h1>
	        <div className="description-container">
	        	<p className="description-main">Chicago based full stack developer with a hunger for knowledge. I’m attracted to environments that foster learning, and embrace being pushed outside of my comfort zone. As a lifelong drummer, I appreciate the value in creativity when applied with proper technique. This principle has been fundamental to my perusal of clean, elegant code. Through both my code and music I hope to build connections and make the world a little more interesting.</p>
	        </div>
	        <div className="logo-main-flex">
	          <a className="social-link" href="https://github.com/stbrown463">GitHub</a> | <a className="social-link"href="https://www.linkedin.com/in/stbrown463/">LinkedIn</a> | <a className="social-link" href="mailto:stbrown463@gmail.com">Email</a><br />
	          <a className="social-link" href="#">Resume</a>
	        </div>
	       </div>
      </div>
    </div>
	)
}

export default MainInfo

// work
// bio
// contact