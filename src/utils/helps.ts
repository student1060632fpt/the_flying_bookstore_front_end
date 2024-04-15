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
export { chunkArray };
