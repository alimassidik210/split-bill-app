export function formantCurrency(value) {
  return value.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}
