import Image from "next/image";
import Link from "next/link";
import avatar from "./MensImage.png";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="navbar bg-base-100 z-10  drop-shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={""} className="text-neutral active:bg-secondary">
                Purchase
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href={""} className="text-neutral active:bg-secondary">
                Sales <span className="badge">1</span>
              </Link>
            </li>
            <li>
              <Link href={""} className="text-neutral active:bg-secondary">
                Messages
              </Link>
            </li>
            <li>
              <Link href={""} className="text-neutral active:bg-secondary">
                Funds <span className="badge">0 €</span>
              </Link>
            </li>
            <li className="text-neutral active:bg-secondary">
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search by 273 games"
                    className="input text-sm  input-bordered bg-base-100 text-neutral w-full"
                  />
                  <button className="btn btn-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li tabIndex={0}>
              <Link
                href={""}
                className="text-neutral active:bg-secondary justify-between"
              >
                Support
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 text-neutral bg-base-100 shadow-lg">
                <li>
                  <Link href={""} className="text-neutral active:bg-secondary">
                    Submenu 1
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-neutral active:bg-secondary">
                    Submenu 2
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link
          href={"/"}
          onClick={() => router.push("/")}
          className="btn btn-ghost normal-case text-xl text-neutral active:bg-secondary"
        >
          Logo
        </Link>
        <div className="form-control max-lg:hidden">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search by 273 games"
              className="input  input-bordered bg-base-100 text-neutral"
            />
            <button className="btn btn-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <Link href={""} className="text-neutral active:bg-secondary">
                Support
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 text-neutral bg-base-100 shadow-lg">
                <li>
                  <Link href={""} className="text-neutral active:bg-secondary">
                    Submenu 1
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-neutral active:bg-secondary">
                    Submenu 2
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href={"/purchase"}
                onClick={() => router.push("/purchase")}
                className="text-neutral active:bg-secondary"
              >
                Purchase
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href={""} className="text-neutral active:bg-secondary">
                Sales <span className="badge">1</span>
              </Link>
            </li>
            <li>
              <Link href={""} className="text-neutral active:bg-secondary">
                Messages
              </Link>
            </li>
            <li>
              <Link href={""} className="text-neutral active:bg-secondary">
                Funds <span className="badge">0 €</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={avatar} alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            style={{ zIndex: "80000 !important" }}
          >
            <li>
              <Link
                href={""}
                className="justify-between text-neutral active:bg-secondary"
              >
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link href={""} className="text-neutral active:bg-secondary">
                Settings
              </Link>
            </li>
            <li>
              <Link href={""} className="text-neutral active:bg-secondary">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
