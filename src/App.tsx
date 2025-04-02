import { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, Users, Trophy, ArrowRight } from 'lucide-react';
import { Header } from './components/Header';
import { CommunityShowcase } from './components/CommunityShowcase';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedData = localStorage.getItem('key');
      setData(storedData);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const features = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Conteúdo Exclusivo', description: 'Acesso a materiais únicos e atualizados' },
    { icon: <Users className="w-6 h-6" />, title: 'Comunidade Ativa', description: 'Interaja com outros estudantes' },
    { icon: <Trophy className="w-6 h-6" />, title: 'Certificação', description: 'Certificados reconhecidos pelo mercado' },
  ];

  const benefits = [
    'Acesso vitalício a todos os cursos',
    'Suporte 24/7 via Discord',
    'Projetos práticos',
    'Mentoria personalizada',
    'Atualizações constantes',
    'Networking com profissionais',
  ];

  const checkoutData = {
    priceId: 'price_1QNjpCRoR21jOPgb4VJAAwnq',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Transforme seu futuro com a
            <span className="text-[#00defc]"> Adapitfy Courses</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Desenvolva habilidades essenciais para o mercado de trabalho com nossa plataforma de cursos online.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#00defc] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00c5e0] transition-colors"
          >
            Comece Agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="text-[#00defc] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommunityShowcase />
      
      <Testimonials />

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Acesso Premium</h2>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-5xl font-extrabold text-[#00defc]">R$29,90</span>
                <span className="text-gray-500 dark:text-gray-400">/único</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Acesso completo a todos os recursos da plataforma
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00defc]" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => window.location.href = "https://pay.kiwify.com.br/lkjbC2H"}
                className="w-full bg-[#00defc] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00c5e0] transition-colors"
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;