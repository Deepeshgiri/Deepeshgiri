import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios'



function Testgraph() {

    const xValues = [50,60,70,80,90,100,110,120,130,140,150];
    const yValues = [7,8,8,9,9,9,10,11,14,14,15];
    const data = [4000, 3000, 2000, null, 1890, 2390, 3490];
const xData = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

      const [xdata, setxdata] = useState ({})
      const [ydata,setydata] = useState({})
const fetchxdata =  axios.get('https://retoolapi.dev/gDa8uC/data')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
const fetchydata = axios.get('https://retoolapi.dev/o5zMs5/data')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})


      useEffect((e)=>{
e.preventDefault()

      },[])
    
  return (
   
    <LineChart
        xAxis={[{ data: xData, scaleType: 'point' }]}
        series={[{ data, connectNulls: true }]}
        height={200}
        margin={{ top: 10, bottom: 20 }}
      />
 
  )
}

export default Testgraph