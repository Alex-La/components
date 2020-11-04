import ImageObject from "./ImageObject";

class MenuElement {
  constructor(
    public id: string,
    public element: string | ImageObject,
    public link: string
  ) {}
}

export default MenuElement;
