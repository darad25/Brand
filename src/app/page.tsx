import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F3F2E0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-8">
          <div className="flex items-center gap-2 text-lg">
            <h1 className="font-bold">Willow</h1>
            <span className="text-gray-600">|</span>
            <a href="mailto:hi@fowbase.com" className="text-gray-600 hover:text-gray-900">
              hi@fowbase.com
            </a>
          </div>
          <nav className="flex gap-8 text-sm">
            <a href="#" className="hover:text-gray-600">
              Company
            </a>
            <a href="#" className="hover:text-gray-600">
              Work
            </a>
            <a href="#" className="hover:text-gray-600">
              Services
            </a>
            <a href="#" className="hover:text-gray-600">
              Blog
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="relative mt-6 grid gap-12 pb-16 lg:grid-cols-2 lg:gap-8">
          {" "}
          {/* Changed pb-12 to pb-16 */}
          <div className="max-w-xl pt-8">
            <div className="space-y-4">
              <p className="text-2xl uppercase tracking-wide text-gray-600">Welcome to Willow</p>
              <h2 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Elevate your brand with Willow
              </h2>
              <p className="text-lg text-gray-600">Unlimited design subscriptions to your business</p>
              <div>
                <Button className="bg-[#1B3524] text-white hover:bg-[#1B3524]/90">Get started</Button>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm">Design you will</p>
                <span className="inline-block text-xs">⭐ guaranteed</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-4 top-4 z-10 rounded-l-lg bg-[#1B3524] p-6 text-white">
              <div className="flex flex-col items-end space-y-4">
                <div className="text-right">
                  <p className="text-sm">Start growing with Willow</p>
                  <a href="#" className="mt-1 inline-block text-sm hover:text-gray-200">
                    Book Now →
                  </a>
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1207862195-612x612.jpg-dSa75VOFAIyoz8UxpmGgzk08uydmZt.jpeg"
                alt="Professional in a tan blazer smiling at camera"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

