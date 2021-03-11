import React, { useEffect, useState } from "react"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions"
import classnames from "classnames"

const Register = ({ auth, history, errors: errorProp, registerUser }) => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [password2, setPassword2] = useState("")
	const [errors, setErrors] = useState({})

	useEffect(() => {
		if (auth.isAuthenticated) {
			history.push("/dashboard")
		}
		if (errorProp) {
			console.log(errorProp)
			setErrors(errorProp)
		}
	}, [auth.isAuthenticated, errorProp])

	const handleSubmit = (e) => {
		e.preventDefault()

		const newUser = {
			name,
			email,
			password,
			password2,
		}

		registerUser(newUser, history)
	}

	return (
		<div>
			<div>
				<div>
					<Link to="/"> Back to home</Link>
					<div style={{ paddingLeft: "11.250px" }}>
						<h4>
							<b>Register</b> below
						</h4>
						<p>
							Already have an account? <Link to="/login">Log in</Link>
						</p>
					</div>
					<form noValidate onSubmit={handleSubmit}>
						<div>
							<input
								onChange={(e) => setName(e.target.value)}
								value={name}
								error={errors.name}
								id="name"
								type="text"
								className={classnames("", {
									invalid: errors.name,
								})}
							/>
							<label htmlFor="name">Name</label>
							<span>{errors.name}</span>
						</div>
						<div>
							<input
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								error={errors.email}
								id="email"
								type="email"
								className={classnames("", {
									invalid: errors.email,
								})}
							/>
							<label htmlFor="email">Email</label>
							<span>{errors.email}</span>
						</div>
						<div>
							<input
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								error={errors.password}
								id="password"
								type="password"
								className={classnames("", {
									invalid: errors.password,
								})}
							/>
							<label htmlFor="password">Password</label>
							<span>{errors.password}</span>
						</div>
						<div>
							<input
								onChange={(e) => setPassword2(e.target.value)}
								value={password2}
								error={errors.password2}
								id="password2"
								type="password"
								className={classnames("", {
									invalid: errors.password2,
								})}
							/>
							<label htmlFor="password2">Confirm Password</label>
							<span>{errors.password2}</span>
						</div>
						<div style={{ paddingLeft: "11.250px" }}>
							<button
								style={{
									width: "150px",
									borderRadius: "3px",
									letterSpacing: "1.5px",
									marginTop: "1rem",
								}}
								type="submit"
							>
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register))
