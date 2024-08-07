import Link from "next/link";
import Image from "next/image";
import { ContactUs } from "./cta/ContactUs";
import { AppStoreButton } from "./cta/AppStoreButton";
import { PlayStoreButton } from "./cta/PlayStoreButton";
import { Carousel } from "./Carousel";
import { DesktopScreenshots } from "./DesktopScreenshots";
import { LazyImage } from "./LazyImage";

const CustomLink = (props) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <Link href={href} {...props}></Link>;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export const MDXComponents = {
  Image,
  a: CustomLink,
  ContactUs,
  AppStoreButton,
  PlayStoreButton,
  Carousel,
  DesktopScreenshots,
  LazyImage,
};
