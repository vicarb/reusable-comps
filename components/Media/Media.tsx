import Carousel from "../Carousel/Carousel";



const images = [
  "https://via.placeholder.com/500x250?text=Image%201",
  "https://via.placeholder.com/500x250?text=Image%202",
  "https://via.placeholder.com/500x250?text=Image%203",
];

const Media = () => {
  return <Carousel images={images} />;
};

export default Media;