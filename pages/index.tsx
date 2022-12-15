import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Table from "../components/Table";

export default function Index() {
  return (
    <>
      <Header />
      <div className="bg-white p-10 inline-flex w-full">
        <div className="flex flex-col w-5">
          <Link href={""} className="text-black text-primary underline">
            A
          </Link>
          <Link href={""} className="text-black text-primary underline">
            B
          </Link>
          <Link href={""} className="text-black text-primary underline">
            C
          </Link>
          <Link href={""} className="text-black text-primary underline">
            D
          </Link>
          <Link href={""} className="text-black text-primary underline">
            E
          </Link>
          <Link href={""} className="text-black text-primary underline">
            F
          </Link>
          <Link href={""} className="text-black text-primary underline">
            G
          </Link>
          <Link href={""} className="text-black text-primary underline">
            H
          </Link>
          <Link href={""} className="text-black text-primary underline">
            I
          </Link>
          <Link href={""} className="text-black text-primary underline">
            J
          </Link>
          <Link href={""} className="text-black text-primary underline">
            K
          </Link>
          <Link href={""} className="text-black text-primary underline">
            L
          </Link>
          <Link href={""} className="text-black text-primary underline">
            M
          </Link>
          <Link href={""} className="text-black text-primary underline">
            N
          </Link>
          <Link href={""} className="text-black text-primary underline">
            O
          </Link>
          <Link href={""} className="text-black text-primary underline">
            P
          </Link>
          <Link href={""} className="text-black text-primary underline">
            Q
          </Link>
          <Link href={""} className="text-black text-primary underline">
            R
          </Link>
          <Link href={""} className="text-black text-primary underline">
            S
          </Link>
          <Link href={""} className="text-black text-primary underline">
            T
          </Link>
          <Link href={""} className="text-black text-primary underline">
            U
          </Link>
          <Link href={""} className="text-black text-primary underline">
            V
          </Link>
          <Link href={""} className="text-black text-primary underline">
            W
          </Link>
          <Link href={""} className="text-black text-primary underline">
            X
          </Link>
          <Link href={""} className="text-black text-primary underline">
            Y
          </Link>
          <Link href={""} className="text-black text-primary underline">
            Z
          </Link>
        </div>
        <div className="flex flex-col bg-white text-black pl-24">
          <h1 className="flex h-4 font-bold">AFK Arena</h1>
          <div className="flex w-36 ">
            {/* Accounts Services Diamonds Top Up Other */}
            <Link href="" className="text-primary underline">
              Accounts · Services · Diamonds · Top Up · Other
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-white text-black pl-24">
          <h1 className="flex h-4 font-bold">AFK Arena</h1>
          <div className="flex w-36 ">
            {/* Accounts Services Diamonds Top Up Other */}
            <Link href="" className="text-primary underline">
              Accounts · Services · Diamonds · Top Up · Other
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-white text-black pl-24">
          <h1 className="flex h-4 font-bold">AFK Arena</h1>
          <div className="flex w-36 ">
            {/* Accounts Services Diamonds Top Up Other */}
            <Link href="" className="text-primary underline">
              Accounts · Services · Diamonds · Top Up · Other
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-white text-black pl-24">
          <h1 className="flex h-4 font-bold">AFK Arena</h1>
          <div className="flex w-36 ">
            {/* Accounts Services Diamonds Top Up Other */}
            <Link href="" className="text-primary underline">
              Accounts · Services · Diamonds · Top Up · Other
            </Link>
          </div>
        </div>
        <div className="flex text-black w-full">
          <Image
            src="https://funpay.com/img/circles/funpay_ny2021.jpg"
            width={800}
            height={0}
            className=" rounded-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
