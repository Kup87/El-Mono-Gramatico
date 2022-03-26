const { useState } = require("react")
const { Link } = require("react-router-dom")

const InputCount = () =>{

    return (
        <Link to='/cart'>
            <button className="btn btn-outline-primary" onClick={()=>console.log("navegating to cart")}></button>
        </Link>
    )
}

const ButtonCount = ({handleInter})=>{
    return <button className="btn btn-outline-success" onClick={handleInter}></button>
}

const Intercambiabilidad = () =>{
    const [inputType, setInputType] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }

    return (
        <div>
            <h2>
                Item Description
            </h2>
            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter} />
                    :
                    <InputCount />
            }
        </div>
    )
}

export default Intercambiabilidad