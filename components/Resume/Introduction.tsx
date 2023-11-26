import { Box } from "./Common";

export const Introduction = () => {
  return (
    <Box className="flex-col gap-y-6 flex">
      <p className="text-4xl leading-relaxed">
        안녕하세요,
        <br />
        <b>이예서</b>입니다.
      </p>
      <div className="text-lg leading-loose">
        <ul className="flex gap-y-3 flex-col">
          <li>
            서울에서 <b>2년차 프론트엔드 개발자</b>로 일하고 있습니다.
            <br />
          </li>
          <li>
            일상 속에 스며드는 프로덕트를 만드려면,
            <br /> 유저의 상황에 몰입하여 최선의 방향을 고민하고 개선해야 한다고
            믿습니다. <br />
            유연하게 변화에 적응하며, 새로운 도전을 즐깁니다.
          </li>
        </ul>
      </div>
    </Box>
  );
};
