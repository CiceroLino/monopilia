import { BaseCard } from "./BaseCard";

export function MoneyCard({ image, value }) {
  return (
    <BaseCard value={value}>
      <div className="w-full h-full flex flex-col justify-center p-2">
        <img src={image} className="h-3/5 rounded" />
      </div>
    </BaseCard>
  );
}
