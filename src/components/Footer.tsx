// import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-[#00defc] transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-[#00defc] transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          © 2024 Adapitfy Courses. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}