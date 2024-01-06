import { useEffect, useState } from 'react'
import { CreateOrderDTO, Size, Topping } from '../../types'
import SizesList from '../../components/SizesList'
import ToppingsList from '../../components/ToppingsList'
import SuccessModal from '../../components/SuccessModal'
import { createOrder, fetchSizes, fetchToppings, getTotalPrice } from '../../services'

const CreateOrderPage = () => {

    const [sizes, setSizes] = useState<Size[]>([])
    const [toppings, setToppings] = useState<Topping[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const [order, setOrder] = useState<CreateOrderDTO>({
      size: null,
      toppings: [],
    })

    const [noSizeError, setNoSizeError] = useState<boolean>(false)
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async() => {
          const fetchedSizes = await fetchSizes()
          setSizes(fetchedSizes)
          const fetchedToppings = await fetchToppings()
          setToppings(fetchedToppings)
        }
        fetchData()
    }, [])


    useEffect(() => {
      const updateTotalPrice = async() => {
        const fetchedPrice = await getTotalPrice(order)
        setTotalPrice(fetchedPrice)
      }

      updateTotalPrice()

    }, [order])


    const handleSubmit = async () => {
      
      if(order.size == null) {
        setNoSizeError(true)
        return
      }

      const response = await createOrder(order)
      if (response == 200) {
        setNoSizeError(false)
        setShowSuccessModal(true)
      }

    }


  return (
    <div className='flex flex-col items-center'>
      <h1 className='main-header'>Create order</h1>

      <div className='flex flex-col items-center gap-6 my-10 w-full'>
        <h2 className='font-sans font-bold text-3xl'>Select size:</h2>
        {sizes.length > 0 && (
          <SizesList sizes={sizes} setOrder={setOrder}/>
        )}

      </div>

      <div className='flex flex-col items-center gap-6 my-10'>
        <h2 className='font-sans font-bold text-3xl'>Select toppings:</h2>
        {toppings.length > 0 && (
          <ToppingsList toppings={toppings} setOrder={setOrder}/>
        )}

      </div>

      {noSizeError && (
        <div className='flex w-full justify-center'>
          <h2 className='font-sans font-bold text-3xl text-red-500'>Please select size of pizza!</h2>
        </div>
      )}

      <div className='flex flex-col mb-10 mt-5 justify-end items-center sm:items-end w-full'>
        <div className='flex sm:flex-row flex-col items-center gap-10 border-0 sm:border-slate-800 sm:border-b-2 pb-2'>
          <h2 className='font-sans font-bold text-3xl'>Total price: {totalPrice.toFixed(2)} €</h2>
          <button className='btn-dark' onClick={handleSubmit}>Submit</button>
        </div>
        {order.toppings.length > 3 && <h2 className='font-sans font-medium text-l text-lime-600'>Applied 10% discount for selecting more than 3 toppings!</h2>}
      </div>

      {showSuccessModal && (
        <SuccessModal
          header='Success!'
          message='Order has been submitted!'
          handleButtonClick={() => window.location.reload()}
        />
      )}
      
    </div>

    
  )
}

export default CreateOrderPage