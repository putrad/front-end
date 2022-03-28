import React from "react"
const Form =()=>{
    return(
        <div>

            <label htmlFor="nama">
                <input type="text" placeholder="nama" nama="nama" />
            </label><br/>
            <label htmlFor="almat">
                <input type="text" placeholder="alamat" nama="alamat"/>
            </label><br/>
            <label htmlFor="usia">
                <input type="number" placeholder="usia" nama="usia"/>
            </label><br/>
            <button>submit</button>
            <br/>
           
            
           
        </div>
    )
}

export default Form