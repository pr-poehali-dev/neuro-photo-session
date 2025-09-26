import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

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

interface OrderFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  orderForm: OrderFormData;
  onUpdateForm: (form: OrderFormData) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemovePhoto: (index: number) => void;
  onContactMethodChange: (method: 'whatsapp' | 'telegram', checked: boolean) => void;
  onSubmit: () => void;
}

const OrderForm = ({
  isOpen,
  onOpenChange,
  orderForm,
  onUpdateForm,
  onFileUpload,
  onRemovePhoto,
  onContactMethodChange,
  onSubmit
}: OrderFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
              onChange={(e) => onUpdateForm({ ...orderForm, fullName: e.target.value })}
            />
          </div>

          {/* Телефон */}
          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона *</Label>
            <Input
              id="phone"
              placeholder="+7 (___) ___-__-__"
              value={orderForm.phone}
              onChange={(e) => onUpdateForm({ ...orderForm, phone: e.target.value })}
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
                  onCheckedChange={(checked) => onContactMethodChange('whatsapp', checked as boolean)}
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
                  onCheckedChange={(checked) => onContactMethodChange('telegram', checked as boolean)}
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
              onChange={(e) => onUpdateForm({ ...orderForm, email: e.target.value })}
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
              onChange={(e) => onUpdateForm({ ...orderForm, description: e.target.value })}
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
                onChange={onFileUpload}
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
                      onClick={() => onRemovePhoto(index)}
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
            <Select value={orderForm.tariff} onValueChange={(value) => onUpdateForm({ ...orderForm, tariff: value })}>
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
            onClick={onSubmit}
            className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white py-3 text-lg"
            size="lg"
          >
            <Icon name="Check" size={20} className="mr-2" />
            Сделать предварительный заказ
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;