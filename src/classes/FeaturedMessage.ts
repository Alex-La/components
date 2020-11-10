import ImageObject from "./ImageObject";

class FeaturedMessage {
  constructor(
    public id: string,
    public title: string,
    public message: string,
    public date: number,
    public image?: ImageObject,
    public linkName?: string,
    public linkHref?: string
  ) {}
}

export default FeaturedMessage;
