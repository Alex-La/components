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
btnVariant?: string; цвет кнопки стандартных вариантов Bootstrap (primary, т.д.) <br />
