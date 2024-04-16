"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12">
      <h2 className="text-xl font-bold">Oh không!</h2>
      <p className="my-2">
        Đã xảy ra sự cố với cửa hàng của chúng tôi. Đây có thể là sự cố tạm
        thời, vui lòng thử lại lần nữa.
      </p>
      <button
        className="border mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide hover:opacity-90"
        onClick={() => reset()}
      >
        Thử lại
      </button>
    </div>
  );
}
