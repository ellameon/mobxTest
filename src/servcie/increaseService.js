import {valueStore} from "../stores/valueStore";
import {runInAction} from "mobx";
import {getColorByValue} from "./getColorByValue";

export function increaseValue() {

    //валидация

    //запросы на бэк (через уровень транспорта)

    runInAction(() => {
        valueStore.value++
        valueStore.color = getColorByValue(valueStore.value)
    })
}
