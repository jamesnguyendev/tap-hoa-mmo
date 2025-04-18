import CardProduct from "@/components/card-product";
import CategoryTag from "./components/ProductActionBar/CategoryTag";
import ProductStrip from "./components/ProductActionBar/ProductStrip";
import SearchBox from "./components/ProductActionBar/SearchBox";
import SlidePulse from "./components/ProductActionBar/SlidePulse";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-12 place-items-center px-5">
        <SearchBox />
        <SlidePulse />
      </div>
      <div className="flex flex-col justify-center border-t border-t-gray-200 my-5 bg-white ">
        <ProductStrip />
        <CategoryTag />
      </div>
      <div className="px-5 ">
        <CardProduct />
      </div>
    </div>
  );
}
