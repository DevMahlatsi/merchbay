import { HeaderProps } from "@/Types/Merchbay";

export default function HeadingTitle({headingTitle} : HeaderProps) {
  return(
    <h1 className="text-3xl">{headingTitle}</h1>
  )
};
