enum Colors {
  RED = "255, 0, 0",
  GREEN = "0, 255, 0",
  BLUE = "0, 0, 255",
  YELLOW = "255, 255, 0"
}

export function isPrimaryColor(color: Colors): boolean {
  return color === Colors.BLUE || color === Colors.GREEN || color === Colors.RED;
}