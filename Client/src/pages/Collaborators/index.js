import React from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Form/Input';
import Container from '../style';

const Collaborators = () => {
	const onSubmission = data => {
		console.log(data);
	};

	return (
		<Container>
			<h1>Registrar</h1>
			<Form onSubmit={onSubmission}>
				<Input name="name" type="text" placeholder="Nome..." />
				<Input name="lastname" type="text" placeholder="Sobrenome..." />
				<button type="submit">Enviar</button>
			</Form>
		</Container>
	);
};

export default Collaborators;
