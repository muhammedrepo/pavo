import styled from "styled-components";

export const Wrapper = styled.div`
  .cards-1 {
    padding-top: 4rem;
    padding-bottom: 1.5rem;
    text-align: center;
  }

  .cards-1 .card {
    margin-bottom: 3.5rem;
    padding: 3.125rem 1rem 2.125rem 1rem;
    border: none;
    border-radius: 16px;
    background-color: #f1f9fc;
  }
  .cards-1 .card-image {
    margin-bottom: 1.5rem;
  }

  .cards-1 .card-image img {
    width: 70px;
    height: 70px;
    margin-right: auto;
    margin-left: auto;
  }

  .cards-1 .card-body {
    padding: 0;
  }

  .cards-1 .card-title {
    margin-bottom: 0.375rem;
  }

  /* Media Query */

  @media (min-width: 1024px) {
    .cards-1 .card {
      display: inline-block;
      width: 306px;
      vertical-align: top;
    }
    .cards-1 .card:nth-of-type(3n + 2) {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }

  @media (min-width: 1280px) {
    .cards-1 .card {
      width: 342px;
      padding-right: 2.875rem;
      padding-left: 2.875rem;
    }

    .cards-1 .card:nth-of-type(3n + 2) {
      margin-right: 1.5rem;
      margin-left: 1.5rem;
    }
  }
`;
