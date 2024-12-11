import {
  component$,
  useSignal,
  useOn,
  $,
  useContext,
  Slot,
  PropsOf,
} from "@builder.io/qwik";
import { ChatContext } from "./context";
import { scrollToBottom } from "./utils";
export const ChatForm = component$<PropsOf<"form">>((props) => {
  const formEl = useSignal<HTMLFormElement>();
  const context = useContext(ChatContext);

  useOn(
    "submit",
    $(() => {
      if ((context.inputSig.value as string).length < 2) return;

      const message = {
        senderId: context.clientId,
        senderUsername: context.clientUsername,
        message: context.inputSig.value as string,
      };
      context.messages.push(message);
      formEl.value?.reset();
      context.messageEndRefDiv && scrollToBottom(context.messageEndRefDiv);
    })
  );
  return (
    <form {...props} ref={formEl} preventdefault:submit>
      <Slot />
    </form>
  );
});
