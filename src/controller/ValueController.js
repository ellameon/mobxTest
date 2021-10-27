import {runInAction} from "mobx";
import {increaseValue} from "../servcie/increaseService";
import {decreaseValue} from "../servcie/decreaseValue";


export class ValueController {

    //если требуется что-то кроме изменения поля стора, то обращаемся в метод в слое сервисов
    static decreaseValue() {
        runInAction(() => {
            try {
                decreaseValue()
            } catch (e) {
                console.log(e)
            }
        })
    }

    static increaseValue() {
        try {
            increaseValue()
        } catch (e) {
            console.log(e)
        }
    }
}
