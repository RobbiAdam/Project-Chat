import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageRoomContainer from '../../components/chatroom/MessageRoomContainer'
const Home = () => {
  return (
    
      <div className=" flex sm:h-[450px] md:h-[550px]  bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
        <Sidebar/>
        <MessageRoomContainer/>
      </div>
    
  )

}

export default Home
