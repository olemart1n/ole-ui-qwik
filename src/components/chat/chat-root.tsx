import {
  component$,
  PropsOf,
  Slot,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { ChatContext, type ChatContextProps } from "./context";

import type { ChatMessageProps } from "./types";

export interface ChatRootProps {
  messages: ChatMessageProps[];
  clientId: string;
  clientUsername: string;
}

export const ChatRoot = component$<ChatRootProps & PropsOf<"div">>((props) => {
  const { messages, clientId, clientUsername, ...rest } = props;
  const context: ChatContextProps = {
    messages: messages,
    clientId: clientId,
    clientUsername: clientUsername,
    messageEndRefDiv: undefined,
    inputSig: useSignal(""),
  };
  useContextProvider(ChatContext, context);

  return (
    <div {...rest}>
      <Slot />
    </div>
  );
});
