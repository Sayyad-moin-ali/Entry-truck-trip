import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
 
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="border p-4 bg-slate-300 rounded-md">{children}</div>
);

export default Card;
