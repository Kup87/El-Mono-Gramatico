import { Link } from "react-router-dom"
import booksPiled from '../../Media/booksPiled.svg';

const SeguirComprando = () =>{

    return (
        <Link to='/'>
            <button className="btn btn-outline-primary">SeguirComprando <img src={booksPiled} alt="booksPiled" className='cartSVG'/></button>
        </Link>
    )
}

export default SeguirComprando