import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <S.WriteContainer>
      <S.WriteWrapper>
        <S.WriteTitle>
          {props.isEdit ? "헌 글 수정" : "새 글 작성"}
        </S.WriteTitle>
        <S.DivideLine></S.DivideLine>
        <div>
          <S.TitleInputBox>
            <S.WriteSpan>제목</S.WriteSpan>
            <S.TitleInput
              type="text"
              onChange={props.onChangeTitle}
              defaultValue={props.data?.fetchBoard.title ?? ""}
            />
          </S.TitleInputBox>

          <S.ContentsInputBox>
            <S.ContentsSpan>내용</S.ContentsSpan>
            <S.ContentsInput
              onChange={props.onChangeContents}
              defaultValue={props.data?.fetchBoard.contents ?? ""}
            />
          </S.ContentsInputBox>
          <S.ImgBox>
            <S.ImgSpan>이미지</S.ImgSpan>
            <S.ImgBackBox>
              <img src="/ImgBack.png" />
              <img src="/ImgBack.png" />
              <img src="/ImgBack.png" />
            </S.ImgBackBox>
          </S.ImgBox>

          <S.WriterInfoBox>
            <S.WriterSpan>작성자</S.WriterSpan>
            <S.WriterInfoInput
              type="text"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
            />
            <S.PasswordSpan>비밀번호</S.PasswordSpan>
            <S.WriterInfoInput
              type="password"
              onChange={props.onChangePassword}
            />
          </S.WriterInfoBox>
        </div>
      </S.WriteWrapper>
      <S.ButtonBox>
        <S.SubmitBtn
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitBtn>
        <S.NoBtn
          onClick={props.isEdit ? props.onClickEditCancel : props.onClickCancel}
        >
          취소
        </S.NoBtn>
      </S.ButtonBox>
    </S.WriteContainer>
  );
}
