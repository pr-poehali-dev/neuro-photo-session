import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

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

  const aiModels = [
    {
      name: 'DALL-E 3',
      description: 'Фотореалистичные портреты высокого качества',
      features: ['Высокая детализация', 'Естественные позы', 'Профессиональное освещение'],
      price: 'от 2990₽',
      color: 'bg-ai-blue'
    },
    {
      name: 'Midjourney',
      description: 'Художественные и стилизованные изображения',
      features: ['Творческие стили', 'Уникальная эстетика', 'Концептуальные решения'],
      price: 'от 3490₽',
      color: 'bg-ai-purple'
    },
    {
      name: 'Stable Diffusion',
      description: 'Гибкая настройка и кастомизация',
      features: ['Точный контроль', 'Быстрая генерация', 'Множество стилей'],
      price: 'от 1990₽',
      color: 'bg-neural'
    }
  ];

  const portfolioItems = [
    {
      image: '/img/95244687-78a6-4b0d-8867-542a0c96df1b.jpg',
      title: 'Профессиональные портреты',
      model: 'DALL-E 3',
      style: 'Студийная съёмка'
    },
    {
      image: '/img/f6418479-b5a5-43e7-bee5-4f670aeaee49.jpg',
      title: 'Художественные стили',
      model: 'Midjourney',
      style: 'Концептуальное искусство'
    },
    {
      image: '/img/0280b878-7bd0-451a-b992-5f90664ea559.jpg',
      title: 'Футуристические образы',
      model: 'Stable Diffusion',
      style: 'Sci-Fi эстетика'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/10 via-ai-purple/5 to-neural/10"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-ai-blue/10 text-ai-blue border-ai-blue/20 hover:bg-ai-blue/20">
              <Icon name="Sparkles" size={16} className="mr-2" />
              AI-технологии нового поколения
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-6">
              Нейро<span className="text-ai-blue">фотосессия</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-body">
              Создайте уникальные профессиональные фотографии с помощью передовых AI-моделей. 
              Безграничные возможности стиля и творчества.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-ai-blue hover:bg-ai-blue/90 text-white px-8 py-4 text-lg"
                onClick={() => scrollToSection('order-section')}
              >
                <Icon name="Camera" size={20} className="mr-2" />
                Создать фотосессию
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-ai-blue text-ai-blue hover:bg-ai-blue/5 px-8 py-4 text-lg"
                onClick={() => scrollToSection('portfolio-section')}
              >
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating AI Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-ai-blue/10 rounded-full flex items-center justify-center">
            <Icon name="Brain" size={24} className="text-ai-blue" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{animationDelay: '1s'}}>
          <div className="w-12 h-12 bg-ai-purple/10 rounded-full flex items-center justify-center">
            <Icon name="Zap" size={20} className="text-ai-purple" />
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-ai-purple/10 text-ai-purple border-ai-purple/20">
              AI-модели
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Выберите свою AI-модель
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Каждая модель обладает уникальными возможностями и стилистикой. 
              Выберите подходящую для вашей задачи.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiModels.map((model, index) => (
              <Card 
                key={model.name}
                className={`relative group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  selectedModel === model.name ? 'ring-2 ring-ai-blue shadow-lg' : ''
                }`}
                onClick={() => setSelectedModel(selectedModel === model.name ? '' : model.name)}
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${model.color} rounded-t-lg`}></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading font-semibold text-gray-900 flex items-center justify-between">
                    {model.name}
                    {selectedModel === model.name && (
                      <Icon name="Check" size={20} className="text-ai-blue" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {model.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Sparkles" size={14} className="mr-2 text-ai-blue" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-heading font-bold text-gray-900">
                      {model.price}
                    </span>
                    <Button 
                      variant={selectedModel === model.name ? "default" : "outline"}
                      className={selectedModel === model.name ? "bg-ai-blue hover:bg-ai-blue/90" : ""}
                    >
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio-section" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neural/10 text-neural border-neural/20">
              Портфолио
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Примеры наших работ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Посмотрите на результаты работы различных AI-моделей и выберите стиль, 
              который подходит именно вам.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {item.model}
                    </Badge>
                    <span className="text-sm text-gray-200">{item.style}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="order-section" className="py-16 lg:py-24 bg-gradient-to-r from-ai-blue via-ai-purple to-neural text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Готовы создать уникальные фотографии?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Начните свою нейрофотосессию прямо сейчас. Выберите стиль, 
              загрузите фото и получите результат за 24 часа.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary" className="bg-white text-ai-blue hover:bg-white/90 px-8 py-4 text-lg">
                    <Icon name="ArrowRight" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-heading">Оформление заказа</DialogTitle>
                    <DialogDescription>
                      Заполните форму, и мы свяжемся с вами для уточнения деталей
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 py-4">
                    {/* ФИО */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName">ФИО заказчика *</Label>
                      <Input
                        id="fullName"
                        placeholder="Введите ваши ФИО"
                        value={orderForm.fullName}
                        onChange={(e) => setOrderForm(prev => ({ ...prev, fullName: e.target.value }))}
                      />
                    </div>

                    {/* Телефон */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Номер телефона *</Label>
                      <Input
                        id="phone"
                        placeholder="+7 (___) ___-__-__"
                        value={orderForm.phone}
                        onChange={(e) => setOrderForm(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>

                    {/* Способы связи */}
                    <div className="space-y-3">
                      <Label>Желаемые способы связи</Label>
                      <div className="flex space-x-6">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="whatsapp"
                            checked={orderForm.contactMethods.whatsapp}
                            onCheckedChange={(checked) => handleContactMethodChange('whatsapp', checked as boolean)}
                          />
                          <Label htmlFor="whatsapp" className="flex items-center space-x-2 cursor-pointer">
                            <Icon name="MessageCircle" size={16} />
                            <span>WhatsApp</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="telegram"
                            checked={orderForm.contactMethods.telegram}
                            onCheckedChange={(checked) => handleContactMethodChange('telegram', checked as boolean)}
                          />
                          <Label htmlFor="telegram" className="flex items-center space-x-2 cursor-pointer">
                            <Icon name="Send" size={16} />
                            <span>Telegram</span>
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Электронная почта *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                        value={orderForm.email}
                        onChange={(e) => setOrderForm(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>

                    {/* Описание пожеланий */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Описание ваших пожеланий</Label>
                      <Textarea
                        id="description"
                        placeholder="Опишите какой стиль, настроение или особенности вы хотели бы видеть в фотографиях..."
                        rows={4}
                        value={orderForm.description}
                        onChange={(e) => setOrderForm(prev => ({ ...prev, description: e.target.value }))}
                      />
                    </div>

                    {/* Загрузка фотографий */}
                    <div className="space-y-3">
                      <Label htmlFor="photos">Загрузка исходных фотографий *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                          id="photos"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <Label htmlFor="photos" className="cursor-pointer">
                          <Icon name="Upload" size={32} className="mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">
                            Нажмите для выбора фотографий или перетащите их сюда
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Поддерживаются: JPG, PNG, HEIC (до 10 файлов)
                          </p>
                        </Label>
                      </div>
                      
                      {/* Предпросмотр загруженных фото */}
                      {orderForm.photos.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 mt-3">
                          {orderForm.photos.map((file, index) => (
                            <div key={index} className="relative group">
                              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-600 p-2">
                                <Icon name="Image" size={20} />
                                <span className="ml-1 truncate">{file.name}</span>
                              </div>
                              <button
                                onClick={() => removePhoto(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Icon name="X" size={12} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Выбор тарифа */}
                    <div className="space-y-2">
                      <Label htmlFor="tariff">Выбор тарифа *</Label>
                      <Select value={orderForm.tariff} onValueChange={(value) => setOrderForm(prev => ({ ...prev, tariff: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тариф" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">5 фото • 1 стиль - от 1990₽</SelectItem>
                          <SelectItem value="standard">15 фото • 3 стиля - от 2990₽</SelectItem>
                          <SelectItem value="premium">30 фото • безлимит стилей - от 3490₽</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Кнопка отправки */}
                    <Button 
                      onClick={handleSubmitOrder}
                      className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white py-3 text-lg"
                      size="lg"
                    >
                      <Icon name="Check" size={20} className="mr-2" />
                      Сделать предварительный заказ
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;