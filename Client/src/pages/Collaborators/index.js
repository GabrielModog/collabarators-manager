import React from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Form/Input';
import { Button } from '../../components/Form';
import { Container, Column, Row } from '../style';

const Collaborators = () => {
	const onSubmission = data => {
		console.log(data);
	};

	return (
		<Container>
			<h1>Registrar Colaborador</h1>
			<Form onSubmit={onSubmission}>
				<Column>
					<Row>
						<Input name="name" type="text" placeholder="Nome" />
						<Input name="lastname" type="text" placeholder="Sobrenome" />
						<Input
							name="birthday"
							type="text"
							placeholder="Data de nascimento"
						/>
					</Row>
					<Row>
						<Input name="role" type="text" placeholder="Cargo" />

						<Input name="salary" type="text" placeholder="Salário" />
					</Row>
					<Row>
						<Button type="submit">Enviar</Button>
					</Row>
				</Column>
			</Form>
		</Container>
	);
};

export default Collaborators;
