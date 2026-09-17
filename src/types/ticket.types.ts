export type TicketStatus = "answered" | "pending" | "closed";
export type MessageType = "question" | "answer";

export interface TicketMessage {
  id: number;
  name: string;
  avatar: string;
  date: string;
  type: MessageType;
  text: string;
}

export interface Ticket {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  department: string;
  type: string;
  status: TicketStatus;
  messages: TicketMessage[];
}
