import Header from "../components/Header";
import Table from "../components/Table";

const Purchase = () => {
  return (
    <>
      <Header />
      <h1 className="pt-20 pb-4 bg-white text-success text-3xl pl-7 font-bold">
        My Purchase
      </h1>
      <Table />
    </>
  );
};

export default Purchase;
