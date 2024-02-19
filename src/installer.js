const execFile = require('child_process')

function intellectInstaller() {
  const installerPath = 'D:\\distr'
  const installArguments = [
    '/S',
    '/COMPONENTS = "IntellectServer"',
    '/CONFIG="D:\\путь к файлу к конфигу"',
  ]

  execFile(installerPath, installArguments, (error, stdout, stderr) => {
    if (error) {
      console.error('Ошибка', error)
      return
    }
    console.log('stdout:', stdout)
    console.error('stdout:', stderr)
  })
}

module.exports = { intellectInstaller }
