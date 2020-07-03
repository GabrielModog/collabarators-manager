/* eslint-disable react-hooks/exhaustive-deps */
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

import Collab from '../../components/Collab';

import { loadCollaborators } from '../../store/collaborators/action';
import { loadRoles } from '../../store/roles/action';

const Home = () => {
	const [pagination, setPagination] = useState(1);
	const history = useHistory();
	const dispatch = useDispatch();

	const CollaboratorsList = useSelector(
		state => state.collaborators.collaborators
	);
	const RolesList = useSelector(state => state.roles.roles);

	useEffect(() => {
		dispatch(loadCollaborators(pagination));
	}, [pagination]);

	useEffect(() => {
		dispatch(loadRoles());
	}, []);

	useEffect(() => {
		const updateList = setInterval(() => {
			dispatch(loadCollaborators(pagination));
		}, 10 * 1000);
		return () => clearInterval(updateList);
	});

	const pageControl = {
		increment: () =>
			CollaboratorsList.length !== 0
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
					<Collab
						list={CollaboratorsList}
						pages={pagination}
						pageController={pageControl}
					/>
				</Sides>
				<Sides>
					<h3>Cargos</h3>
					<RoleSide>
						<div>
							{RolesList === undefined || null ? (
								<p>Carregando...</p>
							) : (
								RolesList.map(role => (
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
