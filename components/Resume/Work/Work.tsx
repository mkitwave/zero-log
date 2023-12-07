import { Box } from "../Common";
import { Company } from "./Company";

export const Work = () => {
  return (
    <Box className="flex flex-col gap-y-14">
      <h3 className="font-bold text-4xl">Work Experience</h3>
      <Company
        name="마플코퍼레이션"
        description="2021.10 - 2023.11"
        url="https://www.marpplecorp.com/"
      >
        <p className="leading-loose">
          크리에이터를 위한 커스터마이즈 솔루션을 제공하는 마플코퍼레이션에서
          노코드 NFT 프로젝트 발행 툴인 <b>OMNUUM</b>, 크리에이터 이코노미를
          위한 커뮤니티 툴 <b>CIETY</b>를 개발했습니다.
          <br />두 서비스 모두 시작 단계에서 합류해 기획/디자인 레벨까지
          참여하여 유저에게 더 나은 가치를 전달하는 데 폭넓게 기여하였습니다.
          <br /> 개발 아티클 공유 문화 조성, 코드 리뷰 의무화, 배포 알림 등의
          슬랙 봇 제작, 팀 온보딩 가이드 문서화 등의 활동으로
          <b> 동료와 함께 성장하는 환경</b>, <b>병목 없는 협업 환경</b>을 만들기
          위해 노력하였습니다.
        </p>
      </Company>
    </Box>
  );
};
