
import { plants } from '../data/plants'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { useState } from 'react'

export default function Products() {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState({})

  return (
    <div>
      {plants.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button
            disabled={disabled[p.id]}
            onClick={() => {
              dispatch(addToCart(p))
              setDisabled({ ...disabled, [p.id]: true })
            }}
          >
            Añadir a la cesta
          </button>
        </div>
      ))}
    </div>
  )
}
