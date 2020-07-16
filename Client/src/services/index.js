import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:5000/',
});

const CEPapi = axios.create({
	baseURL: 'http://viacep.com.br/ws',
});

export const getViaCEP = async cep => {
	try {
		const { data } = await CEPapi.get(`/${cep}/json`);
		return data;
	} catch (error) {
		return error;
	}
};
