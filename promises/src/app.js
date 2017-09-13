// Promises are, just like callbacks, a way of dealing with things being 
// asynchronous - when we don't know for certain in what order things will happen. 
// But promises are more powerful than callbacks because they compose - you can combine 
// promises and chain them, all kinds of cool stuff
import loadImage from './load-image'

let addImg = (src) => {
  let imgElement =
    document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg'),
  loadImage('images/cat4.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch((error) => {
  // handle error later
})
