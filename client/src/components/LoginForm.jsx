/* eslint-disable react/prop-types */
const LoginForm = ({
	handleSubmit,
	handleUsernameChange,
	handlePasswordChange,
	username,
	password,
}) => {
	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					username
					<input
						data-testid='username'
						type='text'
						value={username}
						name='Username'
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					password
					<input
						data-testid='password'
						type='password'
						value={password}
						name='Password'
						onChange={handlePasswordChange}
					/>
				</div>
				<button type='submit'>log in</button>
			</form>
		</div>
	);
};

export default LoginForm;
