import Link from "next/link";

const CategoryList = () => {
  return (
    <Link href="/search#abc">
      <div className="flex flex-col gap-3 text-gray-500 text-sm">
        <p>Hư cấu</p>
        <p>Văn học hiện đại</p>
        <p>Văn học kinh điển</p>
        <p>Thiếu nhi</p>
        <p>Lãng mạn</p>
      </div>
    </Link>
  );
};

const BookCategoryList = () => {
  return (
    <div className="container mx-auto my-10">
      <h5 className="font-semibold mb-5">+ Phân loại sách</h5>
      <div className="columns-5">
        <CategoryList />
        <CategoryList />
        <CategoryList />
        <CategoryList />
        <CategoryList />
      </div>
    </div>
  );
};

export default BookCategoryList;
