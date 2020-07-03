import React from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services';

import {
	Button,
	EditButton,
	DeleteButton,
	DeleteButtonConfirmation,
	Pagination,
	CollabItem,
} from './style.js';

const Collab = ({ list, pages, pageController }) => {
	const history = useHistory();

	const deleteItem = async id => {
		try {
			await api.delete(`/collaborators/${id}`);
		} catch (error) {
			return error;
		}
	};

	return (
		<div>
			<div>
				{list && list.length === 0 && <h1>Nenhum colaborador encontrado...</h1>}
				{list === undefined || null ? (
					<p>Carregando...</p>
				) : (
					list.map(collab => (
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

								<DeleteButton
									type="button"
									onClick={() => {
										deleteItem(collab.id);
										pageController.back();
									}}
								>
									<i className="far fa-trash-alt" />
								</DeleteButton>
							</div>
						</CollabItem>
					))
				)}
			</div>
			<Pagination>
				{pages && list && list.length === 0 ? (
					<>
						<Button type="button" onClick={() => pageController.back()}>
							Voltar
						</Button>
					</>
				) : (
					<>
						<Button
							type="button"
							disabled={pages <= 1}
							onClick={() => pageController.decrement()}
						>
							<i className="fas fa-chevron-left" />
						</Button>
						<Button type="button" onClick={() => pageController.increment()}>
							<i className="fas fa-chevron-right" />
						</Button>
					</>
				)}
			</Pagination>
		</div>
	);
};

export default Collab;
