import * as Yup from 'yup';

export default Yup.object().shape({
	name: Yup.string().required(),
	slug: Yup.string().required(),
	description: Yup.string().required(),
});
