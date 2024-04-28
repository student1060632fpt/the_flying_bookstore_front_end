import Image from "next/image";
import LoadingImg from "@/assets/images/loading-dog.gif"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full  flex items-center justify-center">
      <Image src={LoadingImg} alt="loading" unoptimized className="my-32 rounded-lg" width={400}/>
    </div>
  );
}
