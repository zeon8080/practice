import styled from "@emotion/styled";

export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 764px;
  height: 648px;
  background-color: #ffffff;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.05));
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05); */
`;

export const WriteWrapper = styled.div`
  margin: 40px 40px 0px 40px;

  border-radius: 10px; ;
`;

export const WriteTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-top: 1px solid #6400ff;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const TitleInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriteSpan = styled.div`
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
  width: 60px;
  height: 20px;
  text-align: left;
`;

export const ContentsInputBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ContentsSpan = styled.div`
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
  width: 60px;
  height: 20px;
  text-align: left;
  margin-top: 35px;
`;

export const TitleInput = styled.input`
  margin-left: 20px;
  width: 604px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(229, 229, 229, 1);
`;

export const ContentsInput = styled.textarea`
  width: 604px;
  height: 240px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid rgba(229, 229, 229, 1);
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImgBackBox = styled.div`
  margin-top: 20px;
`;

export const ImgSpan = styled.div`
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
  width: 60px;
  height: 20px;
  text-align: left;
  margin-right: 20px;
  margin-top: 25px;
`;

export const WriterInfoBox = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  margin-top: 20px;
  margin-bottom: 73px;
`;

export const WriterSpan = styled.div`
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
  width: 60px;
  height: 20px;
`;
export const PasswordSpan = styled.div`
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
  width: 60px;
  height: 20px;
  margin-left: 40px;
`;

export const WriterInfoInput = styled.input`
  width: 242px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(229, 229, 229, 1);
  margin-left: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const SubmitBtn = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 30px;
  background-color: #6400ff;
  width: 80px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  color: white;
  margin-right: 5px;
`;

export const NoBtn = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 30px;
  background-color: #999999;
  width: 80px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  color: white;
  margin-left: 5px;
`;
