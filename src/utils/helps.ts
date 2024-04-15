const chunkArray = (array: Array<any>, chunkSize: number) => {
  const chunks = [];
  if (chunkSize >= array.length) {
    return array;
  }
  for (let i = 0; i < chunkSize; i++) {
    const newPush = array.slice(i,i+1);
    chunks.push(newPush[0]);
  }
  return chunks;
};

const formatCurrency = (amount:number)=> {
  // Chuyển số tiền thành chuỗi và thêm dấu chấm phẩy giữa các hàng nghìn
  const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  
  // Thêm ký tự đơn vị tiền tệ (VND)
  return formattedAmount + "đ";
}



export { chunkArray,formatCurrency };
