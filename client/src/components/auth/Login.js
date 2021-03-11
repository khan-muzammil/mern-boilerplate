import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loginUser } from "../../actions/authActions"
import classnames from "classnames"

const Login = ({ history, auth, errors: errorProp, loginUser }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState("")

	useEffect(() => {
		if (auth.isAuthenticated) {
			history.push("/dashboard")
		}
		if (errorProp) {
			setErrors(errorProp)
		}
	}, [auth.isAuthenticated, errorProp])

	const handleSubmit = (e) => {
		e.preventDefault()

		const userData = { email, password }

		loginUser(userData)
	}

	return (
		<div>
			<div style={{ marginTop: "4rem" }}>
				<div>
					<Link to="/">Back to home</Link>
					<div style={{ paddingLeft: "11.250px" }}>
						<h4>
							<b>Login</b> below
						</h4>
						<p>
							Don't have an account? <Link to="/register">Register</Link>
						</p>
					</div>
					<form noValidate onSubmit={handleSubmit}>
						<div>
							<input
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								error={errors.email}
								id="email"
								type="email"
								className={classnames("", {
									invalid: errors.email || errors.emailnotfound,
								})}
							/>
							<label htmlFor="email">Email</label>
							<span>
								{errors.email}
								{errors.emailnotfound}
							</span>
						</div>
						<div>
							<input
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								error={errors.password}
								id="password"
								type="password"
								className={classnames("", {
									invalid: errors.password || errors.passwordincorrect,
								})}
							/>
							<label htmlFor="password">Password</label>
							<span>
								{errors.password}
								{errors.passwordincorrect}
							</span>
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
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
})

export default connect(mapStateToProps, { loginUser })(Login)
