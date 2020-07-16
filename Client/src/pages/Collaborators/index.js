import React, { useRef, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Form } from '../../components/Form';
import Input from '../../components/Form/Input';
import InputMask from '../../components/Form/InputMask';
import Select from '../../components/Form/Select';

import { Container, Column, Row, SendButton } from '../style';

import collaboratorSchema from '../../validators/collaborator';

import { api } from '../../services';

const Collaborators = () => {
	const [initialData, setInitialData] = useState(null);
	const [roles, setRoles] = useState([]);
	const history = useHistory();
	const { id } = useParams();
	const formRef = useRef(null);
	const onSubmission = async data => {
		try {
			await collaboratorSchema.validate(data, {
				abortEarly: false,
			});

			const fixedRole = roles.find(role => role.value === data.role.slug);

			const salaryFormat = data.salary.split('').reduce((accum, curr) => {
				if (curr !== ' ') return accum + curr;
				return '';
			}, '');

			const submission = {
				...data,
				role: {
					name: fixedRole.label,
					slug: fixedRole.value,
				},
				salary: salaryFormat,
				roleId: fixedRole.id,
			};

			api.post('/collaborators', { ...submission });
			toast.success('Colaborador criado!');
			return history.push('/');
		} catch (err) {
			const validationErrors = {};
			if (err instanceof Yup.ValidationError) {
				err.inner.forEach(error => {
					validationErrors[error.path] = error.message;
				});
				formRef.current.setErrors(validationErrors);
			}
			toast.error('Ocorreu algum erro!');
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
					id: item.id,
				}));
				return setRoles(rolesOption);
			} catch (err) {
				return err;
			}
		};

		loadRoles();
	}, []);

	useEffect(() => {
		const loadInitialData = async () => {
			try {
				const { data } = await api.get(`/collaborators/${id}`);

				const birthday = data.birthday.split('/').join('');
				const formatted = {
					...data,
					birthday,
				};

				return setInitialData(formatted);
			} catch (error) {
				return error;
			}
		};

		if (id) loadInitialData();
	}, [id]);

	return (
		<Container>
			{id ? <h1>Editar Colaborador</h1> : <h1>Registrar Colaborador</h1>}
			<Row>
				<Form
					onSubmit={onSubmission}
					initialData={id ? initialData : null}
					ref={formRef}
				>
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
								name="role.slug"
								placeholder="Selecione um cargo"
								options={roles}
							/>
						</Row>
						<Row>
							<Input name="cep" placeholder="CEP" />
							<Input name="street" placeholder="Rua" />
						</Row>
						<Row>
							<Input name="neighborhood" placeholder="Bairro" />
							<Input name="city" placeholder="Cidade" />
							<Input name="number" placeholder="Número" />
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
