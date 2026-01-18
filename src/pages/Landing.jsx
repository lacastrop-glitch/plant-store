
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section>
      <h2>GreenShop</h2>
      <p>Las mejores plantas de interior para tu hogar.</p>
      <Link to="/products"><button>Comenzar</button></Link>
    </section>
  )
}
