

async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(1000)
    node.text = ""
    await node.type('')
    
    while (true) {
      await node.type('Developer')
      await sleep(2000)
      await node.delete('Developer')
      await node.type('Photographer')
      await sleep(2000)
      await node.delete('Photographer')
      await node.type('Designer')
      await sleep(2000)
      await node.delete('Designer')
    }
  }

  
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get text () {
      return this.innerText
    }
    set text (value) {
      return this.innerHTML = value
    }
    
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.text += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.text = this.text.slice(0, this.text.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init();
  
  ScrollReveal().reveal('.headings', { delay: 200 });
  ScrollReveal().reveal('.card', { interval:100, delay: 600 });
  ScrollReveal().reveal('.sectiontitles', { interval:100, delay: 600 });
  ScrollReveal().reveal('.imgJosh', { interval:100, delay: 600 });
  ScrollReveal().reveal('.skillsbtn', { interval:200, delay: 800 });
  ScrollReveal().reveal('#contactIcons', { interval:100, delay: 600 });
  ScrollReveal().reveal('.cvdownloadbtn', { interval:100, delay: 700 });


  