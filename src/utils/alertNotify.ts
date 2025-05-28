import type { NotifyOptions, NotifyType } from "@/types/notify";
import { Toaster, toast } from "sonner";

const notify = (
  type: NotifyType,
  text: string,
  options: NotifyOptions = {}
): void => {
  const { description, ...rest } = options;

  switch (type) {
    case "success":
      toast.success(text, { ...rest, description });
      break;
    case "warning":
      toast.warning(text, { ...rest, description });
      break;
    case "error":
      toast.error(text, { ...rest, description });
      break;
    case "description":
      toast.message(text, { ...rest, description });
      break;
    default:
      toast(text, { ...rest, description }); // fallback
      break;
  }
};

export { Toaster, notify };
