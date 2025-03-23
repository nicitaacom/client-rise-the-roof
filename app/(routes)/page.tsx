import { ContactUsForm } from "./components/ContactUsForm"
import { Header } from "./components/Header/Header"
import { HowWeCanHelpYou } from "./components/HowWeCanHelpYou"
import { NotificationBar } from "./components/NotificationBar"

export default function Page() {
  return (
    <main className="flex flex-col">
      <NotificationBar />
      <Header />
      <section className="flex flex-col desktop:flex-row justify-between gap-6 px-4 desktop:px-16 pt-24">
        <HowWeCanHelpYou />
        <ContactUsForm />
      </section>
    </main>
  )
}
