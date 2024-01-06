import { CreateOrderDTO, Topping } from '../../types';
import ToppingCard from './ToppingCard';
import pepperoniImg from '../../assets/toppings/pepperoni-img.jpg'
import sausageImg from '../../assets/toppings/sausage-img.jpg'
import pineappleImg from '../../assets/toppings/pineapple-img.jpg'
import onionImg from '../../assets/toppings/onion-img.jpg'
import mushroomImg from '../../assets/toppings/mushroom-img.jpg'
import hamImg from '../../assets/toppings/ham-img.jpg'
import chiliImg from '../../assets/toppings/chili-pepper-img.png'
import cucumberImg from '../../assets/toppings/cucumber-img.jpg'

type ToppingsListProps = {
  toppings: Topping[],
  setOrder:  React.Dispatch<React.SetStateAction<CreateOrderDTO>>,
};


const ToppingsList = ({ toppings, setOrder }: ToppingsListProps) => {

    const toppingImages : string[] = [
        pepperoniImg,
        sausageImg,
        pineappleImg,
        onionImg,
        mushroomImg,
        hamImg,
        chiliImg,
        cucumberImg,
    ]

    const addTopping = (newTopping: Topping) => {
        setOrder((prevOrder) => ({
          ...prevOrder,
          toppings: [...prevOrder.toppings, newTopping],
        }));
      };
    
      const removeTopping = (toppingToRemove: Topping) => {
        setOrder((prevOrder) => ({
          ...prevOrder,
          toppings: prevOrder.toppings.filter((topping) => topping !== toppingToRemove),
        }));
      };


  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
      {toppings.map((topping, index) => {
        return <ToppingCard
                  key={index}
                  topping={topping} 
                  img={toppingImages[index]}
                  addTopping={() => addTopping(topping)}
                  removeTopping={() => removeTopping(topping)} 
                  />;
      })}
    </div>
  );
};

export default ToppingsList;