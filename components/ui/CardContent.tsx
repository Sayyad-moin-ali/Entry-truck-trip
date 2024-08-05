import React, { ReactNode } from 'react';

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export default CardContent;
