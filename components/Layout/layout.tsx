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
      <div className="h-screen md:p-10 p-4 flex flex-col">
        <Header />
        <div className="h-0 grow w-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
