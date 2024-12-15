import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'João Silva',
    role: 'Desenvolvedor Frontend',
    content: 'Os cursos da Adapitfy transformaram minha carreira. A qualidade do conteúdo é excepcional!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    name: 'Maria Santos',
    role: 'UX Designer',
    content: 'A comunidade é incrível! Aprendi muito com as interações e projetos práticos.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    name: 'Pedro Costa',
    role: 'Estudante',
    content: 'Melhor investimento que fiz na minha educação. O suporte é sensacional!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  }
];

export const handleCheckout = async (setError: (error: string) => void) => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId: 'preco_id_aqui' }), // Substitua pelo seu ID de preço
    });

    if (!response.ok) {
      const errorData = await response.json();
      setError(errorData.error || 'Erro desconhecido');
      return;
    }

    const session = await response.json();
    if (session.url) {
      window.location.href = session.url; // Redireciona para o checkout
    }
  } catch (error) {
    setError('Erro ao processar o checkout');
  }
};

export function Testimonials() {
  const [error, setError] = useState('');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          O que nossos alunos dizem
        </h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center md:text-left mt-2">
          <button onClick={() => handleCheckout(setError)} className="w-full bg-[#00defc] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00c5e0] transition-colors">
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
}