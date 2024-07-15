import React from 'react'
import Footer from '../components/Footer.jsx'
import MyNavbar from '../components/MyNavbar'
import BannerCorrousel from '../components/BannerCorrousel.jsx'
import FilterBar from '../components/FilterBar.jsx'

function Home(props) {
  return (
    <>
        <MyNavbar/>
        <FilterBar listOptions={props.endpoint}/>
    </>   
  )
}

export default Home