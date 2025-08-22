import Link from "next/link";

import { SOCIAL_LINKS } from "@/constants";

export const Socials = () => {
  return (
    <ul className="flex items-center gap-6 text-white">
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }, index) => (
        <li key={index}>
          <Link
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label} link`}
            className="size-14 border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-colors duration-300"
          >
            <Icon size={20} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
