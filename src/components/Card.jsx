export function Card({ children }) {
  return (
    <div className="w-[220px] h-[350px] bg-slate-400 rounded flex flex-col justify-between">
      <div className="opacity-60 text-center border-b border-black">1M</div>
      <div className="text-center">{children}</div>
      <div className="opacity-60 text-center border-t border-black">1M</div>
    </div>
  )
}

// TODO: Cartões de dinheiro:

//  1 real = 6
//  2 reais = 5
//  3 reais = 3
//  4 reais = 3
//  5 reais = 2
//  10 reais = 1


// TODO: Cartões de propriedades
/**
 * Carta: Avenida Báltica
 * Marrom (cor única) 1M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Avenida Mediterraneo
 * Marrom (cor única) 1M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Avenida Connecticut
 * Azul claro (cor única) 1M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Avenida Oriental
 * Azul claro (cor única) 1M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Avenida Vermont
 * Azul claro (cor única) 1M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Estrada de ferro Pennsylvania 
 * Preto (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M
 * 3x Alugel 3M
 * 4x Alugel 4M (grupo completo)
 * 
 * Carta: Estrada de ferro Expressa
 * Preto (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M
 * 3x Alugel 3M
 * 4x Alugel 4M (grupo completo)
 * 
 * Carta: Estrada de ferro B. & O. 
 * Preto (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M
 * 3x Alugel 3M
 * 4x Alugel 4M (grupo completo)
 * 
 * Carta: Estrada de ferro Reading
 * Preto (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M
 * 3x Alugel 3M
 * 4x Alugel 4M (grupo completo)
 * 
 * Carta: Compania de água
 * Verde claro (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Compania de eletricidade
 * Verde claro (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Avenida Tennesse
 * Laranja (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Avenida Nova York
 * Laranja (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Praça ST. James
 * Laranja (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M (grupo completo)
 * 
 * Carta: Praça São Carlos
 * Roxo (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M
 * 3x Alugel 4M (grupo completo)
 * 
 * Carta: Avenida Estados
 * Roxo (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M
 * 3x Alugel 4M (grupo completo)
 * 
 * Carta: Avenida Virginia
 * Roxo (cor única) 2M (valor)
 * 1x Alugel 1M
 * 2x Alugel 2M
 * 3x Alugel 4M (grupo completo)
 * 
 * Carta: Avenida Ventnor
 * Amarelo (cor única) 3M (valor)
 * 1x Alugel 2M
 * 2x Alugel 4M
 * 3x Alugel 6M (grupo completo)
 * 
 * Carta: Avenida Atrântico
 * Amarelo (cor única) 3M (valor)
 * 1x Alugel 2M
 * 2x Alugel 4M
 * 3x Alugel 6M (grupo completo)
 * 
 * Carta: Jardins Marvin
 * Amarelo (cor única) 3M (valor)
 * 1x Alugel 2M
 * 2x Alugel 4M
 * 3x Alugel 6M (grupo completo)
 * 
 * Carta: Avenida Kentucky
 * Vermelho (cor única) 3M (valor)
 * 1x Alugel 2M
 * 2x Alugel 4M
 * 3x Alugel 6M (grupo completo)
 * 
 * Carta: Avenida Indiana
 * Vermelho (cor única) 3M (valor)
 * 1x Alugel 2M
 * 2x Alugel 4M
 * 3x Alugel 6M (grupo completo)
 * 
 * Carta: Avenida Illinois
 * Vermelho (cor única) 3M (valor)
 * 1x Alugel 2M
 * 2x Alugel 4M
 * 3x Alugel 6M (grupo completo)
  * 
 * Carta: Avenida Carolina do Norte
 * Verde (cor única) 4M (valor)
 * 1x Alugel 2M
 * 2x Alugel 4M
 * 3x Alugel 7M (grupo completo)
 * 
 * Carta: Avenida Pennsylvania
 * Verde (cor única) 4M (valor)
 * 1x Alugel 2M
 * 2x Alugel 4M
 * 3x Alugel 7M (grupo completo)
 * 
 * Carta: Avenida Pacífico
 * Verde (cor única) 4M (valor)
 * 1x Alugel 2M
 * 2x Alugel 4M
 * 3x Alugel 7M (grupo completo)
 *  
 * Carta: O pier
 * Azul (cor única) 4M (valor)
 * 1x Alugel 3M
 * 2x Alugel 8M (grupo completo)
 * 
 * Carta: Praça Park
 * Azul (cor única) 4M (valor)
 * 1x Alugel 3M
 * 2x Alugel 8M (grupo completo)
 * 
*/