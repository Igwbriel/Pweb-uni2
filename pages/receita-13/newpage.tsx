export default function Principal() {
  return (
    <div>
      <h1>Nova Página</h1>
      <MariaPrea mariaPrea="Morreu Maria Preá..." />
    </div>
  )
}

interface MariaPreaProps {
  mariaPrea: string;
}

export function MariaPrea(props: MariaPreaProps) {
  return <h2>{props.mariaPrea}</h2>
}