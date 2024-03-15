import BigContainer from "../components/BigContainer"
import SmallContainer from "../components/SmallContainer"
function Home() {

  return (
    <div className=" min-h-full flex justify-center items-center px-[20px] flex-wrap md:px-[50px]">
      
      <h1 className="pt-8 pb-8 text-4xl text-center leading-[35px] font-medium md:text-5xl md:leading-[53px]"> <span className="bg-gradient-to-r from-[#039571] to-[#4DCE6C] text-transparent bg-clip-text"> Improving</span> the productivity of agricultural enterprises</h1>
      <div>

      <div className="flex flex-col w-full gap-5  md:flex-row pb-5">
        <BigContainer/>
        <BigContainer/> 
  
      </div>
      <div className="flex flex-col w-full gap-5 md:flex-row">
      <SmallContainer/>
      <SmallContainer/>
      <SmallContainer/>
      <SmallContainer/>

      </div>
      </div>


    </div>
  )
}

export default Home
