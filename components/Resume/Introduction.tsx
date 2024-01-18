import { SB } from "../Common";
import { Box } from "./Common";

export const Introduction = () => {
  return (
    <Box className="flex-col gap-y-6 flex">
      <p className="text-4xl leading-relaxed">
        안녕하세요,
        <br />
        <b>웹 프론트엔드 개발자 이예서</b>입니다.
      </p>
      <ul className="flex gap-y-1 flex-col text-lg list-disc list-inside">
        <li>
          <SB>주도적이고 책임감 있게 일할 수 있는 환경</SB>을 좋아합니다.
        </li>
        <li>
          신뢰받는 동료가 되기 위해 <SB>생산성 및 기술적 역량</SB>을
          성장시킵니다.
        </li>
        <li>
          본인 또는 팀의 <SB>문제에 대해 객관적으로 관찰, 판단</SB>하기 위해
          노력하며, 더 나은 방향을 고민합니다.
        </li>
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
          <div key={name}>
            <a
              key={name}
              target="_blank"
              href={url}
              className="px-2 first:pl-0 text-md underline"
            >
              {name}
            </a>
            <span className="last:hidden">|</span>
          </div>
        ))}
      </div>
    </Box>
  );
};
