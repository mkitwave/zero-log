type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen w-full flex flex-col lg:px-8 px-4">
      <div className="flex flex-col w-full h-0 grow">
        {children}
      </div>
    </div>
  );
};
