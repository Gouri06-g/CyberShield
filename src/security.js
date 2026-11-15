export function getRiskLevel(score) {
  if (score >= 80) {
    return "LOW";
  } else if (score >= 50) {
    return "MEDIUM";
  } else {
    return "HIGH";
  }
}