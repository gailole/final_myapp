import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Pencil, 
  Code2, 
  TestTube, 
  Rocket,
  X
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Брифинг',
    detailedDescription: 'Совместно обсуждаем цели проекта и ключевые задачи. Проводим созвон или переписку, чтобы лучше понять аудиторию и ожидания от продукта. Вместе формируем общее видение, на котором будет строиться вся дальнейшая работа.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: Pencil,
    title: 'Проектирование',
    detailedDescription: 'Готовим техническое задание — его может предоставить клиент, либо составляю его сам на основе обсуждений. На базе этого ТЗ формируется окончательная стоимость работы. Также на этом этапе собираются все необходимые материалы (тексты, баннеры, видео и др.) от задействованных специалистов — копирайтеров, дизайнеров и других участников команды.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: Code2,
    title: 'Разработка',
    detailedDescription: 'Перехожу к созданию продукта. Пишу код, настраиваю нужные функции и интеграции, подключаю необходимые сервисы. В процессе опираюсь на техническое задание и реализую всё в соответствии с поставленными задачами.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: TestTube,
    title: 'Тестирование',
    detailedDescription: 'Проверяю, как работает продукт: устраняю баги, обращаю внимание на корректность работы всех функций. Передаю доступы для самостоятельного тестирования. Если в процессе появляются пожелания, не входящие в первоначальное техническое задание, оформляем дополнительное задание и согласовываем стоимость доработок.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: Rocket,
    title: 'Релиз',
    detailedDescription: 'Запускаю продукт и настраиваю всё для его полноценной работы. В первые дни после запуска оказываю поддержку, чтобы всё работало стабильно. Также возможно дальнейшее сопровождение — как на постоянной основе, так и в рамках запуска — по отдельной договорённости.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000'
  }
];

interface ModalProps {
  step: typeof steps[0];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ step, onClose }) => {
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center modal-overlay"
      onClick={onClose}
    >
      <div 
        className="modal-content rounded-xl max-w-2xl w-full mx-4"
        onClick={handleModalClick}
      >
        <div className="p-3">
          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="text-white hover:text-[#66FCF1] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="workflow-icon-container p-3 rounded-lg">
                <step.icon className="w-6 h-6 text-[#66FCF1]" />
              </div>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
            </div>
            
            <img 
              src={step.image} 
              alt={step.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            
            <p className="text-white leading-relaxed">
              {step.detailedDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkflowDiagram: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<typeof steps[0] | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-5">Этапы работы</h2>
      <div className="max-w-2xl space-y-2">
        {steps.map((step) => (
          <div key={step.title} className="relative">
            <button 
              onClick={() => setSelectedStep(step)}
              className="w-full text-left"
            >
              <div className="workflow-step py-3 px-4 rounded-lg flex items-center gap-4">
                <div className="workflow-icon-container p-2.5 rounded-lg flex-shrink-0">
                  <step.icon className="w-4 h-4 text-[#66FCF1]" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {selectedStep && (
        <Modal 
          step={selectedStep} 
          onClose={() => setSelectedStep(null)}
        />
      )}
    </div>
  );
}