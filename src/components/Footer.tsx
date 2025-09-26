import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Icon name="Camera" size={24} className="mr-2 text-ai-blue" />
          <span className="text-xl font-heading font-semibold">Нейрофотосессия</span>
        </div>
        <p className="text-gray-400">
          © 2025 Нейрофотосессия. Создано с помощью передовых AI-технологий.
        </p>
      </div>
    </footer>
  );
};

export default Footer;