import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  location: string;
  content: string;
};

export default function NavbarItemMDesktop({ location, content }: Props) {
  const path = usePathname();

  return (
    <Link
      className={`${path === location ? "text-base-100" : "text-secondary"} flex items-center justify-center border-b-2 border-transparent px-2 py-2 font-normal transition duration-200 ease-in-out hover:border-current`}
      href={location}
    >
      {content}
    </Link>
  );
}
