import React from 'react';

interface ProductProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

export const ProductCard: React.FC<ProductProps> = ({ title, image, description }) => {
  return (
    <div className="product-card">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full object-cover product-image"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
        <p className="text-white text-sm font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}