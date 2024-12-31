import React from 'react';

const Logo = (props) => {
  const { variant = "text-primary text-4xl" } = props;

  return (
    <div className={`flex items-center justify-center font-poppins tracking-wide ${variant}`}>
      <img 
        src="/images/aqualogo.png" // Sesuaikan ekstensi file jika berbeda
        alt="aqualogo" 
        className="h-8 mr-2" // Sesuaikan tinggi dan margin sesuai kebutuhan
      />
      <span className="font-bold">Aqua</span>Sense
    </div>
  );
};

export default Logo;