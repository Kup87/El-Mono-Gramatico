import { useState, useEffect } from "react";
import ItemDetail from "../components/Items/ItemDetail";
import { fxFetch } from "../Js/fxFetch";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)
    const { libroid } = useParams()
    const [producto, setProducto] = useState({})
    const goBack = () => window.history.go(-1)
    
    useEffect(() => {
        fxFetch
            .then(resp => setProducto(resp.find(prod => prod.id === parseInt(libroid))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <div className="ModalBack" onClick={goBack}>
            {loading ? <Spinner animation="border" role="status" className="mx-auto"><span className="visually-hidden">Loading...</span></Spinner>
                :
                <div className="detailContainer">
                    <ItemDetail libro={producto}></ItemDetail>
                </div>
            }
            </div>
        </>
    )
}

export default ItemDetailContainer