import React from 'react';

import { RoleContainer, RoleItem } from './style';

const Roles = ({ list }) => {
	return (
		<RoleContainer>
			<div>
				{list === undefined || null ? (
					<p>Carregando...</p>
				) : (
					list.map(role => (
						<RoleItem key={role.id} to={`/cargo/${role.id}`}>
							{role.name}
							<i className="far fa-edit" />
						</RoleItem>
					))
				)}
			</div>
		</RoleContainer>
	);
};

export default Roles;
