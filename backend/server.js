const express = require('express');
const { Stripe } = require('stripe');
const bodyParser = require('body-parser');

const app = express();
const stripe = new Stripe('STRIPE_SECRET_KEY'); // Substitua pela sua chave secreta

app.use(bodyParser.json());

app.post('/api/checkout', async (req, res) => {
  const { priceId } = req.body;

  // Validação do priceId
  if (!priceId) {
    return res.status(400).send({ error: 'priceId é obrigatório' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId, // ID do preço que você criou no Stripe
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success', // URL de sucesso
      cancel_url: 'http://localhost:3000/cancel', // URL de cancelamento
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Erro ao criar a sessão de checkout:', error);
    res.status(500).send({ error: 'Erro ao criar a sessão de checkout' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});