import Carousel from 'react-bootstrap/Carousel';
import France from '../../public/images/gallery1.png';
import Greece from '../../public/images/gallery2.png';
import Australia from '../../public/images/gallery3.png';
import '../components/GalleryCard.css';

export default function GalleryCarousel() {
    return (
        <Carousel className='my-3'>
          <Carousel.Item>
            <img src={France} className="d-block w-100 carousel-image" alt="slide image"/>
            <Carousel.Caption className='carousel-caption'>
              <div className='carousel-title'>Paris, France</div>
              <p>The "City of Light" and its Eiffel Tower</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img src={Greece} className="d-block w-100 carousel-image" alt="slide image"/>
            <Carousel.Caption className='carousel-caption'>
              <div className='carousel-title'>Mykonos, Greece</div>
              <p>A slice of paradise</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img src={Australia} className="d-block w-100 carousel-image" alt="slideimage"/>
            <Carousel.Caption className='carousel-caption'>
              <div className='carousel-title'>Sydney, Australia</div>
              <p>
                Darling Harbour & Opera House
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
};