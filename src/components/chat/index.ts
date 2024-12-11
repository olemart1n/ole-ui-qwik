import { ChatRoot as Root } from "./chat-root";
import { ChatForm as Form  } from "./chat-form";
import { ChatMessage as Message } from "./chat-message";
import { ChatMessages as Messages} from "./chat-messages";
import { ChatInput as Input} from "./chat-input";

import {ChatContext} from './context'
import type {ChatMessageProps} from "./types";
import { type ChatContextProps } from "./context";


export const Chat = {Root, Form, Message, Messages, Input, ChatContext}
export type {ChatContextProps, ChatMessageProps}
