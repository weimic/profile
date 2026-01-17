"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import Link from "next/link";

import {
  Sun,
  Moon,
  SunMoon,
  House,
  Circle,
  User,
  Ghost,
  FileText,
  Github,
  Linkedin,
  Instagram
} from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
export default function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
  return (
    <>
      <div className="flex animate-fadein">
          <Button className="cursor-pointer" variant="outline" onClick={() => setOpen((open) => !open)}>Win + J</Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />

          <CommandGroup heading="Me">
            <Link href="/">
              <CommandItem className="cursor-pointer">
                <House style={{color:'var(--icon-color)'}}/>
                <span>Home</span>
                <CommandShortcut></CommandShortcut>
              </CommandItem>
            </Link>
            
            <Link href="/about">
              <CommandItem className="cursor-pointer">
                <User style={{color:'var(--icon-color)'}}/>
                <span>About</span>
                <CommandShortcut></CommandShortcut>
              </CommandItem>
            </Link>

            <Link href="/MichaelWeiResume-Spring26.pdf" target="_blank" rel="noopener noreferrer">
              <CommandItem className="cursor-pointer">
                <FileText style={{color:'var(--icon-color)'}}/>
                <span>Resume</span>
                <CommandShortcut></CommandShortcut>
              </CommandItem>
            </Link>
            
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Projects">
            <Link href="/blobshowdown">
              <CommandItem className="cursor-pointer">
                <Circle style={{color:'var(--icon-color)'}}/>
                <span>Blob Showdown</span>
                <CommandShortcut></CommandShortcut>
              </CommandItem>
            </Link>
            <Link href="/ghostbust">
              <CommandItem className="cursor-pointer">
                <Ghost style={{color:'var(--icon-color)'}}/>
                <span>GhostBust</span>
                <CommandShortcut></CommandShortcut>
              </CommandItem>
            </Link>

          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Accounts">
            <Link href="https://github.com/weimic/" target="_blank" rel="noopener noreferrer">
              <CommandItem className="cursor-pointer">
                <Github style={{color:'var(--icon-color)'}}/>
                <span>GitHub</span>
                <CommandShortcut></CommandShortcut>
              </CommandItem>
            </Link>
            
            <Link href="https://www.instagram.com/weiimic/" target="_blank" rel="noopener noreferrer">
              <CommandItem className="cursor-pointer">
                <Instagram style={{color:'var(--icon-color)'}}/>
                <span>Instagram</span>
                <CommandShortcut></CommandShortcut>
              </CommandItem>
            </Link>

            <Link href="https://linkedin.com/in/weimic/" target="_blank" rel="noopener noreferrer">
              <CommandItem className="cursor-pointer">
                <Linkedin style={{color:'var(--icon-color)'}}/>
                <span>Linkedin</span>
                <CommandShortcut></CommandShortcut>
              </CommandItem>
            </Link>
            
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => setTheme("light")} className="cursor-pointer">
              <Sun style={{color:'var(--icon-color)'}}/>
              <span>Light Mode</span>
            </CommandItem>

            <CommandItem onSelect={() => setTheme("dark")} className="cursor-pointer">
              <Moon style={{color:'var(--icon-color)'}}/>
              <span>Dark Mode</span>
            </CommandItem>

            <CommandItem onSelect={() => setTheme("system")} className="cursor-pointer">
              <SunMoon style={{color:'var(--icon-color)'}}/>
              <span>System</span>
            </CommandItem>
            
          </CommandGroup>

        </CommandList>
      </CommandDialog>
    </>
  )
}