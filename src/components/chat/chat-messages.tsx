import { component$, useContext, Slot, PropsOf } from "@builder.io/qwik";
import { ChatContext } from "./context";

export const ChatMessages = component$<PropsOf<"div">>((props) => {
  const { ...rest } = props;
  const context = useContext(ChatContext);
  return (
    <div class="no-scrollbar overflow-y-scroll" {...rest}>
      <div ref={context.messageEndRefDiv}>
        <Slot />
      </div>
    </div>
  );
});
