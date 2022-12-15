import Image from "next/image";
import Link from "next/link";
import avatar from "./MensImage.png";

const Table = () => {
  return (
    <div className="overflow-x-auto w-full bg-white -z-1 text-black shadow-lg">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead className="border-solid border-[1px] border-gray">
          <tr>
            <th className="bg-white" style={{ zIndex: 0 }}>
              Date
            </th>
            <th className="bg-white">Order</th>
            <th className="bg-white">Description</th>
            <th className="bg-white">Seller</th>
            <th className="bg-white">Status</th>
            <th className="bg-white">Total</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr className="border-solid border-[1px] border-gray hover cursor-pointer">
            <th className="z-0">
              <div className="grid grid-rows-2">
                <p className="text-black text-sm font-normal">today, 12:39</p>
                <p className="text-gray-400 text-sm font-normal">
                  2 minutes ago
                </p>
              </div>
            </th>
            <td>
              <p>#KMR78K72</p>
            </td>
            <td>
              <div className="grid grid-rows-2">
                <p className="text-black text-sm font-normal">
                  Albion (live), 1 kk silver, Daruma1
                </p>
                <p className="text-gray-400 text-sm font-normal">
                  Albion Online, Silver
                </p>
              </div>
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      src={avatar}
                      className="rounded-full"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm text-success font-bold">online</div>
                </div>
              </div>
            </td>
            <td>
              <div className="text-primary font-bold">Paid</div>
            </td>
            <td>
              <div className="text-black font-bold">1 €</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
