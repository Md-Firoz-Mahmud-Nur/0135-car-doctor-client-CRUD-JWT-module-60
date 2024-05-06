const Banner = () => {
  return (
    <div className="carousel h-[600px]  w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="../../../../assets/images/banner/1.jpg"
          className="w-full rounded-xl"
        />
        <div className="to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 flex h-full items-center rounded-xl bg-gradient-to-r from-[#151515]">
          <div className="w-1/2 space-y-7 pl-12 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
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
        <img
          src="../../../../assets/images/banner/2.jpg"
          className="w-full rounded-xl"
        />
        <div className="to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 flex h-full items-center rounded-xl bg-gradient-to-r from-[#151515]">
          <div className="w-1/2 space-y-7 pl-12 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
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
        <img
          src="../../../../assets/images/banner/3.jpg"
          className="w-full rounded-xl"
        />
        <div className="to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 flex h-full items-center rounded-xl bg-gradient-to-r from-[#151515]">
          <div className="w-1/2 space-y-7 pl-12 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
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
        <img
          src="../../../../assets/images/banner/4.jpg"
          className="w-full rounded-xl"
        />
        <div className="to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 flex h-full items-center rounded-xl bg-gradient-to-r from-[#151515]">
          <div className="w-1/2 space-y-7 pl-12 text-white">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
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
