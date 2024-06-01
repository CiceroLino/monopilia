import { ActionCard } from "./components/Card/ActionCard";
import { MoneyCard } from "./components/Card/MoneyCard";
import { PropertyCard } from "./components/Card/PropertyCard";

export default function App() {
  return (
    <div className="p-4 flex gap-1">
      <ActionCard
        name={'Aluguel'}
        description={'Escolha uma dessas cores. Todos os jogadores devem pagar o aluguel dessa cor.'}
        image={'https://aventurasnahistoria.uol.com.br/media/_versions/entretenimento/barriga_madruga_cobrando_widelg.jpg'}
        value={1}
      />

      <MoneyCard
        image={'https://static.biologianet.com/2023/01/capivara.jpg'}
        value={10}
      />

      <PropertyCard
        name={'O Cais'}
        value={4}
        rentValues={[3, 8]}
      />
    </div>
  )
}
