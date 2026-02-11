import React from 'react'
import Slider from '../components/slider1/slider'
import Slider2 from '../components/sider2/slider'
import data from '../data/data.json'

const Home = () => {
  console.log(data);
  return (
    <div>
      <Slider/>
      <Slider2/>
    </div>
  )
}

export default Home