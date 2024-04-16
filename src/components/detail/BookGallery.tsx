import Image from "next/image";
import "./BookGallery.scss";
import NoImg from "@/assets/images/book loading.gif"

const BookGallery = ({bookImg}:{bookImg:string|undefined}) => {

  return (
    <div>
      <div className="image-cover">
        <Image src={bookImg||NoImg} alt="book" fill />
      </div>
      
    </div>
  );
};

export default BookGallery;
