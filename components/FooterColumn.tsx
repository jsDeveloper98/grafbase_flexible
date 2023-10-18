import Link from "next/link";
import { FC } from "react";

interface IProps {
  title: string;
  links: string[];
}

export const FooterColumn: FC<IProps> = ({ title, links }) => {
  return (
    <div className="FooterColumn footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};
