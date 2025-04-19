import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    title: "Gmail Edu, Gmail Domain dùng được 64 dịch vụ GOOGLE Cổ và New",
    price: "2.750 VND",
    src: "https://taphoammo.net/img/phongletrinh95_283394.png",
    seller: "Mr. L",
  },
  {
    title:
      "GMAIL VIỆT 2015-2019 - NGƯỜI DÙNG THẬT - CHƯA QUA DỊCH VỤ - HÀNG TRUST",
    price: "12.000 VND",
    src: "https://taphoammo.net/img/gmail-edu-gmail-domain-dung-uoc-64-dich-vu-google-co-va-new_175884.png",
    seller: "Memo Join",
  },
  {
    title: "Gmail random 21-23 đã qua dịch vụ siêu trâu 8k",
    price: "5950 VND",
    src: "https://taphoammo.net/img/gmail-viet-new-chua-qua-dv-live-sieu-trau_409160.png",
    seller: "Tâm Như",
  },
  {
    title: "Gmail VN Reg Thủ Công Siêu Khỏe Chưa Qua Dịch Vụ",
    price: "2.750 VND",
    src: "https://taphoammo.net/img/gmail-usa-good_968148.png",
    seller: "Nmm 099",
  },
  {
    title:
      "TĂNG TƯƠNG TÁC THREADS - Tăng Follow Threads - Tăng Like Threads - Tăng Theo Dõi Threads",
    price: "68 VND",
    src: "https://taphoammo.net/img/tang-tuong-tac-threads-tang-follow-threads-tang-like-threads-tang-theo-doi-threads_493276.png",
    seller: "forest_xul90u ",
  },
  {
    title: "Dịch vụ tăng tương tác Twitter Giá Rẻ",
    price: "15.000 VND",
    src: "https://taphoammo.net/img/dich-vu-tang-tuong-tac-fb-like-sub-comment-view-video_98098288.png",
    seller: "hungbap123",
  },
  {
    title: "Tăng Tương Tác Threads giá rẻ bảo hành 30 ngày",
    price: "99 VND",
    src: "https://taphoammo.net/img/tang-tuong-tac-threads-gia-re-bao-hanh-30-ngay_653993.png",
    seller: "abe",
  },
  {
    title: "TĂNG TƯƠNG TÁC FACEBOOK UY TÍN GIÁ RẺ",
    price: "47 VND",
    src: "https://taphoammo.net/img/tang-tuong-tac-facebook-uy-tin-gia-re.png",
    seller: "hungbap123 ",
  },
];

const CardProduct = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7">
      {data.map((item, index) => (
        <Link
          href={"/"}
          key={index}
          className="flex flex-col gap-2 cursor-pointer"
        >
          <div className="overflow-hidden w-full rounded-2xl shadow-xl  ">
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt={item.title}
              className="hover:scale-110 hover:duration-400 hover:transform"
            />
          </div>
          <span className="font-semibold line-clamp-1 mt-2.5">
            {item.title}
          </span>
          <div className="flex items-center justify-between text-sm md:text-md lg:text-[15px] text-gray-700 ">
            <span className="line-clamp-1">{item.seller}</span>
            <span>{item.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardProduct;
