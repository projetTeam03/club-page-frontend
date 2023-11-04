import React from "react";
import { StListWrap } from "./stProjectList";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const item1 = {
    id: 1,
    src: "https://www.sopt.org/_next/image?url=https%3A%2F%2Fs3.ap-northeast-2.amazonaws.com%2Fsopt-makers-internal%2F%2Fprod%2Fimage%2Fproject%2F202113f1-c798-4c60-beb6-eb20faecd9ed-KakaoTalk_20230528_125513752_02.jpg&w=1920&q=7",
    title: "동네포착",
    view: "45회",
    description: "지금 내 주변에 이런 일이!? 동네포착👀",
    skills: [
      "icon__tech-stack--nextjs.svg",
      "icon__tech-stack--spring.svg",
      "icon__tech-stack--swift.svg",
      "icon__tech-stack--mysql.svg",
      "icon__tech-stack--graphql.svg",
    ],
  };
  const item2 = {
    id: 2,
    src: "https://www.sopt.org/_next/image?url=https%3A%2F%2Fs3.ap-northeast-2.amazonaws.com%2Fsopt-makers-internal%2F%2Fprod%2Fimage%2Fproject%2Fe96f89d5-8e9c-4677-b933-b8a232f246dc-26.png&w=1920&q=75",
    title: "Re;cord",
    view: "41회",
    description: "스쳐가는 인연들을 추억하는 인간관계 아카이빙 서비스",
    skills: [
      "icon__tech-stack--swift.svg",
      "icon__tech-stack--kotlin.svg",
      "icon__tech-stack--reactnative.svg",
      "icon__tech-stack--python.svg",
      "icon__tech-stack--mysql.svg",
    ],
  };
  const item3 = {
    id: 3,
    src: "https://www.sopt.org/_next/image?url=https%3A%2F%2Fs3.ap-northeast-2.amazonaws.com%2Fsopt-makers-internal%2F%2Fprod%2Fimage%2Fproject%2F76b54d6c-8e51-47e5-911c-0c5e3fc91fbf-%E1%84%89%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC.png&w=1920&q=75",
    title: "온사이즈 (OWNSIZE)",
    view: "39회",
    description: "쉽고 똑똑한 나만의 쇼핑 도우미, 온사이즈",
    skills: [
      "icon__tech-stack--swift.svg",
      "icon__tech-stack--kotlin.svg",
      "icon__tech-stack--reactnative.svg",
      "icon__tech-stack--nestjs.svg",
      "icon__tech-stack--mysql.svg",
    ],
  };
  const item4 = {
    id: 4,
    src: "https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220407%2Fmain_477.png&w=1920&q=75",
    title: "내가HAMA",
    view: "32회",
    description:
      "개개인들이 요청과 답변을 통해 상호적으로 대리만족을 시켜주는 서비스입니다.",
    skills: [
      "icon__tech-stack--react.svg",
      "icon__tech-stack--spring.svg",
      "icon__tech-stack--mysql.svg",
      "icon__tech-stack--aws.svg",
      "icon__tech-stack--figma.svg",
    ],
  };
  const item5 = {
    id: 5,
    src: "https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_carrot.png&w=1920&q=75",
    title: "당근플래너",
    view: "30회",
    description:
      "안드로이드 앱 출시까지 완료된 뽀모도로 타이머 기반의 집중력 관리 서비스",
    skills: [
      "icon__tech-stack--react.svg",
      "icon__tech-stack--spring.svg",
      "icon__tech-stack--kotlin.svg",
      "icon__tech-stack--mysql.svg",
      "icon__tech-stack--aws.svg",
    ],
  };
  const item6 = {
    id: 6,
    src: "https://www.sopt.org/_next/image?url=https%3A%2F%2Fs3.ap-northeast-2.amazonaws.com%2Fsopt-makers-internal%2F%2Fprod%2Fimage%2Fproject%2Fec01d062-eb14-4513-aa59-3e80b6d62af6-thumbnail.png&w=1920&q=75",
    title: "Cherish",
    view: "27회",
    description: "소중한 사람들을 위한 연락관리 서비스 Cherish",
    skills: [
      "icon__tech-stack--react.svg",
      "icon__tech-stack--spring.svg",
      "icon__tech-stack--swift.svg",
      "icon__tech-stack--kotlin.svg",
      "icon__tech-stack--mysql.svg",
    ],
  };

  return (
    <StListWrap>
      <ProjectItem items={item1} />
      <ProjectItem items={item2} />
      <ProjectItem items={item3} />
      <ProjectItem items={item4} />
      <ProjectItem items={item5} />
      <ProjectItem items={item6} />
    </StListWrap>
  );
};

export default ProjectList;
