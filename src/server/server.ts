import http from 'http'
import path from 'path'
import express from 'express'

const port: number = 3000

class App {
  private app = express()
  private server = new http.Server(this.app)

  constructor(private port: number) {}

  private setMiddleware() {
    this.app.use(express.static(path.join(__dirname, '../client')))
    this.app.use(
      '/build/three.module.js',
      express.static(path.join(__dirname, '../../node_modules/three/build/three.module.js')),
    )
    this.app.use(
      '/jsm/controls/OrbitControls',
      express.static(
        path.join(__dirname, '../../node_modules/three/examples/jsm/controls/OrbitControls.js'),
      ),
    )
  }

  public Start() {
    this.setMiddleware()
    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}.`)
    })
  }
}

new App(port).Start()
