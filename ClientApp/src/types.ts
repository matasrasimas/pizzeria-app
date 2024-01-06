export type Size = {
    id: string,
    title: string,
}

export type Topping = {
    id: string,
    title: string,
}

export type Order = {
    id: string,
    price: number,
    size: Size,
    toppings: Topping[],
    submissionDate: string,
}

export type CreateOrderDTO = {
    size: Size | null,
    toppings: Topping[],
}
