import Image from "next/image";
import Link from "next/link";

export const DesktopNav = () => (
  <div className="flex flex-row gap-12 md:items-center lg:grid lg:grid-cols-3 lg:items-start mb-9">
    <div className="-mt-[21px] hidden lg:block">
      <FullLogo />
    </div>
    <div className="block lg:hidden">
      <SquareLogo />
    </div>
    <div className="col-span-2 flex grow flex-row items-end">
      <div className="flex flex-col gap-7">
        <FirstLevelNav />        
      </div>      
    </div>
  </div>
);

export const SquareLogo = () => (
  <Link href="/">
    <Image
      className="select-none"
      src="/logo.png"
      width={60}
      height={60}
      alt="Česko.Digital"
    />
  </Link>
);

export const FullLogo = () => (
  <Link href="/">
    <Image
      className="select-none"
      src="/logo.svg"
      width={255}
      height={53}
      alt="Česko.Digital"
    />
  </Link>
);

export const FirstLevelNav = () => (
  <ul className="flex flex-row gap-7 text-xl">
    <li>
      <Link href="https://cesko.digital" className="typo-link">
        Co děláme
      </Link>
    </li>
    <li>
      <Link href="https://app.cesko.digital/" className="typo-link">
        Zapojte se
      </Link>
    </li>
    <li>
      <Link href="/" className="font-semibold">
        Blog
      </Link>
    </li>
  </ul>
);

