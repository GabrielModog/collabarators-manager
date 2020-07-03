import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { loadCollaborators } from '../../store/collaborators/action';

const Home = () => {
	const [pagination, setPagination] = useState(1);
	const [roles, setRoles] = useState(null);
	const history = useHistory();
	const dispatch = useDispatch();

	const Collaborators = useSelector(state => state.collaborators);

	useEffect(() => {
		dispatch(loadCollaborators(pagination));
	}, [pagination]);

	useEffect(() => {
		const updateList = setInterval(() => {
			dispatch(loadCollaborators(pagination));
		}, 10 * 1000);
		return () => clearInterval(updateList);
	});

	useEffect(() => {
		const loadRoles = async () => {
			try {
				const { data } = await api.get('/roles');
				return setRoles(data);
			} catch (error) {
				return error;
			}
		};

		loadRoles();
	}, []);

	const pageControl = {
		increment: () =>
			Collaborators.length !== 0
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
						{Collaborators && Collaborators.length === 0 && (
							<h1>Nenhum colaborador encontrado...</h1>
						)}
						{Collaborators === undefined || null ? (
							<p>Carregando...</p>
						) : (
							Collaborators.map(collab => (
								<CollabItem key={collab.id}>
									<div className="row">
										<div>
											<p>
												<strong>{`${collab.name} ${collab.lastname}`}</strong>
											</p>
											<p>{collab.role.name}</p>
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
						{pagination && Collaborators && Collaborators.length === 0 ? (
							<>
								<Button type="button" onClick={() => pageControl.back()}>
									Voltar
								</Button>
							</>
						) : (
							<>
								<Button
									type="button"
									disabled={pagination <= 1}
									onClick={() => pageControl.decrement()}
								>
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
