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
        <div className='shadow-sm p-3 mb-3 bg-body rounded'>
            <div className='card-body'>
                <select className='form-select'
                    value={selected}
                    onChange={handleChange}
                    selected={selected}>
                    <option value="station_01">01</option>
                    <option value="station_02" >02</option>
                    <option value="station_03">03</option>
                    <option value="station_04">04</option>
                    <option value="station_05">05</option>
                    <option value="station_06">06</option>
                    <option value="station_07">07</option>
                    <option value="station_08">08</option>
                    <option value="station_09">09</option>
                </select>
            </div>
        </div>
    )
}

export default Dropdown