import type { Metadata } from "next";
import ChatPage from "./chatspage";

export const metadata: Metadata = {
  title: "Chats Page",
};

export default function Page() {
  return <ChatPage />;
}
