import { LoginFormUI } from "@/components/Login-form-ui";
import { LoginModal } from "@/components/login-modal";

export default function Page() {
  return (
    <LoginModal>
      <LoginFormUI />
    </LoginModal>
  );
}
