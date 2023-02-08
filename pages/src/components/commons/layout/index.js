import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export default function Layout(props) {
  const router = useRouter();
  const HIDDEN_BANNER = [
    "/boardWrite",
    `/boardDetail/${router.query.boardId}/edit`,
  ];

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    <Container>
      <LayoutNavigation />
      <div>
        {!isHiddenBanner && <LayoutBanner />}
        <div>{props.children}</div>
      </div>
    </Container>
  );
}
