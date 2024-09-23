
import { ReactNode } from 'react';

export interface CartInfoItemProps {
  children?: ReactNode;
  title?:ReactNode;
  description?:ReactNode;
}

const CartInfoItem = ({ children,title ,description}: CartInfoItemProps) => {
  return (
    <div className="total__row">
      { children }
      <p className="total__title">{title}</p>
      <p className="total__description">{description}</p>
    </div>
  )
}

export default CartInfoItem