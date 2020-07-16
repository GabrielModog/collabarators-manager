import React from 'react';

import { getViaCEP } from '../services';

const CEPVALUE = '01001-000';
const CEPRETURN = {
	cep: '01001-000',
	logradouro: 'Praça da Sé',
	complemento: 'lado ímpar',
	bairro: 'Sé',
	localidade: 'São Paulo',
	uf: 'SP',
	unidade: '',
	ibge: '3550308',
	gia: '1004',
};

describe('When API returns status ok', () => {
	test('Should get correct infos', async () => {
		try {
			return await expect(getViaCEP(CEPVALUE)).toBe(CEPRETURN);
		} catch (error) {
			return error;
		}
	});
});
