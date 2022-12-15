import Image from "next/image";
import Link from "next/link";
import avatar from "../components/Table/MensImage.png";
import Header from "../components/Header";

const Order = () => {
  return (
    <>
      <Header />
      <div className="grid grid-rows-2 bg-white text-black">
        <h1 className="text-3xl font-bold pt-11 pl-12">Age of Wushu Liang</h1>
        <div className="overflow-x-auto w-full bg-white -z-1 text-black shadow-lg">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead className="border-solid border-[1px] border-gray">
              <tr>
                <th className="bg-white" style={{ zIndex: 0 }}></th>
                <th className="bg-white">Server</th>
                <th className="bg-white">In Stock</th>
                <th className="bg-white">Price / 1 unit</th>
                <th className="bg-white">Catalog price</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr className="border-solid border-[1px] border-gray hover ">
                <td className="z-0">
                  <div className="grid grid-rows-2">
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          className="toggle toggle-primary"
                        />
                      </label>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-bold">
                    (EU) Golden <br /> Dynasty
                  </p>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </td>
                <td>
                  {/* <div className="text-primary font-bold">Paid</div> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
