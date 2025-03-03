import type React from "react"
import Nav from "@/components/ui/Nav"
import TypingText from "@/components/ui/TypingText"

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <div>
      <Nav />
      <TypingText />
      {children}
    </div>
  )
}

