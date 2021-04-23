type Fn = () => void

class MockImage {
  private source: string
  private loadCb?: Fn
  private errorCb?: Fn

  constructor() {
    this.source = ''
  }

  set onload(cb: Fn) {
    this.loadCb = cb
  }

  set onerror(cb: Fn) {
    this.errorCb = cb
  }

  set src(value: string) {
    this.source = value
    if (value === 'success.png') {
      setTimeout(() => {
        if (this.loadCb) {
          this.loadCb()
        }
      }, 200)
    } else {
      setTimeout(() => {
        if (this.errorCb) {
          this.errorCb()
        }
      }, 200)
    }
  }

  get src() {
    return this.source
  }
}

export default MockImage
