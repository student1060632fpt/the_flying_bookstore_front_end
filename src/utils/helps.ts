const chunkArray = (array: Array<any>, chunkSize: number) => {
  const chunks = [];
  if (chunkSize >= array.length) {
    return array;
  }
  for (let i = 0; i < chunkSize; i++) {
    const newPush = array.slice(i, i + 1);
    chunks.push(newPush[0]);
  }
  return chunks;
};

const formatCurrency = (amount: number|undefined) => {
  if(!amount) return 0;
  // Chuyển số tiền thành chuỗi và thêm dấu chấm phẩy giữa các hàng nghìn
  const formattedAmount = amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Thêm ký tự đơn vị tiền tệ (VND)
  return formattedAmount + "đ";
};
const arrayToString = (arr: Array<string> | undefined) => {
  if (!arr) return "";
  return arr.map(
    (item, index) => `${item}${index == arr.length - 1 ? "" : ", "}`
  );
};

export { chunkArray, formatCurrency, arrayToString };
