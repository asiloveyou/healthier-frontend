import styled from "styled-components";
import LifeComponent from "./LifeComponent";
import Title from "../common/Title";

const Container = styled.section`
  padding-top: 9.6rem;
  padding-bottom: 12rem;
`;
const Contents = styled.section``;
const TitleBox = styled.section`
  margin: 2rem 2.4rem;

  width: calc(100vw - 4.8rem);
`;

const life_arr = [
  {
    icon: "⏰",
    title: "일정한 시각에 일어나세요",
    contents:
      "수면-각성 리듬을 일정하게 유지하기 위해 일정한 시간에 자는 것보다 일정한 시간에 일어나는 것이 더 중요해요.",
  },
  {
    icon: "☕️",
    title: "오전 10시 이후 카페인 삼가기",
    contents:
      "카페인의 각성효과가 14시간까지 지속되므로 아침 10시 이후에는 카페인 섭취를 삼가세요.",
  },
  {
    icon: "🍷",
    title: "알코올 삼가기",
    contents:
      "알코올은 수면유도효과가 있으나 신경을 각성시켜 수면 유지에 문제가 생겨 새벽에 깨게 되어요.",
  },
  {
    icon: "😴",
    title: "낮잠 삼가기",
    contents:
      "낮2-3시경 15분내외 낮잠은 괜찮아요. 그러나 저녁시간의 수면의 질을 높기 위해 오후 늦게 낮잠을 자는 것은 피하세요.",
  },
];

const LifePage = () => {
  return (
    <Container>
      <Contents>
        <TitleBox>
          <Title highlight="생활습관" text={"으로\n증상을 개선해보아요"} />
        </TitleBox>
        {life_arr.map((life, idx) => (
          <LifeComponent
            key={idx}
            idx={idx}
            icon={life.icon}
            title={life.title}
            content={life.contents}
          />
        ))}
      </Contents>
    </Container>
  );
};

export default LifePage;
