const request = require('supertest');
const app = require('../backend/server'); // Ajuste o caminho conforme necessário

describe('POST /api/checkout', () => {
  it('deve retornar erro se priceId não for fornecido', async () => {
    const response = await request(app).post('/api/checkout').send({});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('priceId é obrigatório');
  });

  // Adicione mais testes conforme necessário
});