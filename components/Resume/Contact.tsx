import { Box } from "./Common";

export const Contact = () => {
  return (
    <Box className="flex text-sm text-gray-500 w-full justify-center">
      {[
        { name: "Mail", url: "mailto:mkitwave@gmail.com" },
        { name: "Blog", url: "https://zerolog.vercel.app/" },
        { name: "Github", url: "https://github.com/mkitwave" },
        { name: "Twitter", url: "https://twitter.com/1EEZER0" },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/%EC%98%88%EC%84%9C-%EC%9D%B4-9b0a3a213/",
        },
      ].map(({ name, url }) => (
        <>
          <a key={name} target="_blank" href={url} className="tracking-wider">
            {name}
          </a>
          <span className="px-4 last:hidden">|</span>
        </>
      ))}
    </Box>
  );
};
