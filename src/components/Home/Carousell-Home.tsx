import Carousel from 'react-bootstrap/Carousel';
import '../../styles/ComponentesHome/Carrousell.scss';

export default function CarouselHome() {
  return (
    <Carousel variant="dark">
    <Carousel.Item interval={5000}>
        <div className='img-carrousell01'></div>
    </Carousel.Item>
    <Carousel.Item interval={5000}>
    <div className='img-carrousell02'></div>
    </Carousel.Item>
    <Carousel.Item interval={5000}>
    <div className='img-carrousell01'></div>
    </Carousel.Item>
  </Carousel>
    );
}
