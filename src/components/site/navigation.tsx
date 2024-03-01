import { UserButton } from '@clerk/nextjs';
import type { User } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

import { ModeToggle } from '@/components/global/mode-toggle';

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="relative flex items-center justify-between p-4">
      <aside className="flex items-center gap-2">
        <Image
          src="./assets/plura-logo.svg"
          alt="InsightWorks logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold">InsightWorks.</span>
      </aside>
      <nav className="absolute left-[50%] hidden translate-x-[-50%] translate-y-[-50%] md:block">
        <ul className="flex items-center justify-center gap-8">
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Abouts</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Features</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-2">
        <Link
          href="/agency"
          className="rounded-md bg-primary p-2 px-4 text-white hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
