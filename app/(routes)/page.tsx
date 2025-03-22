import { Header } from "./components/Header/Header"
import { NotificationBar } from "./components/NotificationBar"

export default function Page() {
  return (
    <main className="flex flex-col">
      <NotificationBar />
      <Header />
    </main>
  )
}
