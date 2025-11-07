export const withAlpha = (color: string, alpha: number) =>
  `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`

export const shiftColor = (
  color: string,
  deltas: { r?: number; g?: number; b?: number },
) => {
  const format = (channel: "r" | "g" | "b", delta = 0) => {
    if (delta === 0) return channel
    const operator = delta > 0 ? "+" : "-"
    return `calc(${channel} ${operator} ${Math.abs(delta)})`
  }

  return `rgb(from ${color} ${format("r", deltas.r)} ${format(
    "g",
    deltas.g,
  )} ${format("b", deltas.b)})`
}
