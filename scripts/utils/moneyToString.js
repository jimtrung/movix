export function MoneyToString(money) {
  const formattedNumber = money.toLocaleString('vi-VN');
  return formattedNumber;
}