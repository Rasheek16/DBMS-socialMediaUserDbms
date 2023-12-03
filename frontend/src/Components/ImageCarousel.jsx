const ImageCarousel = ({ src }) => {
  return (
    <div className="carousel-item w-full">
      <img src={src} className="w-full" alt="Tailwind CSS Carousel component" />
    </div>
  );
};
export default ImageCarousel;
