import React from 'react'
import './MainInfo.css'

const MainInfo = (props) => {
	return (
    <div className="main-container">
			<div className="info-pic">
				<div className="info">
	        <h1 className="name-main">Sam Brown</h1>
	        <p className="description-main">I'm a full stack web developer eager to work in a demanding, creative<br /> enviornment that reflects my passion for learning and problem solving.</p>
	        <p className="email-main">Email: stbrown463@gmail.com</p>
	        <p className="phone-main">Phone: (312) 208-5611</p>
	        <p className="location-main">Chicago, IL</p>
	        <div className="logo-main-flex">
	          <a href="https://github.com/stbrown463"><p className="social-link">GitHub</p></a>
	          <a href="https://www.linkedin.com/in/stbrown463/"><p className="social-link">LinkedIn</p></a>
	        </div>
	       </div>
      </div>
      <div className="skills">
				<h2 className="skills-header-main">Skills</h2>
				<hr/>
				<p className="skills-text">JavaScript | React | Express | Node.js | Python | Flask | CSS3 | HTML5 | jQuery | Git | RESTful Routes | MongoDB | SQL | PostgreSQL</p>
      </div>
    </div>
	)
}

export default MainInfo