import React, { useRef, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Form } from '../../components/Form';
import Input from '../../components/Form/Input';

import { Container, Row, SendButton } from '../style';
import roleSchema from '../../validators/role';

import api from '../../services';

const Roles = () => {
	const [initialData, setInitialData] = useState(null);
	const formRef = useRef(null);
	const history = useHistory();
	const { id } = useParams();

	const onSubmission = async data => {
		try {
			await roleSchema.validate(data, {
				abortEarly: false,
			});
			if (id) {
				api.put('/roles', { ...data });
				toast.success('Cargo editado!');
				return history.push('/');
			}
			api.post('/roles', { ...data });
			toast.success('Cargo criado!');
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
				const { data } = await api.get(`/roles/${id}`);
				return setInitialData(data);
			} catch (err) {
				return err;
			}
		};

		loadRoles();
	}, []);

	return (
		<Container>
			{id ? <h1>Editor de Cargo</h1> : <h1>Criação de Cargo</h1>}
			<Row>
				<Form
					onSubmit={onSubmission}
					initialData={id ? initialData : null}
					ref={formRef}
				>
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
						<SendButton type="submit">
							{id ? 'Salvar Edição' : 'Criar Cargo'}
						</SendButton>
					</Row>
				</Form>
			</Row>
		</Container>
	);
};

export default Roles;
