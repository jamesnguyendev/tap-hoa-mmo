import Link from "next/link";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

export const LoginFormUI = () => {
  return (
    <form className="text-black flex flex-col gap-4">
      <span className="font-semibold">Đăng nhập bằng tài khoản của bạn</span>
      <div
        className="flex w-full max-w-sm items-center gap-3 text-md cursor-pointer text-gray-600 border border-gray-200 rounded-lg h-12 px-5 
      focus:border-red-500 focus:outline-red-300"
      >
        <Image src={"/google.svg"} alt="Google icon" width={20} height={20} />
        <div className="">Đăng nhập bằng Google</div>
      </div>
      <div className="flex w-full max-w-sm items-center z-40 text-gray-600 border-b border-b-gray-200 rounded-lg h-1 px-5 my-2.5 relative">
        <div className="absolute left-1/2 -translate-x-1/2 bg-white z-50 px-5">
          Hoặc
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input
          type="email"
          id="email"
          placeholder="Nhập email của bạn"
          className="h-12 rounded-lg border-gray-200 placeholder:text-[15.5px] ps-5"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input
          type="password"
          id="password"
          placeholder="Nhập mật khẩu của bạn"
          className="h-12 rounded-lg border-gray-200 placeholder:text-[17px] ps-5"
        />
      </div>
      <Link
        href={"/forget-password"}
        className="text-sm text-gradient font-medium"
      >
        Quên mật khẩu ?
      </Link>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" className="" />
        <label
          htmlFor="terms"
          className="text-sm text-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Ghi nhớ đăng nhập{" "}
        </label>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="text-white bg-gradient font-semibold cursor-pointer px-4 min-h-11 py-3 w-full rounded-lg hover:bg-last hover:bg-none">
          Đăng nhập/Đăng ký
        </button>
      </div>
      <Link
        href={"/register"}
        className="text-sm flex justify-center hover:underline"
      >
        Chưa có tài khoản ?
      </Link>
    </form>
  );
};
