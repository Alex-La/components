# Документация компонентов

## Блок Headline

backgroundColor?: string; - цвет фона <br />
textColor?: string; - цвет текста <br />
firstImage?: ImageObject; - первое изобаражение, может быть единственным <br />
secondImage?: ImageObject; - второе изображение <br />
tagline?: string; - слоган <br />
clarification?: string; - пояснительный текст <br />
linkBtnText?: string; - текст кнопки переадресации, кнопка отображается, если текст указан <br />
linkBtnHref?: any; - адрес переадресации кнопки (не обязательно) <br />
onLinkBtn?: () => void; - callBack функция для кнопки переадресации (не обязательно) <br />
btnVariant?: string; - цвет кнопки стандартных вариантов Bootstrap (primary, т.д.) <br />

## Блок Карусель

Стандартные свойства Bootsrap Carousel

controls?: boolean;
fade?: boolean;
indicators?: boolean;
interval?: number;
onSelect?: (eventKey: number, event: Object | null) => void;
onSlid?: (eventKey: number, direction: "left" | "right") => void;
onSlide?: (eventKey: number, direction: "left" | "right") => void;
pause?: "hover" | false;
slide?: boolean;
touch?: boolean;
wrap?: boolean;

## Блок Новости

marginBottom?: string; - отступ между карточками новостей
width?: string; - ширина карточки
text?: "dark" | "white"; - цвет текста
bg?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"; - цвет фона
messages: FeaturedMessage[]; - массив новостей
