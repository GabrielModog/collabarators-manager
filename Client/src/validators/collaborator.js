import * as Yup from 'yup';

export default Yup.object().shape({
	name: Yup.string().required(),
	lastname: Yup.string().required(),
	birthday: Yup.string().required(),
	role: Yup.string().required(),
	salary: Yup.string().required(),
});
