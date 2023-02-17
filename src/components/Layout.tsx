import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Wrapper } from "./Wrapper";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}
