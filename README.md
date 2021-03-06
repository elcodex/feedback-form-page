# Свёрстанная страница

[Demo page](https://feedback-form-test1234.herokuapp.com)

[Скриншот макета из Figma](https://raw.githubusercontent.com/elcodex/feedback-form-page/master/Original%20design%20layout.png)

`#React` `#JavaScript` `#Jest` `#hooks` `#css` `#html` `#responsive_layout`

## Что реализовано в приложении:

- Приложение на React с хуками и prop-types. Интересные компоненты с точки зрения кода: Form, FileSelector, Input. Логика отправки формы в src/api/. 

- Адаптивная верстка, БЭМ для css. Там есть ещё над чем подумать (например, файловый компонент).

- Добавила текст ошибки над кнопкой отправки, список загруженных файлов, состояния кнопки отправки (hover, disabled). Но не стала особо стилизовать. Этого не было в макете.

- Шрифт "Font Awesome 5 Pro" платный, поэтому использовала svg из макета.

- Есть несколько тестов на API и на саму форму.


## Вопросы по макету:

- как должны выглядеть ссылки, кнопки в других состояниях (visited, hover, active)?

- для почты используется другой шрифт (Roboto). Может стоит его поменять на Objective как везде, чтобы не перегружать страницу?

- если логотип - это ссылка, то как он должен выглядеть при наведении и т.д.

- логотип выглядит странновато, с артефактами. Так и должно быть?

- в поле загрузки файлов: где должны отображаться названия файлов, и что делать при длинных названиях файлов и большом числе файлов?

- нужно подумать об отображении элементов на мобильном экране, особенно футера (там очень много элементов),

- где и как отображать ошибку, если она произошла при отправке формы?

- нет текста ошибок при неправильно заполненной форме,

- избыточно длинное подчёркивание в надписи "Get In Touch" (убрала),

- на макете нет подсветки области перетаскивания файлов, а очень хотелось бы.



