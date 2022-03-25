



export const Input = () => {

    const noVocal = (e) =>{
        if (["a","e","i","o","u"].includes(e.key)){
            e.preventDefault()
        }
    }

    const inputHandler = (e)=> {
        e.stopPropagation()
    }

    return (

        <div className="box">
            <div className="border border-1 border-warning">
                <input 
                    className="m-5"
                    onKeyDown={inputHandler}
                    type="text"
                    name="i"
                    id="i"          
                />
            </div>
        </div>
    )


}