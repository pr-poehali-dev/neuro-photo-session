import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PortfolioSection = () => {
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
    <section id="portfolio-section" className="py-16 lg:py-24 bg-white">
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
  );
};

export default PortfolioSection;