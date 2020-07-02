import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Container,
	Sides,
	Row,
	Column,
	RegisterCollaborator,
	RegisterRole,
} from '../style';
import api from '../../services';

const Home = () => {
	const [collaborators, setCollaborators] = useState(null);
	const [roles, setRoles] = useState(null);
	const history = useHistory();

	useEffect(() => {
		const loadCollaborators = async () => {
			try {
				const { data } = await api.get('/collaborators');
				return setCollaborators(data);
			} catch (error) {
				return error;
			}
		};

		const loadRoles = async () => {
			try {
				const { data } = await api.get('/roles');
				return setRoles(data);
			} catch (error) {
				return error;
			}
		};

		loadCollaborators();
		loadRoles();
	}, []);

	return (
		<Container>
			<Column alignEnd>
				<Row>
					<RegisterCollaborator
						type="button"
						onClick={() => history.push('/colaborador')}
					>
						REGISTRAR FUNCIONÁRIO
					</RegisterCollaborator>
					<RegisterRole type="button">REGISTRAR CARGO</RegisterRole>
				</Row>
			</Column>
			<Row>
				<Sides>
					<h3>Funcionários</h3>
					<ul>
						{collaborators === null ? (
							<p>Carregando...</p>
						) : (
							collaborators.map(collab => (
								<li key={collab.id}>
									<p>{`${collab.name} ${collab.lastname}`}</p>
									<p>{collab.role}</p>
									<p>{collab.birthday}</p>
									<p>R$ {collab.salary}</p>
								</li>
							))
						)}
					</ul>
				</Sides>
				<Sides>
					<h3>Cargos</h3>
					<ul>
						{roles === null ? (
							<p>Carregando...</p>
						) : (
							roles.map(role => <li key={role.id}>{role.name}</li>)
						)}
					</ul>
				</Sides>
			</Row>
		</Container>
	);
};

export default Home;
