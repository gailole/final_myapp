import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from './ProductCard';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

// Массив продуктов с описанием услуг
export const products = [
  {
    id: 1,
    title: "Разработка ботов в Salebot",
    price: 199,
    image: "https://files.salebot.pro/uploads/file_item/file/595486/salebot.png",
    description: "Сохрани клиентскую базу — переведи аудиторию в бота. Анализируй и сегментируй, запускай геймификацию, онлайн-продажи, подписки и другие механики вовлечения и монетизации."
  },
  {
    id: 2,
    title: "Онлайн-школы на GetCource",
    price: 299,
    image: "https://files.salebot.pro/uploads/file_item/file/595486/get.png",
    description: "Getcourse — сервис для онлайн-обучения, воронок продаж, рассылок и вебинаров. Подходит экспертам и школам: удобно вести курсы, автоматизировать продажи и работать с клиентами."
  },
  {
    id: 3,
    title: "Автоматизация с n8n",
    price: 149,
    image: "https://files.salebot.pro/uploads/file_item/file/595486/3.png",
    description: "Нужно связать сервисы? Настрою n8n на своём сервере — он автоматизирует любые процессы между сервисами с открытым API: сложные цепочки, логика условий, обработка данных и интеграции в одном потоке."
  },
  {
    id: 4,
    title: "Приложение в Telegram",
    price: 249,
    image: "https://files.salebot.pro/uploads/file_item/file/595486/webapp2.png",
    description: "Web App для Telegram — идеальный способ превратить вашего бота в полноценное приложение с интерфейсом, API-интеграцией и логикой на стороне сервера."
  },
  {
    id: 5,
    title: "Интеграция ИИ от OpenAI",
    price: 179,
    image: "https://files.salebot.pro/uploads/file_item/file/595486/gpt2.png",
    description: "Интегрирую OpenAI API в ваши продукты — реализую умные сценарии: автоответы, персонализированные подсказки, интеллектуальный разбор запросов, анализ текста и генерацию контента под любые задачи."
  }
];

export const ProductCarousel: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[FreeMode]}
        freeMode={{
          enabled: true,
          sticky: false,
          momentumBounce: false,
          momentumVelocityRatio: 0.8
        }}
        grabCursor={true}
        resistance={true}
        resistanceRatio={0.85}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 16
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 16,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 16
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 20
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 24,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 24
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 30
          }
        }}
        className="product-carousel"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="carousel-slide">
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};