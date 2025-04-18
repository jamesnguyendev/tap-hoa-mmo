import { ForgetPasswordModal } from "@/components/get-password-modal";
import { ForgePasswordFormUI } from "@/components/forget-password-form-ui";

export default function Page() {
  return (
    <ForgetPasswordModal>
      <ForgePasswordFormUI />
    </ForgetPasswordModal>
  );
}
