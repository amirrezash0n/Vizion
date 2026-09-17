// src/store/notificationStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { notifications as initialData } from "../data/notifications";
import type { Notification } from "../types/notification.types";

interface NotificationStore {
  notifications: Notification[];
  markAsRead: (id: number) => void;
  deleteNotification: (id: number) => void;
  markAllAsRead: () => void;
  deleteAllNotifications: () => void;
}

export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set) => ({
      notifications: initialData,

      markAsRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, isRead: true } : n,
          ),
        })),

      deleteNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),

      markAllAsRead: () =>
        set((state) => ({
          notifications: state.notifications.map((n) => ({
            ...n,
            isRead: true,
          })),
        })),

      deleteAllNotifications: () =>
        set({
          notifications: [],
        }),
    }),
    {
      name: "notification-storage",
    },
  ),
);
