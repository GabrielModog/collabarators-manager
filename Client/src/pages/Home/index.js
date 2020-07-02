import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Container,
	Sides,
	Row,
	Column,
	Pagination,
	RegisterCollaborator,
	RegisterRole,
	RoleItem,
	CollabItem,
	RoleSide,
	Button,
	DeleteButton,
	EditButton,
} from '../style';
import api from '../../services';

const Home = () => {
	const [collaborators, setCollaborators] = useState(null);
	const [pagination, setPagination] = useState(1);
	const [roles, setRoles] = useState(null);
	const history = useHistory();

	useEffect(() => {
		const loadCollaborators = async () => {
			try {
				const { data } = await api.get(
					`/collaborators?_page=${pagination}&_limit=3`
				);
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
	}, [pagination]);

	const pageControl = {
		increment: () =>
			collaborators.length !== 0
				? setPagination(prev => prev + 1)
				: setPagination(1),
		decrement: () =>
			pagination >= 1 ? setPagination(prev => prev - 1) : setPagination(1),
		back: () => setPagination(1),
	};

	return (
		<Container>
			<Column alignEnd>
				<Row style={{ margin: '0 0 20px 0' }}>
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
						{collaborators && collaborators.length === 0 && (
							<h1>Nenhum colaborador encontrado...</h1>
						)}
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
					<Pagination>
						{pagination && collaborators && collaborators.length === 0 ? (
							<>
								<Button type="button" onClick={() => pageControl.back()}>
									Voltar
								</Button>
							</>
						) : (
							<>
								<Button type="button" onClick={() => pageControl.decrement()}>
									<i className="fas fa-chevron-left" />
								</Button>
								<Button type="button" onClick={() => pageControl.increment()}>
									<i className="fas fa-chevron-right" />
								</Button>
							</>
						)}
					</Pagination>
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
