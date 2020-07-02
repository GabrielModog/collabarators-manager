import React, { useRef } from 'react';
import { Form } from '../../components/Form';
import Input from '../../components/Form/Input';

import { Container, Row, SendButton } from '../style';
// import roleSchema from '../../validators/role'

const Roles = () => {
	const formRef = useRef(null);
	return (
		<Container>
			<h1>Criar Cargo</h1>
			<Row>
				<Form ref={formRef}>
					<Row>
						<Input type="text" name="name" placeholder="Nome do cargo" />
						<Input type="text" name="slug" placeholder="Slug do cargo" />
					</Row>
					<Row>
						<Input
							type="text"
							name="description"
							placeholder="Descirção do cargo"
						/>
					</Row>
					<Row>
						<SendButton type="submit">Salvar</SendButton>
					</Row>
				</Form>
			</Row>
		</Container>
	);
};

export default Roles;
