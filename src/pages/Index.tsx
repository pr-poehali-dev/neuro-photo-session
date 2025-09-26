import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ArticlesSection from '@/components/ArticlesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ReviewsSection from '@/components/ReviewsSection';
import TariffsSection from '@/components/TariffsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    description: '',
    tariff: '',
    contactMethods: {
      whatsapp: false,
      telegram: false
    },
    photos: [] as File[]
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setOrderForm(prev => ({
        ...prev,
        photos: [...prev.photos, ...newFiles]
      }));
    }
  };

  const removePhoto = (index: number) => {
    setOrderForm(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const handleContactMethodChange = (method: 'whatsapp' | 'telegram', checked: boolean) => {
    setOrderForm(prev => ({
      ...prev,
      contactMethods: {
        ...prev.contactMethods,
        [method]: checked
      }
    }));
  };

  const handleSubmitOrder = () => {
    // Здесь будет логика отправки заказа
    console.log('Заказ отправлен:', orderForm);
    setIsOrderDialogOpen(false);
    // Можно добавить уведомление об успешной отправке
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <HeroSection onScrollToSection={scrollToSection} />
      <ArticlesSection />
      <PortfolioSection />
      <ReviewsSection />
      <TariffsSection 
        selectedModel={selectedModel}
        onSelectModel={setSelectedModel}
      />
      <CTASection
        isOrderDialogOpen={isOrderDialogOpen}
        onOrderDialogChange={setIsOrderDialogOpen}
        orderForm={orderForm}
        onUpdateOrderForm={setOrderForm}
        onFileUpload={handleFileUpload}
        onRemovePhoto={removePhoto}
        onContactMethodChange={handleContactMethodChange}
        onSubmitOrder={handleSubmitOrder}
      />
      <Footer />
    </div>
  );
};

export default Index;