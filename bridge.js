const OSC = require('osc-js')

const options = {
    udpServer: {
        port: 10001
    },
    udpClient: {
      port: 10000
    }
  }

const osc = new OSC({ plugin: new OSC.BridgePlugin(options) })
osc.open()
