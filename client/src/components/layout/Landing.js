import React from "react"
import { Link } from "react-router-dom"

const Landing = () => {
	return (
		<div>
			<h4>MERN boilerplate</h4>
			<br />
			<div>
				<Link
					to="/register"
					style={{
						width: "140px",
						borderRadius: "3px",
						letterSpacing: "1.5px",
					}}
				>
					Register
				</Link>
			</div>
			<div>
				<Link
					to="/login"
					style={{
						width: "140px",
						borderRadius: "3px",
						letterSpacing: "1.5px",
					}}
				>
					Log In
				</Link>
			</div>
		</div>
	)
}

export default Landing
