import { ReactNode } from "react"

interface IBaseCardProps {
  children: ReactNode;
  value: string | number;
}

export function BaseCard({ children, value }: IBaseCardProps) {
  return (
    <div className="w-[220px] h-[350px] bg-rose-50 rounded flex flex-col justify-between">
      <div className="opacity-60 text-center border-b border-black">{value}M</div>
      <div className="text-center h-full">{children}</div>
      <div className="opacity-60 text-center border-t border-black">{value}M</div>
    </div>
  )
}