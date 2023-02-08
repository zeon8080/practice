import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <div>
      <S.DetailContainer>
        <S.DetailWrapper>
          <S.TitleSpan>{props.data?.fetchBoard?.title}</S.TitleSpan>
          <S.DivideLine></S.DivideLine>
          {/* <S.ImgBox>
            <img src="/image01.png" />
            <S.CenterImg>
              <img src="image02.png" />
            </S.CenterImg>

            <img src="image03.png" />
          </S.ImgBox> */}
          <S.ContentsBox>
            <S.WriterBox>
              <div>
                <img src="/icon.png" />
              </div>

              <S.WriterSpan>{props.data?.fetchBoard?.writer}</S.WriterSpan>
            </S.WriterBox>
            <S.ContentsInput>
              {props.data?.fetchBoard?.contents}
            </S.ContentsInput>
          </S.ContentsBox>
        </S.DetailWrapper>
      </S.DetailContainer>
      <S.ButtonBox>
        <S.ListBtn onClick={props.onClickToLists}>글목록</S.ListBtn>
        <S.EditBtn onClick={props.onClickEdit}>수정</S.EditBtn>
        <S.DeleteBtn onClick={props.onClickDelete}>삭제</S.DeleteBtn>
      </S.ButtonBox>
    </div>
  );
}
