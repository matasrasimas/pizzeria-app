import './styles.css'
import { Size } from '../../../types'

type SizeCardProps = {
    size: Size,
    img: string,
    img_width: number,
    img_height: number,
    isSelected: boolean,
    onSelect: () => void,
}

const SizeCard = ({size, img, img_width, img_height, isSelected, onSelect}: SizeCardProps) => {


    const ImageMeasurements = {
        width: `${img_width}px`,
        height: `${img_height}px`,
      };

  return (
    <div 
      onClick={onSelect}
      className={`flex flex-col relative h-[280px] items-center border-2 p-3 gap-3 shadow-sm shadow-gray-500 hover:shadow-md hover:border-blue-500 cursor-pointer ${isSelected ? 'border-blue-500' : 'border-gray-500'}`}>
        <div className={`${isSelected ? 'circle-full' : 'circle-empty'}`}></div>
        <h3 className='size-title'>{size.title}</h3>
        <div className='flex items-center h-full'>
          <img src={img} alt="pizza-img" style={ImageMeasurements}/>
        </div>

    </div>
  )
}

export default SizeCard