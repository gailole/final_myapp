import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cases = [
  {
    id: 1,
    title: 'Онлайн-магазин',
    description: 'Бот мини-магазин внутри Telegram с удобным просмотром и заказом товаров.',
    image: 'https://files.salebot.pro/uploads/file_item/file/595486/case1.gif',
    features: [
      'Платформа: Telegram',
      'Каталог товаров',
      'Корзина покупок',
      'Оплата в боте',
      'Информация о заказе',
      'Заявки для менеджеров'
    ]
  },
  {
    id: 2,
    title: 'Клуб по подписке',
    description: 'Бот для закрытого клуба — контроль доступа, материалы и автоматизация.',
    image: 'https://files.salebot.pro/uploads/file_item/file/595486/case2.gif',
    features: [
      'Платформа: Telegram',
      'Платежная система: Lava.top',
      'Панель оплат',
      'Прием и исключение из канала/чата',
      'Напоминания об оплате',
      'Аналитика'
    ]
  },
  {
    id: 3,
    title: 'Продажа инфопродуктов',
    description: 'Бот с каруселью продуктов, автрасчетом цены и выдачей доступа в Getcource.',
    image: 'https://files.salebot.pro/uploads/file_item/file/595486/case3.gif',
    features: [
      'Платформа: Telegram',
      'Платежная система: Prodamus',
      'Интеграция с Getcource',
      'Каталог продуктов',
      'Расчет цены и скидки',
      'Выдача доступов'
    ]
  },
  {
    id: 4,
    title: 'WebApp-визитка',
    description: 'Удобное приложение-визитка для сбора контактов и доступом к информации.',
    image: 'https://files.salebot.pro/uploads/file_item/file/595486/case5.gif',
    features: [
      'Сбор базы клиентов',
      'Личный кабинет',
      'Презентация услуг',
      'Редактирование для админов',
      'Удобный и современный формат',
      'Форма обратной связи'
    ]
  },
  {
    id: 5,
    title: 'Колесо фортуны',
    description: 'Геймификация доступная для клиентов, которые приобрели основной продукт.',
    image: 'https://files.salebot.pro/uploads/file_item/file/595486/case4.gif',
    features: [
      'Проверка покупки продукта',
      'Выпадение призов без повтора',
      'Различная вероятность выпадения',
      'Доп прокрутки за выполнение заданий',
      'Проверка выполнения заданий',
      'Реферальная система'
    ]
  }
];

interface CaseStudyImageProps {
  src: string;
  alt: string;
  isVisible: boolean;
}

const CaseStudyImage: React.FC<CaseStudyImageProps> = ({ src, alt, isVisible }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isVisible && imgRef.current) {
      imgRef.current.src = '';
      setLoaded(false);
    } else if (isVisible && imgRef.current && !loaded) {
      const preloadImage = new Image();
      preloadImage.src = src;
      preloadImage.onload = () => {
        if (imgRef.current) {
          imgRef.current.src = src;
        }
      };
    }
  }, [isVisible, src, loaded]);

  return (
    <div className="case-study-image-wrapper">
      <div className="case-study-image-container">
        <img
          ref={imgRef}
          alt={alt}
          className={`case-study-image transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
        {!loaded && (
          <div className="absolute inset-0 bg-gray-800 rounded-xl animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#2997FF] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export const CaseStudies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const showPrevButton = activeIndex > 0;
  const showNextButton = activeIndex < cases.length - 1;

  const handlePrev = () => {
    if (showPrevButton) {
      swiperRef.current?.slideTo(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (showNextButton) {
      swiperRef.current?.slideTo(activeIndex + 1);
    }
  };

  return (
    <div className="case-studies">
      <h2 className="text-2xl font-bold text-white mb-5">
        Кейсы
      </h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          speed={800}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          watchSlidesProgress={true}
          allowTouchMove={true}
          className="case-studies-swiper"
        >
          {cases.map((caseItem, index) => (
            <SwiperSlide key={caseItem.id}>
              <div className="case-study-card">
                <div className="case-study-content">
                  <div className="case-study-media-section">
                    <CaseStudyImage
                      src={caseItem.image}
                      alt={caseItem.title}
                      isVisible={Math.abs(activeIndex - index) <= 1}
                    />
                    <div className={`navigation-buttons ${showPrevButton ? 'has-prev' : ''}`}>
                      {showPrevButton && (
                        <button 
                          className="swiper-button-prev-custom"
                          onClick={handlePrev}
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                      )}
                      {showNextButton && (
                        <button 
                          className="swiper-button-next-custom"
                          onClick={handleNext}
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="case-study-info">
                    <div className="case-study-header">
                      <h3 className="text-base font-semibold text-white mb-2">
                        {caseItem.title}
                      </h3>
                      <p className="text-white text-sm font-light leading-relaxed">
                        {caseItem.description}
                      </p>
                    </div>
                    <div className="case-study-features">
                      {caseItem.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <div className="feature-dot" />
                          <span className="text-white text-sm font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};