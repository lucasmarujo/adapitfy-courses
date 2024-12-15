import { useEffect, useState } from 'react';
import { Smartphone, MessagesSquare, Rocket, ArrowRight } from 'lucide-react';

const communityWords = ['Vibrante', 'Inspiradora', 'Inovadora', 'Dinâmica', 'Colaborativa'];

export function CommunityShowcase() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % communityWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const communityFeatures = [
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: 'Chat em Tempo Real',
      description: 'Conecte-se instantaneamente com outros alunos e mentores'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Desafios Semanais',
      description: 'Participe de desafios práticos e ganhe prêmios exclusivos'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'App Responsivo',
      description: 'Acesse de qualquer lugar, em qualquer dispositivo'
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Uma Comunidade{' '}
            <span className="inline-block min-w-[200px] text-[#00defc] transition-all duration-500">
              {communityWords[wordIndex]}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Faça parte de uma das comunidades mais ativas do Brasil. Aprenda, compartilhe e cresça junto com outros devs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Showcase with RGB Animation */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#00defc]/20 to-blue-600/20 p-1">
              <div className="w-full h-full rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 animate-gradient-xy"></div>
                <div className="absolute inset-1 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Smartphone className="w-12 h-12 text-[#00defc] mx-auto mb-4" />
                    <div className="flex justify-center">
                      <img 
                        src='./public/images/screenshot.png' 
                        alt='screenshot' 
                        className='w-full h-auto max-w-[600px] md:max-w-full object-contain rounded-2xl'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00defc]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              img {
                max-height: 75vh;
              }
            }
            @media (min-width: 768px) and (max-width: 1024px) {
              img {
                max-height: 60vh;
              }
            }
            @media (min-width: 1024px) {
              img {
                max-height: 50vh;
              }
            }
          `}</style>

          {/* Features List */}
          <div className="space-y-8">
            {communityFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00defc]/10 flex items-center justify-center">
                  <div className="text-[#00defc]">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
            
            <div className="text-center md:text-left">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#00defc] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00c5e0] transition-colors"
              >
                Junte-se à Comunidade
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}