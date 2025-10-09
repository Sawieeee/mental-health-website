"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "teal";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function Button(props: ButtonProps | LinkProps) {
  const variantName = ('variant' in props && props.variant) ? props.variant : 'primary';
  const variantClass = variantName === 'outline' ? 'outline' : variantName === 'teal' ? 'teal' : '';

  if ('href' in props) {
const { href, children, className = '', variant: _variant, ...rest } = props as LinkProps;
    const classes = ['btn', variantClass, className].filter(Boolean).join(' ');
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

const { children, className = '', variant: _variant, ...btnRest } = props as ButtonProps;
  const classes = ['btn', variantClass, className].filter(Boolean).join(' ');
  return (
    <button className={classes} {...btnRest}>
      {children}
    </button>
  );
}
