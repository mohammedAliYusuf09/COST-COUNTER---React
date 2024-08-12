import { useState } from "react";
import { Formelements } from "./components/Formelements"
import { Header } from "./components/Header"
import { ProductList } from "./components/ProductList"
import { Status } from "./components/Status"

function App() {

  const INITIAL = [
    {
      id: 1,
      product: 'Laptop',
      quantity: 10,
      productStage: true,
      price: 999,
      totalPrice: 10 * 999 // 9999.90
    },
    {
      id: 2,
      product: 'Smartphone',
      quantity: 25,
      productStage: false,
      price: 499,
      totalPrice: 25 * 499 // 12499.75
    },
    {
      id: 3,
      product: 'Tablet',
      quantity: 15,
      productStage: true,
      price: 299,
      totalPrice: 15 * 299 // 4499.85
    },
    {
      id: 4,
      product: 'Headphones',
      quantity: 50,
      productStage: true,
      price: 89,
      totalPrice: 50 * 89 // 4499.50
    },
    {
      id: 5,
      product: 'Smartwatch',
      quantity: 20,
      productStage: false,
      price: 199,
      totalPrice: 20 * 199 // 3999.80
    }
  ];

  const [products, setProducts] = useState(INITIAL);

  // const totalQuantity = products.reduce((acu, cur) => acu + cur.quantity, 0);
  // console.log(totalQuantity);

  const totalQuantity = products.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.quantity;
  }, 0); // Initial value is 0

  const totalPriceofAll = products.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.totalPrice;
  }, 0); // Initial value is 0

  console.log(products);
  
  

  const items = products.length;

  const addItem = (name, quantity, price) => {
    const newItem = {
      id : products.length +1,
      product : name,
      quantity,
      productStage: false,
      price,
      totalPrice: quantity * price
    }
    setProducts(item=> [...products, newItem]);
  }

  const deleteItem = (id) => {
    setProducts(items=> items.filter(item=> item.id !== id));
  }

  const chackedItem = (id)=> {
    setProducts(items=> items.map(item=> item.id == id ? {...item , productStage : !item.productStage} : item))
  }

  const setEmpty = () => {
    setProducts([]);
    console.log(products);
  }


 
  
  

  return (
    <>
      <Header items={items}/>
      <Formelements addItem={addItem} />
      <ProductList products={products} deleteItem={deleteItem} chackedItem={chackedItem} setEmpty={setEmpty}/>
      <Status totalQuantity={totalQuantity} totalPriceofAll={totalPriceofAll}/>
    </>
  )
}

export default App
