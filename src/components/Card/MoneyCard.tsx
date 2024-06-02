import { BaseCard } from "./BaseCard";

interface IMoneyCardProps {
  image: string;
  value: string | number;
}

export function MoneyCard({ image, value }: IMoneyCardProps) {
  return (
    <BaseCard value={value}>
      <div className="w-full h-full flex flex-col justify-center p-2">
        <img src={image} className="h-3/5 rounded" />
      </div>
    </BaseCard>
  );
}
