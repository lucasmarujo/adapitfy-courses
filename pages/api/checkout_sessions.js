const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { priceId } = req.body;

    // Validação do priceId
    if (!priceId) {
      return res.status(400).send({ error: 'priceId é obrigatório' });
    }

    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceId, // ID do preço que você criou no Stripe
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.status(303).redirect(session.url);
    } catch (err) {
      console.error('Erro ao criar a sessão de checkout:', err);
      res.status(err.statusCode || 500).json({ error: 'Erro ao criar a sessão de checkout' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}