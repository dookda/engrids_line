import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Chart from './components/Chart'
import Dropdown from './components/Dropdown'

const App = () => {

    const [staname, setStaname] = useState('station_02');

    console.log(staname);


    return (
        <div className='container mt-5'>
            <Dropdown setStaname={setStaname} />
            <Chart staname={staname} param='deep' label='ระดับน้ำ' unit='cm' color="#d53e4f" />
            <Chart staname={staname} param='humidity' label='ความชื้นสัมพัทธ์' unit='%' color="#fc8d59" />
            <Chart staname={staname} param='temperature' label='อุณหภูมิ' unit='°C' color="#3288bd" />
        </div>
    )
}

export default App