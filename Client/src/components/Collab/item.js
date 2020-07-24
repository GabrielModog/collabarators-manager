import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Item, EditButton, DeleteButton } from './style';

import ConfirmAction from '../ConfirmAction';

const CollabItem = ({
	id,
	name,
	lastname,
	birthday,
	salary,
	role,
	deleteItem,
	pageController,
}) => {
	const [openAction, setOpenAction] = useState(false);
	const history = useHistory();

	const openDeleteAction = () => {
		setOpenAction(prev => !prev);
	};

	const confirmDelete = () => {
		deleteItem(id);
		pageController.back();
	};

	return (
		<Item>
			<ConfirmAction show={openAction}>
				<div className="action-row">
					<h3>Excluir?</h3>
					<DeleteButton type="button" onClick={confirmDelete}>
						SIM
					</DeleteButton>
					<EditButton type="button" onClick={openDeleteAction}>
						NÃO
					</EditButton>
				</div>
			</ConfirmAction>
			<div className="row">
				<div>
					<p>
						<strong>{`${name} ${lastname}`}</strong>
					</p>
					<p>{role.name}</p>
				</div>
				<div>
					<p>{birthday}</p>
					<p>R$ {salary}</p>
				</div>
			</div>

			<div className="tools">
				<EditButton
					type="button"
					onClick={() => history.push(`/colaborador/${id}`)}
				>
					<i className="far fa-edit" />
				</EditButton>

				<DeleteButton type="button" onClick={openDeleteAction}>
					<i className="far fa-trash-alt" />
				</DeleteButton>
			</div>
		</Item>
	);
};

export default CollabItem;
