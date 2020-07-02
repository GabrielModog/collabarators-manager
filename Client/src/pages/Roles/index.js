import React, { useRef } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Form } from '../../components/Form';
import Input from '../../components/Form/Input';

import { Container, Row, SendButton } from '../style';
import roleSchema from '../../validators/role';

const Roles = () => {
	const formRef = useRef(null);

	const onSubmission = async data => {
		try {
			await roleSchema.validate(data, {
				abortEarly: false,
			});
			toast.success('Cargo criado!');
			return data;
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

	return (
		<Container>
			<h1>Criar Cargo</h1>
			<Row>
				<Form onSubmit={onSubmission} ref={formRef}>
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
