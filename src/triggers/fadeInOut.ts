import { transition, style, animate, state, trigger } from '@angular/animations';
import {defaultDuration} from "../defaults"

export function fadeInOut(duration: number = defaultDuration, triggerName: string = 'fadeInOut') {
    return trigger(triggerName, [
        state('void', style({opacity: 0})),
        state('in', style({opacity: 1})),
        transition(':enter', [
            animate(`${duration}ms`)
        ]),
        transition(':leave', [
            animate(`${duration}ms`)
        ])
    ])
}