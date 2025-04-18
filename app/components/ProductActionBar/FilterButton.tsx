import { label, label2, label3 } from "@/lib/contants";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, RotateCcw, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export function toggle<T>(array: T[], item: T): T[] {
  return array.includes(item)
    ? array.filter((i) => i !== item)
    : [...array, item];
}

const FilterButton = () => {
  const [checked, setChecked] = useState<number | null>(null);
  const [creator, setCreator] = useState<number | null>(null);
  const [member, setMember] = useState<number[]>([]);
  const [model, setModel] = useState<number[]>([]);

  return (
    <Menu as="div" className="relative inline-block text-left h-full">
      <div>
        <MenuButton
          className="inline-flex items-center w-full justify-center focus-visible:ring-0 focus-visible:outline-0 gap-x-1.5 
        rounded-xl bg-white px-5 py-3 text-md font-normal text-gray-900 shadow-xs border border-gray-200 ring-inset hover:bg-gray-50 "
        >
          <SlidersHorizontal className="size-4" />
          <span className="line-clamp-1"> Bộ lộc</span>
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-4 text-gray-900"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-[300px] md:min-w-[480px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="max-h-96 overflow-y-auto">
          <MenuItem disabled>
            <div className="px-4 pt-5 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="font-semibold text-sm">Ngày phát hành</div>
                <div className="font-normal text-gray-500 flex items-center justify-center gap-1 cursor-pointer [&_svg]:size-4">
                  <RotateCcw />
                  Làm sạch
                </div>
              </div>
              <div className="flex gap-2 *:min-w-12 *:px-3 flex-wrap text-sm  *:cursor-pointer">
                {label.map((item, index) => (
                  <div
                    className={`${
                      index === checked
                        ? "text-white bg-first"
                        : "text-black bg-gray-200 hover:bg-gray-300"
                    }   rounded-md h-7 flex justify-center items-center`}
                    key={index}
                    onClick={() => setChecked(index)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </MenuItem>
          <MenuItem disabled>
            <div className="px-4 py-5 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="font-semibold text-sm">Người sáng tạo</div>
              </div>
              <div className="flex gap-2 *:min-w-12 *:px-3 text-sm flex-wrap *:cursor-pointer">
                {label.slice(0, 1).map((item, index) => (
                  <div
                    className={`${
                      index === creator
                        ? "text-white bg-first"
                        : "text-black bg-gray-200 hover:bg-gray-300"
                    }   rounded-md h-7 flex justify-center items-center`}
                    key={index}
                    onClick={() => setCreator(index)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </MenuItem>
          <MenuItem disabled>
            <div className="px-4 py-5 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="font-semibold text-sm">
                  Chỉ dành cho thành viên
                </div>
              </div>
              <div className="flex gap-2 *:min-w-14 flex-wrap *:px-3 text-sm  *:cursor-pointer">
                {label2.map((item, index) => (
                  <div
                    className={`${
                      member.includes(index)
                        ? "text-white bg-first"
                        : "text-black bg-gray-200 hover:bg-gray-300"
                    }   rounded-md h-auto py-1 flex justify-center items-center`}
                    key={index}
                    onClick={() => setMember((prev) => toggle(prev, index))}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </MenuItem>
          <MenuItem disabled>
            <div className="px-4 py-5 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="font-semibold text-sm">Loại mô hình </div>
              </div>
              <div className="flex gap-2 *:min-w-14 flex-wrap *:px-3 text-sm  *:cursor-pointer">
                {label3.map((item, index) => (
                  <div
                    className={`${
                      model.includes(index)
                        ? "text-white bg-first"
                        : "text-black bg-gray-200 hover:bg-gray-300"
                    }   rounded-md h-7 flex justify-center items-center`}
                    key={index}
                    onClick={() => setModel((prev) => toggle(prev, index))}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default FilterButton;
