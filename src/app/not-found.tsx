import { SIconWithMessage } from "@src/components/root";
import { IconName } from "@src/types/root/_icon";

export default function NotFound() {
  return (
    <div>
      <SIconWithMessage
        message="Page Not Found!!!"
        icon={IconName.TbError404}
        url="/"
      />
    </div>
  );
}
