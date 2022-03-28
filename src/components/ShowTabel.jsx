import react from "react"

react
const ShowTabel = ({daftarNama})=>{
    return(
        <div>
            <table style={{border:"SOLID"}}>
                <thead>
                    <td>nama</td>
                    <td>Alamat</td>
                </thead>
           
            {daftarNama.map((daftar,indeks)=>
                <tr key={indeks}>
                    <td>
                        {daftar.nama}
                    </td>
                    <td>
                        {daftar.alamat}
                    </td>
                </tr>        
            )}
             </table>
        </div>
    )
}
export default ShowTabel