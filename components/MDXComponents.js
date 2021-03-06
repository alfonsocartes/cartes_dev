/* eslint-disable jsx-a11y/anchor-has-content */

import Link from "next/link";
import Image from "next/image";
import ContactUs from "./cta/ContactUs";
import AppStoreButton from "./cta/AppStoreButton";
import PlayStoreButton from "./cta/PlayStoreButton";

const CustomLink = (props) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  ContactUs,
  AppStoreButton,
  PlayStoreButton,
};

export default MDXComponents;
