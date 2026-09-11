export type TicketStatus = "answered" | "pending" | "closed";

export interface Ticket {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  department: string;
  type: string;
  status: TicketStatus;
}
