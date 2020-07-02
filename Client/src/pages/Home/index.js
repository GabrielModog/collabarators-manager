import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Container,
	Sides,
	Row,
	Column,
	RegisterCollaborator,
	RegisterRole,
	RoleItem,
	CollabItem,
	RoleSide,
	DeleteButton,
	EditButton,
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
					<RegisterRole type="button" onClick={() => history.push('/cargo')}>
						REGISTRAR CARGO
					</RegisterRole>
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
								<CollabItem key={collab.id}>
									<div className="row">
										<div>
											<p>
												<strong>{`${collab.name} ${collab.lastname}`}</strong>
											</p>
											<p>{collab.role}</p>
										</div>
										<div>
											<p>{collab.birthday}</p>
											<p>R$ {collab.salary}</p>
										</div>
									</div>

									<div className="tools">
										<EditButton
											type="button"
											onClick={() => history.push(`/colaborador/${collab.id}`)}
										>
											<i className="far fa-edit" />
										</EditButton>
										<DeleteButton type="button">
											<i className="far fa-trash-alt" />
										</DeleteButton>
									</div>
								</CollabItem>
							))
						)}
					</ul>
				</Sides>
				<Sides>
					<h3>Cargos</h3>
					<RoleSide>
						<div>
							{roles === null ? (
								<p>Carregando...</p>
							) : (
								roles.map(role => (
									<RoleItem key={role.id} to={`/cargo/${role.id}`}>
										{role.name}
										<i className="far fa-edit" />
									</RoleItem>
								))
							)}
						</div>
					</RoleSide>
				</Sides>
			</Row>
		</Container>
	);
};

export default Home;
