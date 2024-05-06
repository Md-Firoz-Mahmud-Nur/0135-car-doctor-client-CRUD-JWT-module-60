const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="../../../../assets/images/banner/1.jpg" className="w-full" />
        <div className="absolute bottom-0 left-5  right-5 flex -translate-y-1/2 transform justify-end gap-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="../../../../assets/images/banner/2.jpg" className="w-full" />
        <div className="absolute bottom-0 left-5 right-5 flex -translate-y-1/2 transform justify-end  gap-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="../../../../assets/images/banner/3.jpg" className="w-full" />
        <div className="absolute bottom-0 left-5 right-5 flex -translate-y-1/2 transform justify-end  gap-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="../../../../assets/images/banner/4.jpg" className="w-full" />
        <div className="absolute bottom-0 left-5 right-5 flex -translate-y-1/2 transform justify-end  gap-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
