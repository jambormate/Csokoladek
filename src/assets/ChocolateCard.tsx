interface ChocolateCardProps {
  name: string
  brand: string
  isDark: boolean
  cocoaPercentage: number
  ingredients: string[]
}

function ChocolateCard({
  name,
  brand,
  isDark,
  cocoaPercentage,
  ingredients
}: ChocolateCardProps) {
  return (
    <tr
      style={{
        backgroundColor: isDark ? "#333" : "#f2f2f2",
        color: isDark ? "#fff" : "#000"
      }}
    >
      <td>{name}</td>
      <td>{brand}</td>
      <td>{isDark ? "Igen" : "Nem"}</td>
      <td>{cocoaPercentage}%</td>
      <td>{ingredients.join(", ")}</td>
      <td>
        {isDark ? "Ez egy étcsokoládé." : "Ez tejcsoki vagy más típus."}
      </td>
    </tr>
  )
}

export default ChocolateCard
