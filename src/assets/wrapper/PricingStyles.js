import styled from "styled-components";
import { pricingBackground } from "../index";

export const Wrapper = styled.section`
  .cards-2 {
    position: relative;
    padding-top: 8rem;
    background: linear-gradient(rgba(50, 60, 70, 0.9), rgba(50, 60, 70, 0.9)),
      url(${pricingBackground}) center center no-repeat;
    background-size: cover;
    text-align: center;
  }
  .cards-2 .card {
    position: relative;
    display: block;
    background-color: #ffffff;
    max-width: 330px;
    margin-right: auto;
    margin-bottom: 6rem;
    margin-left: auto;
    border: 1px solid #bcc4ca;
    border-radius: 8px;
  }
  .cards-2 .card .card-body {
    padding: 3rem 1.75rem 2.25rem 1.75rem;
  }
  .cards-2 .card .card-title {
    margin-bottom: 1rem;
    color: #eb427e;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.875rem;
    text-align: center;
  }
  .cards-2 .card p {
    margin-bottom: 1.25rem;
    text-align: left;
  }
  .cards-2 .card .value {
    color: #252c38;
    font-weight: 600;
    font-size: 5rem;
    line-height: 5rem;
    text-align: center;
  }
  .cards-2 .card .currency {
    margin-right: 0.375rem;
    color: #252c38;
    font-size: 2rem;
    vertical-align: 80%;
  }
  .cards-2 .card .frequency {
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    text-align: center;
  }
  .cards-2 .card .button-wrapper {
    position: absolute;
    right: 0;
    bottom: -1.5rem;
    left: 0;
    text-align: center;
  }
  .cards-2 .card .btn-solid-reg:hover {
    background-color: #ffffff;
  }

  @media (min-width: 1024px) {
    .cards-2 .card {
      display: inline-block;
      max-width: 100%;
      width: 312px;
      vertical-align: top;
    }

    .cards-2 .card:nth-of-type(3n + 2) {
      margin-right: 0.375rem;
      margin-left: 0.375rem;
    }
  }

  @media (min-width: 1280px) {
    .cards-2 .card {
      width: 335px;
    }

    .cards-2 .card:nth-of-type(3n + 2) {
      margin-right: 2.25rem;
      margin-left: 2.25rem;
    }

    .cards-2 .card .card-body {
      padding-right: 2.25rem;
      padding-left: 2.25rem;
    }
  }
`;
