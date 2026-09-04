"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { buildWhatsAppLink } from "@/lib/config";
import { trackWhatsAppClick, type ConversionOrigin } from "@/lib/analytics";

type WhatsAppLinkProps = {
  origin: ConversionOrigin;
  message?: string;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick" | "className" | "children">;

export default function WhatsAppLink({ origin, message, className, children, ...rest }: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackWhatsAppClick(origin)}
      {...rest}
    >
      {children}
    </a>
  );
}
