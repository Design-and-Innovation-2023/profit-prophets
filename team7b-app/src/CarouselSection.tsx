

import Carousel from "nuka-carousel";

const App = () => {
  return (
    <Carousel>
      <img src={process.env.PUBLIC_URL + '/teamPicture.jpg'} />
      <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} />
      <img src={process.env.PUBLIC_URL + '/teamPicture.jpg'} />
      <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} />
      <img src={process.env.PUBLIC_URL + '/teamPicture.jpg'} />
      <img src={process.env.PUBLIC_URL + '/placeholder.jpeg'} />
    </Carousel>
  )
}