import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  rotate?: string
  bgColor?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  rotate = "rotate-0",
  bgColor = "bg-white",
}: ProjectCardProps) {
  return (
    <div className={cn("border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]", rotate, bgColor)}>
      <div className="bg-white border-2 border-black overflow-hidden mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform"
        />
      </div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span key={index} className="bg-white px-3 py-1 text-sm font-medium border-2 border-black">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <Button className="bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0)] flex-1 flex items-center justify-center gap-2">
          <ExternalLink size={16} />
          Demo
        </Button>
        <Button
          variant="outline"
          className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0)] flex-1 flex items-center justify-center gap-2"
        >
          <Github size={16} />
          Code
        </Button>
      </div>
    </div>
  )
}

