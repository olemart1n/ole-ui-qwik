import { component$, PropsOf, useContext } from "@builder.io/qwik";
import { ChatContext } from "./context";

export const ChatInput = component$<PropsOf<"input">>((props) => {
  const context = useContext(ChatContext);

  return (
    <input
      {...props}
      type="text"
      name="message"
      autoComplete="off"
      autoCorrect="off"
      minLength={2}
      bind:value={context.inputSig}
    />
  );
});
