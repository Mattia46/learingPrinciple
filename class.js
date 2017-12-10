class Barker {
    constructor(state) {
        this.state = state;
    }
    bark() {
        return this.state.name;
    }
}
class Add extends Barker {
    constructor(state) {
        super()
        this.state = state;
    }
    plus() {
        return this.state.value++
    }
}
class Robot extends Add {
    constructor(name) {
        super()
        this.state = {
            name,
            value: 12
        }
    }
}

module.exports = {
    robot: Robot,
}
