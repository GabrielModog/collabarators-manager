import * as Yup from 'yup';

export default Yup.object().shape({
	name: Yup.string().required(),
	lastname: Yup.string().required(),
	birthday: Yup.string().required(),
	role: Yup.string().required(),
	salary: Yup.string().required(),
	address: Yup.object().shape({
		cep: Yup.string().required(),
		street: Yup.string().required(),
		neighborhood: Yup.string().required(),
		city: Yup.string().required(),
		number: Yup.string().required(),
	}),
});
