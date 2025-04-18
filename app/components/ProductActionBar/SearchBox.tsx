import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchBox = () => {
  return (
    <form className="w-full mx-auto flex flex-col gap-3 col-span-2">
      <div className="relative w-full">
        <input
          type="search"
          id="default-search"
          className="block w-full min-h-14 ps-7 max-sm:pe-40 text-md text-gray-900 shadow-sm shadow-first ring-2 ring-first rounded-xl bg-gray-50  focus:ring-last focus:outline-0 "
          placeholder="Tìm kiếm gian hàng hoặc người bán"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-0.5 bottom-0.5 bg-gradient hover:bg-blue-800  focus:outline-none 
  font-medium rounded-xl text-md px-5 py-3.5 cursor-pointer"
        >
          Tìm kiếm
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 md:flex">
        <Select>
          <SelectTrigger className="md:w-[11rem] w-full data-[size=default]:h-8 border border-gray-200">
            <SelectValue placeholder="Tùy chọn tìm kiếm" />
          </SelectTrigger>
          <SelectContent className="border-0">
            <SelectGroup>
              <SelectLabel>Tùy chọn tìm kiếm</SelectLabel>
              <SelectItem value="apple">Tên người bán</SelectItem>
              <SelectItem value="banana">Email</SelectItem>
              <SelectItem value="blueberry">Phần mềm</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="md:w-[11rem] w-full data-[size=default]:h-8 border border-gray-200">
            <SelectValue placeholder=" " />
          </SelectTrigger>
          <SelectContent className="border-0">
            <SelectGroup>
              {/* <SelectLabel>Tùy chọn tìm kiếm</SelectLabel> */}
              <SelectItem value="dmo">Phần mềm FB</SelectItem>
              <SelectItem value="vom">Phần mềm GG</SelectItem>
              <SelectItem value="dnm">Phần mềm Microsoft</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="md:w-[11rem]  w-full data-[size=default]:h-8 border border-gray-200">
            <SelectValue placeholder=" " />
          </SelectTrigger>
          <SelectContent className="border-0">
            <SelectGroup>
              {/* <SelectLabel>Tùy chọn tìm kiếm</SelectLabel> */}
              <SelectItem value="apple">Loại không trùng</SelectItem>
              <SelectItem value="blueberry">Phần mềm</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
};

export default SearchBox;
