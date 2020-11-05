# Документация компонентов

## Компонент Headline

text?: "dark" | "white"; <br />
bg?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"; <br />
firstImage?: ImageObject; - первое изобаражение, может быть единственным <br />
secondImage?: ImageObject; - второе изображение <br />
tagline?: string; - слоган <br />
clarification?: string; - пояснительный текст <br />
linkBtnText?: string; - текст кнопки переадресации, кнопка отображается, если текст указан <br />
linkBtnHref?: any; - адрес переадресации кнопки (не обязательно) <br />
btnVariant?: string; - цвет кнопки стандартных вариантов Bootstrap (primary, т.д.) <br />

## Компонент Carousel

Стандартные свойства Bootsrap Carousel

controls?: boolean; <br />
fade?: boolean; <br />
indicators?: boolean; <br />
interval?: number; <br />
onSelect?: (eventKey: number, event: Object | null) => void; <br />
onSlid?: (eventKey: number, direction: "left" | "right") => void; <br />
onSlide?: (eventKey: number, direction: "left" | "right") => void; <br />
pause?: "hover" | false; <br />
slide?: boolean; <br />
touch?: boolean; <br />
wrap?: boolean; <br />

## Компонент News

marginBottom?: string; - отступ между карточками новостей <br />
width?: string; - ширина карточки <br />
text?: "dark" | "white"; - цвет текста <br />
bg?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"; - цвет фона <br />
messages: FeaturedMessage[]; - массив новостей <br />

## Компонент Reviews

bg?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"; - цвет фона <br />
text?: "white" | "dark"; - цвет текста <br />
imageShape?: "rounded-circle" | "rounded"; - форма аватара <br />
reviews: Review[]; - массив отзывов <br />

## Компонент Video

title?: string; - заголовок <br />
subTitle?: string; - подзаголовок <br />
aspectRatio?: "16by9" | "21by9" | "4by3" | "1by1" | undefined; - соотношение сторон видео <br />
videoURL: string; - ссылка на видео <br />

## Компонент Picture

title?: string; - заголовок <br />
subTitle?: string; - подзаголовок <br />
aspectRatio?: "16by9" | "21by9" | "4by3" | "1by1" | undefined; - соотношение сторон изображения <br />
pictureURL: string; - ссылка на изображение <br />

## Компонент FAQ

bg?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"; - цвет фона <br />
text?: "white" | "dark"; - цвет текста <br />
questions: QA[]; - массив вопросов <br />
