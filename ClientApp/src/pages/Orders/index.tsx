import { useEffect, useState } from 'react'
import { Order } from '../../types'
import SubmissionsList from '../../components/SubmissionsList'
import { fetchOrders } from '../../services'


const OrdersPage = () => {

  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async() => {
      const fetchedOrders = await fetchOrders()
      setOrders(fetchedOrders)
    }
    fetchData()
    setLoading(false)
  }, [])


  if(loading) {
    return (
      <div className='flex flex-col items-center w-full'>
        <h1 className='main-header'>Loading...</h1>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center w-full'>
      {orders.length == 0 ? (
        <h1 className='main-header'>No orders submitted</h1>
      ) : (
        <div className='flex flex-col items-center gap-10 w-full'>
            <h1 className='main-header'>Submitted orders:</h1>
            <SubmissionsList orders={orders}/>
        </div>
      )}

    </div>
  )
}

export default OrdersPage