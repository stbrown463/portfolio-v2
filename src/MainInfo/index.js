import React from 'react'
import './MainInfo.css'

const MainInfo = (props) => {
	return (
    <div className="main-container">
			<div className="info-pic">
				<div className="info">
	        <h1 className="name-main">Sam Brown</h1>
	        <div className="description-container">
	        	<p className="description-main">I'm a Chicago based, full stack web developer eager to work in a demanding, creative enviornment that reflects my passion for learning and problem solving.</p>
	        </div>
	        <div className="logo-main-flex">
	          <a className="social-link" href="https://github.com/stbrown463">GitHub</a> | <a className="social-link"href="https://www.linkedin.com/in/stbrown463/">LinkedIn</a> | <a className="social-link" href="mailto:stbrown463@gmail.com">Email</a>
	        </div>
	        <p className="phone-main">(312) 208-5611</p>
	       </div>
      </div>
    </div>
	)
}

export default MainInfo