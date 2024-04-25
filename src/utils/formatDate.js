export default function formatDate(date) {
  return new Date(date).toLocaleDateString("pt-br", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
}
