import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Dropdown = ({ setStaname }) => {
    const [selected, setSelected] = useState('station_02')
    const handleChange = (e) => {
        console.log(e.target.value);
        setStaname(e.target.value)
        setSelected(e.target.value)
    }

    return (
        <div>
            <select className='form-select'
                value={selected}
                onChange={handleChange}
                selected={selected}>
                <option value="station_01">01</option>
                <option value="station_02" >02</option>
                <option value="station_03">03</option>
                <option value="station_04">04</option>
                <option value="station_05">05</option>
            </select>


        </div>
    )
}

export default Dropdown