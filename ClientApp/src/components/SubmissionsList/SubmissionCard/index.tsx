import './styles.css'
import pizzaImg from '../../../assets/pizza-img.jpg'
import { Order } from '../../../types'

type SubmissionCardProps = {
    order: Order,
}

const SubmissionCard = ({order}: SubmissionCardProps) => {

    const ImageMeasurements = {
        width: '200px',
        height: '200px',
    }

    const convertDateFormat = (inputDate: string): string | null => {
        
        const parsedDate = new Date(inputDate);
      
        
        if (isNaN(parsedDate.getTime())) {
          console.error("Invalid date format");
          return null;
        }
      
       
        const formattedDate = parsedDate.toISOString().split("T")[0];
      
        return formattedDate;
      };

  return (
    <div className='flex flex-col relative items-center border-b-2 p-3 gap-3 border-stone-950'>
        <div className='flex flex-row justify-center sm:justify-between items-center w-full h-full'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h3 className='font-sans font-bold text-xl'>Pizza size: {order.size.title}</h3>
                {order.toppings.length == 0 ? (
                <h3 className='font-sans font-bold text-xl'>Toppings: None</h3>
                ) : (
                    <div className='flex flex-col font-sans font-bold gap-2'>
                    <h3 className='text-xl'>Toppings:</h3>
                    <ul className='text-md'>
                        {order.toppings.map((topping, index) => {
                        return <li key={index}>• {topping.title}</li>
                        })}
                    </ul>
                    </div>
                )}

            </div>

            <img src={pizzaImg} alt="pizza-img" style={ImageMeasurements} className='hidden sm:block'/>

        </div>

        <div className='flex flex-col sm:flex-row justify-between w-full text-center'>
            <h3 className='font-sans font-bold text-xl'>Submittion date: <span className='font-sans font-medium text-gray-500 text-md'>{convertDateFormat(order.submissionDate)}</span></h3>
            <h3 className='font-sans font-bold text-xl'>Order price: {order.price.toFixed(2)} € </h3>
        </div>

    </div>
  )
}

export default SubmissionCard