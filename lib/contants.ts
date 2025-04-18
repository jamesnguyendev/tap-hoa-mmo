import {
  BaggageClaim,
  BanknoteArrowUp,
  Box,
  CircleHelp,
  CircleUserRound,
  Computer,
  Drill,
  ExternalLink,
  Handshake,
  Heart,
  Home,
  Laptop,
  LifeBuoy,
  Link,
  LogIn,
  Mail,
  Package,
  ThumbsUp,
} from "lucide-react";

export const itemsAppSideBar = [
  {
    title: "Trang chủ",
    icon: Home,
    href: "/",
    content: [],
  },
  {
    title: "Sản phẩm",
    icon: Package,
    href: "/san-pham",
    content: [
      { title: "Email", link: "/danh-muc/email" },
      { title: "Tài khoản", link: "/danh-muc/tai-khoan" },
      { title: "Phần mềm", link: "/danh-muc/phan-mem" },
      { title: "Danh mục khác", link: "/danh-muc/danh-muc-khac" },
    ],
  },
  {
    title: "Dịch vụ",
    href: "/dich-vu",
    icon: ThumbsUp,
    content: [
      { title: "Tăng tương tác", link: "/danh-muc/dich-vu-tang-tuong-tac" },
      { title: "Blockchain", link: "/danh-muc/dich-vu-blockchain" },
      { title: "Dịch vụ khác", link: "/danh-muc/dich-vu-khac" },
    ],
  },
  {
    title: "Hỗ trợ",
    href: "/ho-tro",
    icon: LifeBuoy,
    content: [],
  },
  {
    title: "Chia sẻ",
    href: "/chia-se",
    icon: ExternalLink,
    content: [],
  },
  {
    title: "Công cụ",
    href: "/cong-cu",
    icon: Drill,
    content: [
      { title: "2FA", link: "/2fa" },
      { title: "Check live Facebook", link: "/check-live-facebook" },
    ],
  },
  {
    title: "FAQs",
    href: "/faqs",
    icon: CircleHelp,
    content: [],
  },
  {
    title: "Đăng ký bán hàng",
    href: "/register-seller",
    icon: BaggageClaim,
    content: [],
  },
  {
    title: "Đăng nhập/Đăng ký",
    href: "/login",
    icon: LogIn,
    content: [],
  },
];

export const categoryItem = [
  { title: "Bạn có thể thích", icon: Heart, link: "/danh-muc/mail" },
  { title: "Email", icon: Mail, link: "/danh-muc/mail" },
  { title: "Phần mềm", icon: Computer, link: "/danh-muc/phan-mem" },
  { title: "Tài khoản", icon: CircleUserRound, link: "/danh-muc/tai-khoan" },
  { title: "Sản phẩm khác", icon: Box, link: "/danh-muc/tai-khoan" },
  {
    title: "Tăng tương tác",
    icon: BanknoteArrowUp,
    link: "/danh-muc/dich-vu-tuong-tac",
  },
  {
    title: "Dịch vụ phần mềm",
    icon: Laptop,
    link: "/danh-muc/dich-vu-phan-mem",
  },
  {
    title: "Dịch vụ Blockchain",
    icon: Link,
    link: "/danh-muc/dich-vu-blockchain",
  },
  {
    title: "Dịch vụ hỗ trợ",
    icon: Handshake,
    link: "/danh-muc/dich-vu-ho-tro",
  },
  { title: "Tài khoản", icon: CircleUserRound, link: "/danh-muc/tai-khoan" },
  { title: "Sản phẩm khác", icon: Box, link: "/danh-muc/tai-khoan" },
  {
    title: "Tăng tương tác",
    icon: BanknoteArrowUp,
    link: "/danh-muc/dich-vu-tuong-tac",
  },
  {
    title: "Dịch vụ phần mềm",
    icon: Laptop,
    link: "/danh-muc/dich-vu-phan-mem",
  },
  {
    title: "Dịch vụ Blockchain",
    icon: Link,
    link: "/danh-muc/dich-vu-blockchain",
  },
  {
    title: "Dịch vụ hỗ trợ",
    icon: Handshake,
    link: "/danh-muc/dich-vu-ho-tro",
  },
];

export const label = [
  { name: "All" },
  { name: "1 day" },
  { name: "1 week" },
  { name: "1 month" },
  { name: "1 year" },
];
export const label2 = [
  { name: "Members-only" },
  { name: "Downloads are available to members only" },
  { name: "Free model" },
];
export const label3 = [
  { name: "Checkpoint" },
  { name: "Textual Inversion" },
  { name: "Hypernetwork" },
  { name: "Aesthetic Gradient" },
  { name: "LoRA" },
  { name: "LyCORIS" },
  { name: "Poses" },
  { name: "Wildcards" },
  { name: "Other" },
];
