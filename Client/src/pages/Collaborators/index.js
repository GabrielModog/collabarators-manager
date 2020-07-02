import React, { useRef } from 'react';
import styled from 'styled-components';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../../components/Form/Input';
import InputMask from '../../components/Form/InputMask';
import { Button } from '../../components/Form';

import { Container, Column, Row } from '../style';
import { Primary, Grey } from '../../styles/palette';
import collaboratorSchema from '../../validators/collaborator';

import api from '../../services';

const SendButton = styled(Button)`
	color: ${Grey[0]};
	background-color: ${Primary[200]};
	&:hover {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}
	&:focus {
		color: ${Grey[400]};
		background-color: ${Primary[400]};
	}
`;

const Collaborators = () => {
	const formRef = useRef(null);
	const onSubmission = async data => {
		try {
			await collaboratorSchema.validate(data, {
				abortEarly: false,
			});

			const salaryFormat = data.salary.split('').reduce((accum, curr) => {
				if (curr !== ' ') return accum + curr;
				return '';
			}, '');

			const submission = {
				...data,
				salary: salaryFormat,
			};

			api.post('/collaborators', { ...submission });
		} catch (err) {
			const validationErrors = {};
			if (err instanceof Yup.ValidationError) {
				err.inner.forEach(error => {
					validationErrors[error.path] = error.message;
				});
				formRef.current.setErrors(validationErrors);
			}
			return err;
		}
	};

	return (
		<Container>
			<h1>Registrar Colaborador</h1>
			<Form onSubmit={onSubmission} ref={formRef}>
				<Column>
					<Row>
						<Input name="name" type="text" placeholder="Nome" />
						<Input name="lastname" type="text" placeholder="Sobrenome" />
						<InputMask
							mask="99/99/9999"
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
						<SendButton type="submit">Enviar</SendButton>
					</Row>
				</Column>
			</Form>
		</Container>
	);
};

export default Collaborators;
