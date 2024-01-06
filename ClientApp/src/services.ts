import axios from "axios"
import { CreateOrderDTO, Order, Size, Topping } from "./types"

export const fetchSizes = async() : Promise<Size[]> => {
    try {
        const response = await axios.get('https://localhost:7003/api/size/getsizes')
        const data = await response.data
        return data

    } catch(error) {
        console.error(error)
        return []
    }
}

export const fetchToppings = async() : Promise<Topping[]> => {
    try {
        const response = await axios.get('https://localhost:7003/api/topping/gettoppings')
        const data = await response.data
        return data

    } catch(error) {
        console.error(error)
        return []
    }
}

export const getTotalPrice = async(order : CreateOrderDTO) : Promise<number> => {

    try {
      const response = await axios.post('https://localhost:7003/api/order/getprice', order,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
        )

      const data = await response.data
      return data

    } catch(error) {
      console.error(error)
      return 0
    }
}

export const createOrder = async(order : CreateOrderDTO) : Promise<number> => {
    try {
        const response = await axios.post('https://localhost:7003/api/order/createorder', order,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        return response.status

    } catch(error) {
        console.error(error)
        return 400
    }
}

export const fetchOrders = async() : Promise<Order[]> => {
    try {
      const response = await axios.get('https://localhost:7003/api/order/getorders')
      const data = await response.data
      return data

  } catch(error) {
      console.error(error)
      return []
  }
}


