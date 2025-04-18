import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowDownNarrowWide, ChevronDownIcon } from "lucide-react";

const RecommendButton = () => {
  return (
    <Menu as="div" className="relative inline-block text-left h-full">
      <div>
        <MenuButton
          className="inline-flex items-center w-full justify-center focus-visible:ring-0 focus-visible:outline-0 gap-x-1.5 
        rounded-xl bg-white px-4 py-3 text-md font-normal text-gray-900 shadow-xs border border-gray-200 ring-inset hover:bg-gray-50 "
        >
          <ArrowDownNarrowWide className="size-4" />
          <span className="line-clamp-1"> Đề xuất</span>
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-4 text-gray-900"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 *:m-2.5 *:p-2 *:cursor-pointer *:rounded-md *:hover:bg-secondary w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <MenuItem>
          <div className="">Được đề xuất</div>
        </MenuItem>
        <MenuItem>
          <div className="">Mới nhất </div>
        </MenuItem>
        <MenuItem>
          <div className="">Nóng nhất </div>
        </MenuItem>
        <MenuItem>
          <div className="">Phổ biến </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default RecommendButton;
