import React, { useState } from 'react';
import { CreateOrderDTO, Size } from '../../types';
import SizeCard from './SizeCard';
import pizzaImg from '../../assets/pizza-img.jpg';

type SizesListProps = {
  sizes: Size[],
  setOrder:  React.Dispatch<React.SetStateAction<CreateOrderDTO>>,
};

const calculateDimensions = (sizeTitle: string): { width: number; height: number } => {
  let width: number;
  let height: number;

  switch (sizeTitle.toLowerCase()) {
    case 'small':
      width = 120;
      height = 120;
      break;
    case 'medium':
      width = 160;
      height = 160;
      break;
    default:
      width = 200;
      height = 200;
      break;
  }

  return { width, height };
};

const SizesList = ({ sizes, setOrder }: SizesListProps) => {

  const [selectedSize, setSelectedSize] = useState<Size | null>(null)

  const updateOrderSize = (newSize : Size) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      size: newSize,
    }))
  }
  


  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
      {sizes.map((size, index) => {
        const { width, height } = calculateDimensions(size.title)
        const isSelected = selectedSize == size
        return <SizeCard
                  key={index}
                  size={size} 
                  img={pizzaImg} 
                  img_height={height} 
                  img_width={width}
                  isSelected={isSelected}
                  onSelect={() => {setSelectedSize(size); updateOrderSize(size)}} />;
      })}
    </div>
  );
};

export default SizesList;