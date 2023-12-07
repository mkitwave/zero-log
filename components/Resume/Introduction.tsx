import { Box } from "./Common";

export const Introduction = () => {
  return (
    <Box className="flex-col gap-y-6 flex">
      <p className="text-4xl leading-relaxed">
        안녕하세요,
        <br />
        <b>2년차 프론트엔드 개발자 이예서</b>입니다.
      </p>
      <ul className="flex gap-y-1 flex-col text-lg">
        <li>
          타인에게 망설임 없이 추천할 수 있는, 일상 속에 자연스럽게 스며드는
          제품을 개발하는 것을 목표로 하고 있습니다.
        </li>
        <li>
          좋은 제품을 만들기 위해 유저의 상황에 몰입하여 최선의 방향을 고민하고,
          적극적으로 커뮤니케이션합니다.
        </li>
        <li>유연하게 변화에 적응하며, 새로운 도전을 즐깁니다.</li>
      </ul>
      <div className="flex">
        {[
          { name: "Mail", url: "mailto:mkitwave@gmail.com" },
          { name: "Github", url: "https://github.com/mkitwave" },
          { name: "Twitter", url: "https://twitter.com/1EEZER0" },
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/%EC%98%88%EC%84%9C-%EC%9D%B4-9b0a3a213/",
          },
        ].map(({ name, url }) => (
          <>
            <a
              key={name}
              target="_blank"
              href={url}
              className="px-2 first:pl-0 text-sm underline"
            >
              {name}
            </a>
            <span className="last:hidden">|</span>
          </>
        ))}
      </div>
    </Box>
  );
};
