import { React } from "react";
import { useSwiperSlide } from "swiper/react";

export default function SlideTitle() {
  const swiperSlide = useSwiperSlide();

  return <> {swiperSlide.isActive ? "active" : "not active"}</>;
}
