import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import OrderForm from './OrderForm';

interface OrderFormData {
  fullName: string;
  phone: string;
  email: string;
  description: string;
  tariff: string;
  contactMethods: {
    whatsapp: boolean;
    telegram: boolean;
  };
  photos: File[];
}

interface CTASectionProps {
  isOrderDialogOpen: boolean;
  onOrderDialogChange: (open: boolean) => void;
  orderForm: OrderFormData;
  onUpdateOrderForm: (form: OrderFormData) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemovePhoto: (index: number) => void;
  onContactMethodChange: (method: 'whatsapp' | 'telegram', checked: boolean) => void;
  onSubmitOrder: () => void;
}

const CTASection = ({
  isOrderDialogOpen,
  onOrderDialogChange,
  orderForm,
  onUpdateOrderForm,
  onFileUpload,
  onRemovePhoto,
  onContactMethodChange,
  onSubmitOrder
}: CTASectionProps) => {
  return (
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
            <OrderForm
              isOpen={isOrderDialogOpen}
              onOpenChange={onOrderDialogChange}
              orderForm={orderForm}
              onUpdateForm={onUpdateOrderForm}
              onFileUpload={onFileUpload}
              onRemovePhoto={onRemovePhoto}
              onContactMethodChange={onContactMethodChange}
              onSubmit={onSubmitOrder}
            />
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;