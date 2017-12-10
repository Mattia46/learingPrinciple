//hinerithance => start big to work down (not flexible and mantainable)
                //You should know everything ahead (not possible future application)
                //what TYPES ARE!
//composition => start smoll and compose new object with only what I need in that object
                //the smollest possible
                //what TYPES DO!

const barker = (state) => ({
    bark: () => {
        return state.name
    }
})
const add = (state) => ({
    plus: () => {
        return state.value++
    },
    deduct: () => {
        return state.value--;
    },
})

const robot = (name) => {
    let state = {
        name,
        value: 12,
    }
    return Object.assign(
        {},
        barker(state),
        add(state)
    )
}
const human = (name) => {
    let state = {
        name
    }
    return Object.assign(
        {},
        barker(state)
    )
}
console.log('>> ROBOT', robot('MAttia').plus());
module.exports = {
    robot: robot('mattia'),
    human: human,
}
