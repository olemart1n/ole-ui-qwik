import { createContextId, Signal } from "@builder.io/qwik";
import { ChatMessage } from "./types";

export interface ChatContextProps {
  messages: ChatMessage[];
  clientId: string;
  clientUsername: string;
  messageEndRefDiv: Signal<HTMLDivElement> | undefined;
  inputSig: Signal<string>;
}

export const ChatContext = createContextId<ChatContextProps>("chat");
