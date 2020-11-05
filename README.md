# Документация компонентов

## Блок Headline

backgroundColor?: string; - цвет фона
textColor?: string; - цвет текста
firstImage?: ImageObject; - первое изобаражение, может быть единственным
secondImage?: ImageObject; - второе изображение
tagline?: string; - слоган
clarification?: string; - пояснительный текст
linkBtnText?: string; - текст кнопки переадресации, кнопка отображается, если текст указан
linkBtnHref?: any; - адрес переадресации кнопки (не обязательно)
onLinkBtn?: () => void; - callBack функция для кнопки переадресации (не обязательно)
btnVariant?: string; цвет кнопки стандартных вариантов Bootstrap (primary, т.д.)
