import { styled } from "styled-components";

export const StFooter = styled.div`
  width: 100%;
  height: 18rem;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  footer {
    display: flex;
    justify-content: space-between;
    width: 120rem;
    @media (max-width: 1430px) {
      width: 80%;
    }
    @media (max-width: 620px) {
      flex-direction: column;
    }
    .footer_box {
      display: flex;
      align-items: flex-end;
      gap: 2rem;
      flex-direction: column;
      justify-content: center;
      @media (max-width: 620px) {
        align-items: center;
        gap: 0.6rem;
      }
      &_part {
        display: flex;
        gap: 1.6rem;

        b {
          font-size: 1.4rem;
          font-weight: 600;
        }
        ul {
          display: flex;
          gap: 1rem;
          @media (max-width: 620px) {
            gap: 1.6rem;
          }
          li {
            display: flex;
            justify-content: flex-start;
            color: #999;
            font-size: 1.4rem;
          }
        }
      }
    }
    .column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.6rem;
      @media (max-width: 620px) {
        align-items: center;
      }
    }
    img {
      cursor: pointer;
      width: 86%;
      margin-bottom: 1.6rem;
      @media (max-width: 620px) {
        width: 32%;
      }
    }
    a {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.4rem;
      text-decoration: none;
      color: #888;
      font-weight: 600;
      transition: 0.25s ease-in-out;
      svg {
        padding-bottom: 0.4rem;
      }
      &:hover {
        color: #000;
      }
    }
  }
`;
