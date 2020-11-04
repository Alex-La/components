import ImageObject from "./ImageObject";

class FeaturedMessage {
  constructor(
    public id: string,
    public title: string,
    public message: string,
    public date: number,
    public image?: ImageObject,
    public link?: string
  ) {}
}

export default FeaturedMessage;
