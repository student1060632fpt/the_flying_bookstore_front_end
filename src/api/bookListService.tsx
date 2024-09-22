import axios, { AxiosResponse } from "axios";
import { IListing } from "@/types/book";
import { PageResponse } from "@/types/page";
import { port } from "../utils/env";


const getBookDetailService = async (detailId: string) => {
  try {
    const response: AxiosResponse<IListing> = await axios.request({
      url: `http://${port}/api/listing/detailListing/${detailId}`,
    });
    // return response.data;
  } catch (error) {
    console.log(error);
  }
  return bookDummy; //TODO delete it when have api
}
const getManyBookService = async (paramsAxios: any) => {
  try {
    const response: AxiosResponse<PageResponse<IListing>> =
      await axios.request({
        maxBodyLength: Infinity,
        url: `http://${port}/api/listing/search`,
        params: paramsAxios,
      });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
const getAllBookService = async () => {
  try {
    const response: AxiosResponse<PageResponse<IListing>> = await axios.request({
      url: `http://${port}/api/listing/search`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    throw new Error("Get Book failed");
  }
}
export { getBookDetailService, getAllBookService, getManyBookService }

const bookDummy:IListing = {
  "id": 858,
  "ownerId": 1,
  "quantity": 10,
  "address": "123 Nguyễn Trọng Tuyển, phường 12, quận Bình Thạnh",
  "expiryDate": null,
  "leaseRate": 1400,
  "depositFee": 262400,
  "penaltyRate": 2900,
  "description": "When Patrick Hyde witnesses the shooting down of a Soviet airliner near the Afghan border, he has only one option - to reach London. His enemies, American and Russian, have to silence him. To stay alive means killing and running - from Afghanistan to Delhi to California.Patrick Hyde, a top operative for spymaster Sir Kenneth Aubrey, is hunted by a renegade CIA agent after witnessing the destruction of a Russian airliner designed to kill a prominent Soviet reformer.",
  "copy": {
    "id": 862,
    "bookId": 2637,
    "ownerId": 1,
    "quantity": 10,
    "imageLink": "http://books.google.com/books/content?id=xAR5QgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "damagePercent": 4,
    "createdDate": null,
    "updatedDate": null,
    "deletedDate": null,
    "copyStatus": "AVAILABLE"
  },
  "book": {
    "id": 2637,
    "isbn": "451456548",
    "title": "Terminal",
    "authors": [
      "Colin Forbes"
    ],
    "languageCode": "en",
    "genre": [
      "Thriller",
      "Fiction",
      "Spy Thriller",
      "Espionage",
      "Mystery",
      "Crime",
      "Suspense",
      "Thriller",
      "Mystery Thriller",
      "Action",
      "Modern",
      "Contemporary",
      "Adventure"
    ],
    "publisher": "Oxford University Press",
    "publishedDate": "1985-01-01",
    "pageCount": 317,
    "size": "15.5x20.5"
  },
  user: {
    id: 0,
    username: "",
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    avatarUrl: null,
    address: "",
    password: null
  },
  price: 300000,
  allow_rent: false,
  allow_purchase: false
}