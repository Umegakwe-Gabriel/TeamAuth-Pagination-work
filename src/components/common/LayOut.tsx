import Header from '../static/Header'
import SideBar from '../static/SideBar'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <div>
        <Header/>

        <div className='flex h-[calc(100vh-70px)]'>
            <SideBar />
             <div className='flex justify-end w-full mt-[70px]'>
            <div className='w-[calc(100vw-217px)] pl-2'>
            <Outlet/>
             </div>
            </div>
        </div>
    </div>
  )
}

export default LayOut