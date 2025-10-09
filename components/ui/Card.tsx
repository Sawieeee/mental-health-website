import Link from "next/link";
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type DivProps = {
  className?: string;
  children?: ReactNode;
  href?: undefined;
} & HTMLAttributes<HTMLDivElement>;

type LinkProps = {
  className?: string;
  children?: ReactNode;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = DivProps | LinkProps;

export default function Card(props: Props) {
  if ('href' in props) {
    const { href, className = '', children, ...linkRest } = props as LinkProps;
    const classes = ['card', className].filter(Boolean).join(' ');
    return (
      <Link href={href} style={{ textDecoration: 'none' }} {...linkRest}>
        <div className={classes}>{children}</div>
      </Link>
    );
  }

  const { className = '', children, ...divRest } = props as DivProps;
  const classes = ['card', className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...divRest}>
      {children}
    </div>
  );
}
