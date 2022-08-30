import SimpleImageSlider from "react-simple-image-slider";
import Anant4 from '../../assets/images/Anant1.jpeg'
import Anant5 from '../../assets/images/AnantGray.jpeg'
import Anant1 from '../../assets/images/Anant2.jpeg'
import Anant2 from '../../assets/images/Anant3.jpeg'
import Anant3 from '../../assets/images/Anant4.jpeg'
import Anant6 from '../../assets/images/Anant6.jpeg'

const images = [
  { url: Anant1 },
  { url: Anant2 },
  { url: Anant3 },
  { url: Anant4 },
  { url: Anant5 },
  { url: Anant6 },
];

export const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={500}
        height={300}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
        loop={true}
      />
    </div>
  );
}

