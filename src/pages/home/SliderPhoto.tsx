import { Container } from '@chakra-ui/react';
import Flickity from 'react-flickity-component';

const imagesPathList = [
  '/images2/1.jpg',
  '/images2/2.jpg',
  '/images2/3.jpg',
  '/images2/4.jpg',
  '/images2/5.jpg',
  '/images2/6.jpg',
  '/images2/7.jpg',
  '/images2/8.jpg',
  '/images2/9.jpg',
  '/images2/10.jpg',
  '/images2/11.jpg',
  '/images2/12.jpg',
];

const imagesTitleList = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
];

const imagesIdList = Array.from({ length: 12 }, (_, i) => i + 1);

export const SliderPhoto = () => {
  const flickityOptions = {
    initialIndex: 6,
    wrapAround: true,
    autoPlay: 4000,
    contain: true,
    selectedAttraction: 0.01,
    friction: 0.15,
  };

  const photoInSlider = {
    id: imagesIdList,
    title: imagesTitleList,
    image: imagesPathList,
  };

  return (
    <Container variant="slider">
      <Flickity
        className="Slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {photoInSlider.id.map((index) => {
          return (
            <div key={index} className="Plate">
              <div>
                <img src={photoInSlider.image[index - 1]} />
                <h2>{photoInSlider.title[index - 1]}</h2>
              </div>
            </div>
          );
        })}
      </Flickity>
    </Container>
  );
};
