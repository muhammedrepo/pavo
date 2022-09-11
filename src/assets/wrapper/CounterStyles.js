import styled from "styled-components";

export const Wrapper = styled.section`
  .counter {
    padding-top: 2rem;
    padding-bottom: 4.5rem;
    text-align: center;
  }

  .counter #counter {
    margin-bottom: 0.75rem;
  }

  .counter #counter .cell {
    display: inline-block;
    width: 120px;
    margin-right: 1.75rem;
    margin-bottom: 3.5rem;
    margin-left: 1.75rem;
    vertical-align: top;
  }

  .counter #counter .counter-value {
    color: #252c38;
    font-weight: 700;
    font-size: 3.25rem;
    line-height: 3.75rem;
    vertical-align: middle;
  }

  .counter #counter .counter-info {
    margin-bottom: 0;
    font-size: 0.875rem;
    vertical-align: middle;
  }

  @media (min-width: 1280px) {
    .counter #counter .cell {
      margin-right: 2.5rem;
      margin-left: 2.5rem;
    }

    .counter #counter .counter-value {
      font-size: 3.75rem;
      line-height: 4.25rem;
    }
  }
`;
