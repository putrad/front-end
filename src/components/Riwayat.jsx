import React from "react"
const Riwayat =()=>{
    return(
        <div>
 <h4>riwayat</h4>
            <label htmlFor="prestasi">
                <input type="text" placeholder="prestasi" nama="prestasi" />
            </label><br/>
            <label htmlFor="kontribusi">
                <input type="text" placeholder="kontribusi" nama="kontribusi"/>
            </label><br/>
            <label htmlFor="penghargaan">
                <input type="text" placeholder="penghargaan" nama="penghargaan"/>
            </label><br/>
            <button>submit</button>
        </div>
    )
}
export default Riwayat