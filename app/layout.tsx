import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSdebar";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Tạp hóa MMO | Sàn thương mại điện từ sản phẩm số",
  description:
    "Tạp hóa MMO - Chuyên trang thương mại điện tử sản phẩm số - Phục vụ cộng đồng MMO (Kiếm tiền online). Một sản phẩm ra đời với mục đích thuận tiện và an toàn hơn",
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en" className="">
      <body>
        <SidebarProvider defaultOpen={defaultOpen}>
          <Header />
          <AppSidebar />
          <main className="mt-14 py-3 w-full">
            {modal}
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
