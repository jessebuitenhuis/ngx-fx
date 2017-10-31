import { transition, style, animate, state, trigger } from '@angular/animations';
import {defaultDuration} from "../defaults"

let styleIn = style({
    overflow: 'hidden',
    height: '*'
});

let styleOut = style({
    opacity: '0',
    overflow: 'hidden',
    height: '0px'
});

export function collapseInOut(duration: number = defaultDuration, triggerName: string = 'collapseInOut') {
    return trigger(triggerName, [
        state('*', styleIn),
        state('out', styleOut),
        state('void', styleOut),
        transition('in <=> out', [
            animate(`${duration}ms`)
        ]),
        transition('void <=> *', [
            animate(`${duration}ms`)
        ])
    ])
}
