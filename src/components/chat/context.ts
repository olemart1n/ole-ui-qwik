import { createContextId, Signal } from "@builder.io/qwik";
import { ChatMessageProps } from "./types";

export interface ChatContextProps {
  messages: ChatMessageProps[];
  clientId: string;
  clientUsername: string;
  messageEndRefDiv: Signal<HTMLDivElement> | undefined;
  inputSig: Signal<string>;
}

export const ChatContext = createContextId<ChatContextProps>("chat");
