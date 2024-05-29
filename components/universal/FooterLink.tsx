import Link from "next/link";

type Props = {
  location: string;
  content: string;
};

export default function FooterLink({ content, location }: Props) {
  return (
    <Link className="text-xs" href={location}>
      {content}
    </Link>
  );
}
