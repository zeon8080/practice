import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickLists = () => {
    router.push("/boardLists");
  };

  const onClickNew = () => {
    router.push("/boardWrite");
  };

  const Container = styled.div`
    width: 200px;
    height: 708px;
    display: flex;
    flex-direction: row;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.05));
    background-color: #ffffff;
    margin-right: 20px;
  `;

  const SideContainer = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: left;
  `;

  const SideWrapper = styled.div`
    margin: 30px 20px 0 20px;
  `;

  const SideTitleBox = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const SideTitle = styled.div`
    font-size: 16px;
    font-weight: 800;
    margin-left: 5.95px;
  `;

  const DivideLine = styled.div`
    width: 100%;
    border-top: 1px solid #e5e5e5;
    margin-top: 30px;
    margin-bottom: 10px;
  `;
  const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  `;

  const MoveLists = styled.div`
    cursor: pointer;
    font-size: 14px;
    color: #999999;
    margin-left: 10px;
  `;

  const MoveNew = styled.div`
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    color: #000000;
    margin-left: 10px;
  `;

  return (
    <Container>
      <SideContainer>
        <SideWrapper>
          <SideTitleBox>
            <img src="/talkerImg.png"></img>
            <SideTitle>TALKR</SideTitle>
          </SideTitleBox>

          <DivideLine></DivideLine>
          <ButtonRow>
            <img src="/Union.png"></img>
            <MoveLists onClick={onClickLists}>전체 글 보기</MoveLists>
          </ButtonRow>
          <ButtonRow>
            <img src="/Vector.png"></img>
            <MoveNew onClick={onClickNew}>새 글 작성</MoveNew>
          </ButtonRow>
        </SideWrapper>
      </SideContainer>
    </Container>
  );
}
