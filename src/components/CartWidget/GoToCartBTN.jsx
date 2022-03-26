import { Link } from "react-router-dom"
import CarritoImg from './cart.svg'

const GoToCartBtn = () =>{

    return (
        <Link to='/cart'>
            <button className="btn btn-outline-success"> Ver el carrito <img src={CarritoImg} alt="CarritoImg" className='cartSVG'/></button>
        </Link>
    )
}

export default GoToCartBtn