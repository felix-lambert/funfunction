// composition is designing your types with what they do
// inheritance is designing your types with what they are
const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

barker({name: 'karp'}).bark()
// Woof, I am karo

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  }
  return Object.assign(
    {},
    barker(state),
    driver(state)
  )
}

murderRobotDog('sniffles').bark()