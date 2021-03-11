import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

const Dashboard = ({ auth, logoutUser }) => {
	const onLogoutClick = (e) => {
		e.preventDefault()
		logoutUser()
	}

	const { user } = auth

	return (
		<div>
			<div>
				<div>
					<h4>
						<b>Hey there,</b> {user.name.split(" ")[0]}
						<p>
							You are logged in <span role="img">👏</span>
						</p>
					</h4>
					<button
						style={{
							width: "150px",
							borderRadius: "3px",
							letterSpacing: "1.5px",
							marginTop: "1rem",
						}}
						onClick={onLogoutClick}
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	)
}

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Dashboard)
