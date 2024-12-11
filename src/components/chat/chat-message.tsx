import { component$ } from "@builder.io/qwik";

export interface ChatMessageProps {
  senderUsername: string;
  message: string;
  isSender: boolean;
}
export const ChatMessage = component$<ChatMessageProps>(
  ({ senderUsername, message, isSender }) => {
    return isSender ? (
      <div>
        <p class=" text-sm ">{senderUsername}</p>
        <div class="mb-2 w-fit rounded bg-yellow-500 bg-opacity-40 p-1 text-white">
          {message}
        </div>
      </div>
    ) : (
      <div>
        <p class="text-right text-sm">{senderUsername}</p>
        <div class="mb-2 ml-auto w-fit rounded bg-yellow-300 p-1 text-slate-800">
          {message}
        </div>
      </div>
    );
  }
);
