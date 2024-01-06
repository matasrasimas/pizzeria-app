import { useState } from 'react'
import './styles.css'
import { Topping } from '../../../types'

type ToppingCardProps = {
    topping: Topping,
    img: string,
    addTopping: (topping : Topping) => void,
    removeTopping: (topping : Topping) => void,
}

const ToppingCard = ({topping, img, addTopping, removeTopping}: ToppingCardProps) => {


    const [isSelected, setIsSelected] = useState<boolean>(false)


    const ImageMeasurements = {
        width: '200px',
        height: '200px',
    }

  return (
    <div 
      onClick={() => {
        setIsSelected(prev => !prev)
        isSelected ? removeTopping(topping) : addTopping(topping);
      } }
      className={`flex flex-col relative h-[280px] items-center border-2 p-3 gap-3 shadow-sm shadow-gray-500 hover:shadow-md hover:border-blue-500 cursor-pointer ${isSelected ? 'border-blue-500' : 'border-gray-500'}`}>
        <div className={`${isSelected ? 'circle-full' : 'circle-empty'}`}></div>
        <h3 className='size-title'>{topping.title}</h3>
        <div className='flex items-center h-full'>
          <img src={img} alt="pizza-img" style={ImageMeasurements}/>
        </div>

    </div>
  )
}

export default ToppingCard