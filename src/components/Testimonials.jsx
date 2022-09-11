import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { reviews } from "../constants";

import { Wrapper } from "../assets/wrapper/TestimonialStyles";

const Testimonials = () => {
  return (
    <Wrapper>
      <div className="slider-1 py-32 bg-[#f1f9fc]">
        <div className="container px-4 sm:px-8">
          <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">
            What do users think about Pavo
          </h2>

          <div className="slider-container text-center">
            <Swiper
              spaceBetween={70}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                767: {
                  slidesPerView: 2,
                },
                375: {
                  slidesPerView: 1,
                },
              }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {reviews.map((review) => {
                const { id, img, content, name } = review;
                return (
                  <SwiperSlide>
                    <div key={id} className="card">
                      <img className="card-image" src={img} alt="alternative" />
                      <div className="card-body">
                        <p className="italic mb-3">{content}</p>
                        <p className="testimonial-author">{name}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
