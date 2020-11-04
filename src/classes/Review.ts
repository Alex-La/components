import ImageObject from "./ImageObject";

class Review {
  constructor(
    public id: string,
    public title: string,
    public message: string,
    public author: string,
    public date: number,
    public photo?: ImageObject
  ) {}
}

export default Review;
