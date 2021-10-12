let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  await m.reply('SILAHKAN UNTUK DIISI DAN KIRIMKAN KEPADA ADMIN BESERTA BUKTI PEMBAYARANNYA AGAR LANGSUNG DIPROSES OLEH ADMIN')
  let neww = performance.now()
  let speed = neww - old
  let txt = `
*╠ FORMAT ORDER FF ╣8  
➣Nick :  
➣ID  :  
➣Jumlah DM :  
➣Sisa DM :
*╠ FORMAT ORDER ML ╣*
➣Nick :  
➣ID ( SERVER ) :  
➣Jumlah DM :    
➣Sisa DM :
`.trim()
  m.reply(txt)
}
handler.help = ['format']
handler.tags = ['topupgame']

handler.command = /^fotmat$/i
module.exports = handler

