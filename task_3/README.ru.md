# Task 3

###### [перейти на английскую документацию](./README.md)

## Описание📌

`MainComponent` не не получает входящие `props` и постоянно использует `props` по умолчанию.    
`ChildComponent` мемоизирован, но мемоизация не работает, так как компонент всё равно перерисовывается каждый раз, когда обновляется родительский компонент (`MainComponent`).

## Задание📝

Сделайте так, чтобы мемоизация работала.
