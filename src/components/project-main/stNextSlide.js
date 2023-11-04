import { styled } from "styled-components";

export const StSubSlide = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  width: 30%;
  height: 50%;
  .item {
    width: 100%;
    border-radius: 20px;
    img {
      width: 100%;
      height: 300px;
      border-radius: 20px;
    }
    .heart {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      width: 2.5rem;
      height: 2.5rem;
      fill: red;
    }
  }

  /* swiper-container {
        swiper-slide {
          .item {
            width: 100%;
            border-radius: 20px;
            img {
              width: 100%;
              height: 300px;
              border-radius: 20px;
            }
          }
        }
      } */
`;
