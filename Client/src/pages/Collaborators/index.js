import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '../../components/Form';
import Input from '../../components/Form/Input';
import InputMask from '../../components/Form/InputMask';
import Select from '../../components/Form/Select';

import { Container, Column, Row, SendButton } from '../style';

import collaboratorSchema from '../../validators/collaborator';

import api from '../../services';

const Collaborators = () => {
	const [roles, setRoles] = useState([]);
	const history = useHistory();
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
			return history.push('/');
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

	useEffect(() => {
		const loadRoles = async () => {
			try {
				const { data } = await api.get('/roles');
				const rolesOption = data.map(item => ({
					value: item.slug,
					label: item.name,
				}));
				return setRoles(rolesOption);
			} catch (err) {
				return err;
			}
		};

		loadRoles();
	}, []);

	return (
		<Container>
			<h1>Registrar Colaborador</h1>
			<Row>
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
							<Input name="salary" type="text" placeholder="Salário" />
							<Select
								name="role"
								placeholder="Selecione um cargo"
								options={roles}
							/>
						</Row>
						<Row>
							<SendButton type="submit">Enviar</SendButton>
						</Row>
					</Column>
				</Form>
			</Row>
		</Container>
	);
};

export default Collaborators;
