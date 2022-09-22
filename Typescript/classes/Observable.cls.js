
class Observable {
    constructor() {
        // list of all subscribers
        this.subscribers = []
    }

    // subcribing to the observable
    subcribe(fn) {
        this.subscribers.push(fn)
    }

    // unsubcribing
    unSubcribe(fn) {
        this.subscribers = this.subscribers.filter(items => items != fn)
    }

    //broadcast methods
    broadCast(data) {
        for (let i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i](data);
        }
    }
}

const observer = new Observable()


const fn = (data) => {
    console.log("observable fnx : ->", data);
}

observer.subcribe(fn)
observer.broadCast("sending data to all Observables")