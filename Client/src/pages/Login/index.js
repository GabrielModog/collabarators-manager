import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import StorageContext from '../../context/context';
import Input from '../../components/Form/Input';

import api from '../../services';
import { LoginButton, LoginSection, LoginForm, Column } from '../style';

const Login = () => {
	const history = useHistory();
	const formRef = useRef(null);
	const { setToken } = useContext(StorageContext);

	const onSubmission = async data => {
		try {
			const user = await api.get('/me');

			formRef.current.setErrors({});
			const schema = Yup.object().shape({
				name: Yup.string().required(),
				password: Yup.string().min(4).required(),
			});
			await schema.validate(data, {
				abortEarly: false,
			});

			if (
				user.data[0].name === data.name &&
				user.data[0].password === data.password
			) {
				const { token } = user.data[0];
				toast.success('Usuário logado!');
				setToken(token);
				return history.push('/');
			}
			return data;
		} catch (error) {
			const validationErrors = {};
			if (error instanceof Yup.ValidationError) {
				error.inner.forEach(err => {
					validationErrors[err.path] = err.message;
				});
				formRef.current.setErrors(validationErrors);
			}
			return error;
		}
	};

	return (
		<LoginSection>
			<h1>Collaborator</h1>

			<LoginForm
				onSubmit={onSubmission}
				initialData={{ name: 'admin', password: 'admin' }}
				ref={formRef}
			>
				<h3>Login</h3>
				<br />

				<Input type="text" name="name" placeholder="Usuário" />

				<Input type="password" name="password" placeholder="Senha" />

				<br />
				<LoginButton type="submit">Entrar</LoginButton>
			</LoginForm>
		</LoginSection>
	);
};

export default Login;
