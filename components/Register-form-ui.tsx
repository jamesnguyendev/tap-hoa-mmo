import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

export const RegisterFormUI = () => {
  return (
    <form className="text-black flex flex-col gap-4">
      <span className="font-semibold">Đăng ký bằng tài khoản</span>
      <span className="text-gradient">
        Chú ý: Nếu bạn sử dụng các chương trình{" "}
        <span className="text-red-600">Bypass Captcha</span> có thể không đăng
        ký tài khoản được.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w- items-center gap-3">
        <Input
          type="text"
          id="account"
          placeholder="Nhập email của bạn"
          className="h-12 rounded-lg border-gray-200 placeholder:text-[15.5px] ps-5"
        />
        <Input
          type="email"
          id="email"
          placeholder="Nhập email của bạn"
          className="h-12 rounded-lg border-gray-200 placeholder:text-[15.5px] ps-5"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w- items-center gap-3">
        <Input
          type="password"
          id="password"
          placeholder="Nhập mật khẩu của bạn"
          className="h-12 rounded-lg border-gray-200 placeholder:text-[17px] ps-5"
        />
        <Input
          type="password"
          id="password"
          placeholder="Nhập lại mật khẩu của bạn"
          className="h-12 rounded-lg border-gray-200 placeholder:text-[17px] ps-5"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" className="" />
        <label
          htmlFor="terms"
          className="text-md text-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Tôi đã đọc và đồng ý với
          <span className="text-gradient ps-1.5">
            Điều khoản sử dụng Tạp Hóa MMO
          </span>
        </label>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="text-white bg-gradient font-semibold cursor-pointer px-4 min-h-11 py-3 w-full rounded-lg hover:bg-last hover:bg-none">
          Đăng ký
        </button>
      </div>
    </form>
  );
};
