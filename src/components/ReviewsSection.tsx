import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
    {
      text: "Невероятно! AI создал фотографии, которые выглядят лучше профессиональной студийной съёмки. Коллеги не поверили, что это нейросеть.",
      author: "Анна Петрова",
      position: "Маркетолог",
      color: "ai-blue"
    },
    {
      text: "Заказывал корпоративные фото для команды. За один день получили 30 профессиональных портретов. Сэкономили время и бюджет!",
      author: "Михаил Иванов",
      position: "Руководитель IT-отдела",
      color: "ai-purple"
    },
    {
      text: "Мечтала о фотосессии в стиле ретро-футуризма. Нейросеть воплотила все мои идеи! Теперь у меня есть уникальные снимки для соцсетей.",
      author: "Елена Смирнова",
      position: "Блогер",
      color: "neural"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-blue/10 text-ai-blue border-ai-blue/20">
            Отзывы
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Более 500 довольных клиентов уже оценили качество наших нейрофотосессий
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 bg-${review.color}/20 rounded-full flex items-center justify-center mr-3`}>
                    <Icon name="User" size={20} className={`text-${review.color}`} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold">{review.author}</p>
                    <p className="text-sm text-gray-600">{review.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Icon name="Users" size={20} className="mr-2 text-ai-blue" />
              <span>500+ клиентов</span>
            </div>
            <div className="flex items-center">
              <Icon name="Star" size={20} className="mr-2 text-yellow-400 fill-current" />
              <span>4.9/5 рейтинг</span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" size={20} className="mr-2 text-ai-purple" />
              <span>24 часа</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;