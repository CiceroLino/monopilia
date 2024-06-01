import { BaseCard } from "./BaseCard";

export function ActionCard({ image, name, description, value }) {
  return (
    <BaseCard value={value}>
      <div className="w-full h-full flex flex-col p-2">
        <h3 className="my-1">Ação</h3>
        <img src={image} className="h-4/5 w-full" />
        <h3 className="text-lg font-bold my-1">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </BaseCard>
  );
}
