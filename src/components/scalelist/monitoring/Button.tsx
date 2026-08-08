import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-[#2563eb] hover:bg-blue-700 text-white",
    secondary: "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm",
    outline: "border border-[#2563eb] text-[#2563eb] hover:bg-blue-50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};