export type NotificationType = "Booking" | "Review" | "Tip" | "System";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  time: string;       // e.g., "6 days ago" or ISO string if backend-connected
  unread: boolean;
}
