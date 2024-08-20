import { cn } from "@/lib/utils";
import { Globe } from "./GridGlobe";
import About from "../About";
import Certs from "../Certs";
import CurrentPojects from "../CurrentPojects";
import Contact from "../Contact";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;

}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(109,109,207,1) 35%, rgba(0,212,255,1) 100%)' 
      }}
    >
      <div className={`${id === 6} && flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}> 
          {spareImg && (
            <img
            src={spareImg}
            alt={spareImg}
            className={cn(imgClassName, 'object-cover, object-center w-full h-full')}
          />           
          )}
        </div>

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full w-full min-h-40 flex flex-col px-5 p-5 lg:p-5')}>
          <div className={`${id === 3 ? 'drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] bg-gray-400 bg-opacity-50 px-2 py-1' : "font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10" }`}>
            {description}
          </div>
            <div className={`${id === 3 ? 'drop-shadow-[0_6px_6px_rgba(0,0,0,0.9)] bg-gray-400 bg-opacity-50 px-2 py-1' : 'font-sans font-bold text-lg lg:text-3xl z-10' } font-sans font-bold text-lg lg:text-3xl z-10`}>
              {id === 1 ? (
              <a href="https://github.com/ZacharyPrivett" className="hover:underline">
                {title}
              </a>
            ) : id === 3 ? (
              <a href="https://www.linkedin.com/in/zach-privett-47315a223/" className="hover:underline">
                {title}
              </a>
            ) : (
              title
            )}
            </div>
            {id === 1 && <Globe />}
            {id === 2 && <About />}
            {id === 5 && <Certs />}
            {id === 4 && <CurrentPojects />}
            {id === 6 && <Contact />}
        </div>
      </div>
    </div>
  );
};