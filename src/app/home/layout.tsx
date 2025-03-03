import type React from "react"
import { auth } from "@/auth"
import Nav from "@/components/ui/Nav"
import TypingText from "@/components/ui/TypingText"

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <div>
      <Nav />
      <TypingText />
      {children}
    </div>
  )
}

