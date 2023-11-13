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
      <div className="h-screen w-full">
        <div className="md:px-6 md:py-2 p-4 flex flex-col h-full w-full">
          <Header />
          <div className="h-0 grow w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
