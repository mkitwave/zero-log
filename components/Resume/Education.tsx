import { Box } from "./Common";

export const Education = () => (
  <Box className="flex flex-col gap-y-14">
    <h3 className="font-bold text-4xl">Education</h3>
    <div className="flex flex-col gap-y-2">
      <h4 className="text-3xl font-bold">
        <a
          target="_blank"
          href="https://www.e-mirim.hs.kr/information/department.do?sch_tap=1"
        >
          미림여자정보과학고등학교
        </a>
      </h4>
      <span>2019.03 - 2021.01</span>
      <p>
        IT 마이스터고등학교에서 기본적인 프론트엔드, 백엔드, 디자인 지식들을
        학습하였으며 졸업 전시, 교내 어워드 등에서 다양한 팀 프로젝트를 경험한
        바 있습니다.
      </p>
    </div>
  </Box>
);
