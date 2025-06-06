import ImageSlider from "./ImageCarousel"
import Content from "./Content"
import SessionalProducts from "./SessionalProducts"
import WhychooseUse from "./WhychooseUse"

const Home = () => {
  return (
    <div className="pt-[80px] sm:pt-[100px] md:pt-[111px]">
      <ImageSlider/>
      <Content/>
      <SessionalProducts/>
      <WhychooseUse/>
    </div>
  )
}

export default Home
