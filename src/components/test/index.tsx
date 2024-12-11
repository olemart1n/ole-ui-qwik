import { component$, useStore } from "@builder.io/qwik";
import * as Chat from "../chat";
export const Test = component$(() => {
  const messages = useStore<Chat.ChatMessage[]>([]);
  const clientId = "123";
  const clientUsername = "Spiderman";
  return (
<div class="h-1/2 w-96">
<Chat.Root
      messages={messages}
      clientId={clientId}
      clientUsername={clientUsername}
      class="outline-1.5 chat m-2 h-60 min-h-full rounded p-2 outline outline-black dark:outline-slate-200"
      style={{ display: "grid", gridTemplateRows: "90% 10%" }}
      
    >
      <Chat.Messages>
        {messages.map((m, i) => {
          if (m.senderId === clientId) {
            return (
              <Chat.Message
                message={m.message}
                senderUsername={m.senderUsername}
                isSender={true}
                key={i}
              />
            );
          }
          return (
            <Chat.Message
              message={m.message}
              senderUsername={m.senderUsername}
              isSender={false}
              key={i}
            />
          );
        })}
      </Chat.Messages>
      <Chat.Form class="m-0 flex h-full w-full items-center p-0 text-white">
        <Chat.Input class="focus:none mt-auto h-full flex-grow rounded border-none bg-black bg-opacity-50 px-2 text-sm placeholder:text-center focus:placeholder-transparent focus:outline-none"
       placeholder="Send a message.."/>
      </Chat.Form>
    </Chat.Root>
</div>
  );
});

 


//FORM
// class="m-0 flex h-full w-full items-center p-0 text-white"