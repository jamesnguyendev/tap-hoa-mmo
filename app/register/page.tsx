import { RegisterFormUI } from "@/components/Register-form-ui";
import { RegisterModal } from "@/components/register-modal";

export default function Page() {
  return (
    <RegisterModal>
      <RegisterFormUI />
    </RegisterModal>
  );
}
