"use client";

import { useRouter } from "next/navigation";
import {
  DialogOverlay,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function RegisterModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleOpenChange = () => {
    router.back();
  };
  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent
          className="sm:max-w-lg bg-white border-0"
          title="Authentication"
        >
          <DialogTitle>
            <VisuallyHidden>Share link</VisuallyHidden>
          </DialogTitle>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
