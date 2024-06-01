export function Card({ children }) {
  return (
    <div className="w-[220px] h-[350px] bg-slate-400 rounded flex flex-col justify-between">
      <div className="opacity-60 text-center border-b border-black">1M</div>
      <div className="text-center">{children}</div>
      <div className="opacity-60 text-center border-t border-black">1M</div>
    </div>
  )
}