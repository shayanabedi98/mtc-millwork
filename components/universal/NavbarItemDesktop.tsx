import Link from "next/link";

type Props = {
  location: string;
  content: string;
};

export default function NavbarItemDesktop({ location, content }: Props) {
  return <Link href={location}>{content}</Link>;
}
