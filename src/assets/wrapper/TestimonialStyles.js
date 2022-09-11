import styled from "styled-components";

export const Wrapper = styled.section`
  .slider-1 .slider-container {
    position: relative;
  }

  .slider-1 .swiper-container {
    position: static;
    width: 86%;
    text-align: center;
  }

  .slider-1 .swiper-button-prev:focus,
  .slider-1 .swiper-button-next:focus {
    /* even if you can't see it chrome you can see it on mobile device */
    outline: none;
  }

  .slider-1 .card {
    position: relative;
    border: none;
    background-color: transparent;
  }

  .slider-1 .card-image {
    width: 80px;
    height: 80px;
    margin-right: auto;
    margin-bottom: 1.25rem;
    margin-left: auto;
    border-radius: 50%;
  }

  .slider-1 .testimonial-author {
    margin-bottom: 0;
    color: #252c38;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1024px) {
    /* General Styles */
    .slider-1 .swiper-container {
      width: 92%;
    }

    .slider-1 .swiper-button-prev {
      left: -16px;
      width: 22px;
      background-size: 22px 34px;
    }

    .slider-1 .swiper-button-next {
      right: -16px;
      width: 22px;
      background-size: 22px 34px;
    }
  }
`;
