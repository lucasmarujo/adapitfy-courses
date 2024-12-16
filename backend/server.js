const express = require('express');
const { Stripe } = require('stripe');
const bodyParser = require('body-parser');

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());

app.post('/api/checkout', async (req, res) => {
  const { priceId } = req.body;

  const cors = require('cors');
    app.use(cors());

  if (!priceId) {
    return res.status(400).send({ error: 'priceId é obrigatório' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
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