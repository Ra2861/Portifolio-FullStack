import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  bgColor?: string
}

export function SkillBadge({ name, bgColor = "bg-gray-200" }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 border-2 border-black font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0)] inline-block",
        bgColor,
      )}
    >
      {name}
    </div>
  )
}

