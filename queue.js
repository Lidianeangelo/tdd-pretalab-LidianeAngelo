class Queue {
  elements
  constructor(){
    this.elements = []
  }
  

  

  add(item) {
    this.elements.push(item)
  }

  
  isEmpty() {
    return this.elements.length === 0
  }

  peek(){
    if (this.isEmpty()) {
      throw new Error('Queue is empty')
    }
    return this.elements[0]
  }

  size() {
    return this.elements.length
  }

  remove() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty')
    }
    return this.elements.shift()
  }
  
  
}

module.exports = Queue