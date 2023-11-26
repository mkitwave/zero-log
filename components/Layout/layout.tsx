import Meta from "../Common/meta";
import { usePathname } from "next/navigation";
import { Header } from "./header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <Meta />
      <div className="h-screen w-full flex flex-col">
        <Header />
        <div className="md:h-20 h-16" />
        <div className="md:px-6 md:py-2 p-4 flex flex-col w-full h-0 grow">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
