import React from "react";

export default class FormElement extends React.Component {
    render() {
        return (
            <div style={{margin: '100px auto', border: '1px solid gray', padding: '20px'}}>
                <form>
            <label> 
            Nama: <input type="text" />

            </label>
            <label>
            Jurusan: <select>
                <option value="">Pilih Jurusan</option>
                <option value="Teknik Informatika">Teknik Informatika</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Desain Kompunikasi">Desain Komunikasi</option>
                </select> 
            </label>
            <label>
                Jenis Kelamin:
                <input type="radio" value="Laki-Laki"/>Laki-Laki
                <input type="radio" value="Perempuan"/> Perempuan
            </label>
            <br/>
            <br/>
            <label>
                Alamat: <textarea cols="30" rows="10" />
            </label>
            <label>
                Member: <input type="checkbox" value={true} />
            </label>
        </form>
            </div>
            
        )
    }
}