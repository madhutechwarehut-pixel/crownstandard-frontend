export type Sender = "me" | "them";

export interface Message {
  id: string;
  sender: Sender;
  text: string;
  seen: boolean; // false => show "New" label
  ts?: string;
}

export interface Chat {
  id: string;
  name: string;
  online: boolean;
  lastMessage: string;
  unreadCount: number;
  messages: Message[];
}
