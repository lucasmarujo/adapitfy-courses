const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { priceId } = req.body;

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
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.json({ url: session.url }); // Retorna a URL da sessão
    } catch (error) {
      console.error('Erro ao criar a sessão de checkout:', error);
      res.status(500).send({ error: 'Erro ao criar a sessão de checkout' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}