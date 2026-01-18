
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, removeItem } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Total plantas: {totalQuantity}</h2>
      <h3>Total: ${totalPrice}</h3>
      {Object.values(items).map(item => (
        <div key={item.id}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          {item.quantity}
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Eliminar</button>
        </div>
      ))}
      <button onClick={() => alert('Próximamente')}>Pagar</button>
      <Link to="/products"><button>Continuar comprando</button></Link>
    </div>
  )
}
