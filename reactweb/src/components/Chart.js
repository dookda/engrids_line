import React, { useEffect, useState } from 'react';
import './Chart.css';
import ReactECharts from 'echarts-for-react';
import axios from 'axios'
import moment from 'moment'

const Chart = ({ staname, param, label, unit, color }) => {
    const [data, setData] = useState([])
    console.log(staname);

    let obj = {
        station: `${staname}`,
        param: `${param}`,
        limit: 10000
    }

    let getData = () => {
        axios.post('https://eec-onep.soc.cmu.ac.th/api/wtrl-api.php', obj).then(res => {

            let a = res.data.data.map(i => {
                let ts = moment.utc(moment(i.ts2).subtract(7, 'hour')).format()
                return [ts, Number(i.val) * 1]
            })

            setData(a)
        })
    }

    useEffect(() => {
        getData();
    }, [staname])

    let option = {
        title: {
            text: `${label}`,
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                animation: true
            },
        },
        legend: {
            data: ['Evaporation'],
            left: 10
        },

        axisPointer: {
            link: [
                {
                    xAxisIndex: 'all'
                }
            ]
        },

        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 98,
                end: 100,
                xAxisIndex: [0, 1]
            },
            {
                type: 'inside',
                realtime: true,
                // start: 30,
                // end: 70,
                xAxisIndex: [0, 1]
            }
        ],
        grid: [
            {
                left: 60,
                right: 50,
                // height: '35%'
            }
        ],

        xAxis: {
            type: 'time',
            // boundaryGap: false,
            // data: date
        },
        yAxis: {
            name: `${label}`,
            type: 'value',
            axisLabel: {
                formatter: `{value} ${unit}`
            },
            nameLocation: 'middle',
            nameGap: 48
        },
        series: [
            {
                symbol: 'none',
                type: 'line',
                data: data,
                lineStyle: { color: `${color}` }
            }
        ]
    };

    return (
        <div className='shadow-sm p-3 mb-3 bg-body rounded'>
            <div className='card-body'>
                <button onClick={getData} className='btn btn-light btn-float-right'>refresh</button>
                <ReactECharts
                    option={option}
                    style={{ height: '400px' }}
                    opts={{ renderer: 'svg' }}
                />
            </div>
        </div>
    )
}

export default Chart