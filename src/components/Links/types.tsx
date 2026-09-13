
export type Link = {
  label: string;
  href: string;
};

export type LinksGroup = {
  name: string | null;
  links: Link[];
};

export type LinksSection = {
  name: string | null;
  groups: LinksGroup[];
};
