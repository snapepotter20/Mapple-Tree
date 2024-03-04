import React , {useState} from 'react';
import HomeMain from './HomeMain/page';
import HomeClientDetails from './HomeClientDetails/page';

const Home = ({homePage,setHomePage}) => {
  return (
    <div className='bg-white rounded-xl m-5 min-h-[100vh]'>
     {
        homePage === "initialView"  && <HomeMain  homePage={homePage} setHomePage={setHomePage}/>
     } 
     {homePage === "HomeClientDetails"  && <HomeClientDetails  homePage={homePage} setHomePage={setHomePage}/>}
    </div>
  )
}

export default Home
