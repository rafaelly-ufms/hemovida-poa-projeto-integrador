import axios from "axios";

export interface Notification {
  id: number
  title: string
  message: string
  date: string
  read: boolean
}

export async function fetchNotifications(): Promise<Notification[]> {
  const response = await axios.get('/notifications')
  return response.data
}

export async function markAsRead(id: number): Promise<void> {
  await axios.patch(`/notifications/${id}`, { read: true })
}

export async function deleteNotification(id: number): Promise<void> {
  await axios.delete(`/notifications/${id}`)
}
