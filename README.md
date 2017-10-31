# ngx-fx
Angular 2+ animations library

## Why
I'm building this library since I couldn't find any good implementations of libraries like animate.css for Angular2+. I did find one for Angular 1.x:
- https://github.com/AngularClass/ng-fx

Also i found one for Angular2, but I dislike it since it doesn't use the default decorator `animations: []` and `[@animationTrigger]` syntax Angular2 docs use.
- https://www.npmjs.com/package/css-animator

## Roadmap
I'm planning to add transition as I need them, and I'm hoping to find some like minded people to create a full-featured library. Shout out if you'd like me to work on this more, and feel free to contribute. I'll add some examples of code style later to keep it consistent.

## Triggers
Every trigger returns a function to setup the trigger to your needs.

defaultDuration = 500

### collapseInOut  
- duration: number = defaultDuration
- triggerName: string = 'collapseInOut'

### fadeInOut  
- duration: number = defaultDuration
- triggerName: string = 'fadeInOut'
