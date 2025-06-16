import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#0f172a] flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img 
            src="https://files.salebot.pro/uploads/file_item/file/595486/cat-oiiaoiia-cat.gif" 
            alt="Loading..."
            className="w-48 h-48"
          />
          <p className="text-blue-100 text-lg absolute bottom-0 left-1/2 -translate-x-1/2">
            Загрузка...
          </p>
        </div>
      </div>
    </div>
  );
};