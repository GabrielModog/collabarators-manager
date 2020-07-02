import React from 'react';

const Login = () => {
	return (
		<section>
			<h1>Login</h1>
			<form>
				<input type="text" placeholder="Usuário" />

				<input type="password" placeholder="Senha" />

				<button type="submit">Entrar</button>
			</form>
		</section>
	);
};

export default Login;
