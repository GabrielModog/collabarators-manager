import React from 'react';

const Home = () => {
	return (
		<section>
			<div>
				<button type="button">REGISTRAR FUNCIONÁRIO</button>
				<br />
				<button type="button">REGISTRAR CARGO</button>
			</div>
			<div>
				<h3>Funcionários</h3>
				<ul>
					<li>
						<p>Nome Sobrenome</p>
						<p>Cargo</p>
						<p>00/00/0000</p>
						<p>R$ 5.000,00</p>
					</li>
				</ul>
			</div>
			<div>
				<h3>Cargos</h3>
				<ul>
					<li>Desenvolvedor Junior</li>
					<li>Desenvolvedor Pleno</li>
					<li>Desenvolvedor Senior</li>
					<li>Desenvolvedor Especialista</li>
					<li>Tech Lead</li>
				</ul>
			</div>
		</section>
	);
};

export default Home;
