
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
  const total = useSelector(state => state.cart.totalQuantity)
  return (
    <header>
      <h1>GreenShop</h1>
      <nav>
        <Link to="/products">Productos</Link> | 
        <Link to="/cart">🛒 {total}</Link>
      </nav>
    </header>
  )
}
