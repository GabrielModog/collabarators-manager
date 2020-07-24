import React from 'react';
import { useDispatch } from 'react-redux';

import { removeCollaborator } from '../../store/collaborators/action';

import CollabItem from './item';
import { Button, Pagination } from './style.js';

const Collab = ({ list, pages, pageController }) => {
	const dispatch = useDispatch();

	const deleteItem = id => {
		dispatch(removeCollaborator(id));
	};

	return (
		<div>
			<div>
				{list && list.length === 0 && <h1>Nenhum colaborador encontrado...</h1>}
				{list === undefined || null ? (
					<p>Carregando...</p>
				) : (
					list.map(collab => (
						<CollabItem
							key={collab.id}
							id={collab.id}
							name={collab.name}
							lastname={collab.lastname}
							birthday={collab.birthday}
							salary={collab.salary}
							role={collab.role}
							deleteItem={deleteItem}
							pageController={pageController}
						/>
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
