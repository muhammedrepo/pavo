import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.header`
  background: linear-gradient(rgba(197, 234, 249, 1), rgba(255, 255, 255, 1));

  ${tw`py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32`}

  .container {
    ${tw`px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8`}
  }
  .hero-content {
    ${tw`mb-16 lg:mt-32 xl:mt-40 xl:mr-12`}
  }
`;
