import { Input } from "./ui/input";

export const ForgePasswordFormUI = () => {
  return (
    <form className="text-black flex flex-col gap-4">
      <span className="font-semibold">Lấy lại mật khẩu</span>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input
          type="email"
          id="email"
          placeholder="Nhập email đã đăng kí"
          className="h-12 rounded-lg border-gray-200 placeholder:text-[15.5px] ps-5"
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="text-white bg-gradient font-semibold cursor-pointer px-4 min-h-11 py-3 w-1/2 rounded-lg hover:bg-last hover:bg-none">
          Reset
        </button>
      </div>
    </form>
  );
};
