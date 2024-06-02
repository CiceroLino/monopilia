import { BaseCard } from "./BaseCard";

interface IPropertyCardProps {
  name: string;
  value: string | number;
  rentValues: number[];
}

export function PropertyCard({ name, value, rentValues }: IPropertyCardProps) {
  return (
    <BaseCard value={value}>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="h-1/6 w-full bg-blue-700 flex items-center justify-center text-white">{name}</div>

        <div className="h-full w-full px-8 mt-8 flex flex-col items-center">
          <div className="w-2/3 flex justify-between">
            <span className="w-1/5 text-sm">n°</span>
            <span className="w-1/5 text-sm">Aluguel</span>
          </div>
          {
            rentValues.map((value, index) => (
              <div key={`${name}-${index}`} className="w-2/3 flex justify-between my-2">
                <div className="bg-white w-1/5 border rounded-sm text-sm">{index + 1}</div>
                <div className="w-1/5 text-center text-sm">
                  <span>{value}M</span>
                </div>
              </div>
            ))
          }
          <small className="italic">Grupo Completo</small>
        </div>

        <div className="h-1/6 w-full bg-blue-700 flex items-center justify-center text-white">{name}</div>
      </div>
    </BaseCard>
  );
}
