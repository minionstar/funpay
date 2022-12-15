import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import avatar from "../components/Table/MensImage.png";
import TextareaAutosize from "react-textarea-autosize";

const ChatItem = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="chat" src={avatar} />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="chat" src={avatar} />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </>
  );
};

interface DetailTypes {
  options: string;
  detail: string;
}

const Detail = ({ options, detail }: DetailTypes) => {
  return (
    <div className="grid grid-rows-2">
      <p className="text-sm text-gray-600">{options}</p>
      <p className="text-lg text-black font-medium">{detail}</p>
    </div>
  );
};

const Rating = () => {
  return (
    <div className="rating rating-lg rating-half mt-5">
      <input type="radio" name="rating-10" className="rating-hidden" />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-1"
        checked
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-yellow-400 mask mask-star-2 mask-half-2"
      />
    </div>
  );
};

const Mechandise = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 grid grid-cols-2">
        <div className="bg-warning text-black place-items-center p-10">
          <div className="grid grid-rows-7">
            <div className="title pb-5">
              <h1 className="text-4xl font-bold max-lg:text-2xl">
                Order #KMR78721
              </h1>
            </div>
            <div className="information grid grid-cols-2 grid-rows-2">
              <Detail options="GAME" detail="Albion Online" />
              <Detail options="CURRENCY" detail="Silver" />
              <Detail options="SERVER" detail="Albion (live)" />
            </div>
            <div className="divider divider-vertical"></div>
            <div className="price grid grid-cols-2 grid-rows-2">
              <Detail options="CURRENCY AMOUNT" detail="Albion Online" />
              <Detail options="CHARACTER NAME" detail="Daruma1" />
              <Detail options="OPEN" detail="today at 12:39 (3 minutes ago)" />
              <Detail options="TOTAL" detail="1.26$" />
            </div>
            <div className="divider divider-vertical"></div>
            <div className="checkout grid-rows-3 justify-center">
              <p className="text-sm text-gray-600">CURRENCY AMOUNT</p>
              <div className="flex mt-2">
                <button className="btn btn-primary text-white text-xl w-full mb-2">
                  Confirm currency receipt
                </button>
              </div>
              <p className="text-sm text-gray-600">REVIEW FOR THE SELLER</p>
            </div>
            <div className="divider divider-vertical"></div>
            <div className="checkout grid-rows-4 justify-center">
              <textarea
                className="textarea w-full h-32 border-none focus:border-none"
                placeholder="Bio"
              ></textarea>
              <Rating />
              <p className="text-sm text-gray-600 mt-5">Seller`s rating </p>
              <button className="btn btn-primary mt-5">Publish</button>
            </div>
          </div>
        </div>
        <div className="bg-white text-black h-full  flex flex-col w-full">
          <div className="grid grid-cols-2 w-full border-solid border-b-[1px] border-gray-200 shadow-xl">
            <div className="User">
              <div className="flex items-center space-x-3 pl-5">
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
            </div>
            <div className="flex justify-end">
              <button className="btn btn-square btn-base-100 rounded-none mr-5">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"></path>
                </svg>
              </button>
              <button className="btn btn-square btn-base-100 mr-2"></button>
              <button className="btn btn-square btn-base-100 mr-2"></button>
            </div>
          </div>
          <div className="bg-white flex-1 bg-opacity-60 relative">
            <div className="absolute inset-0 h-full flex-col flex overflow-auto  bg-gray-300 bg-opacity-20 border-solid border-b-[1px] border-gray-300  w-full">
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
            </div>
          </div>

          <div className="flex bg-gray-300 bg-opacity-20 border-solid border-b-[1px] border-gray-300">
            <TextareaAutosize
              className="textarea w-full  h-full"
              placeholder="Message..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mechandise;
