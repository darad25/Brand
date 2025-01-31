"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  return (
    <div className="flex items-center gap-4">
      <div className="hidden items-center gap-6 sm:flex">
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Services
        </a>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="sm:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-4 flex flex-col gap-2">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

