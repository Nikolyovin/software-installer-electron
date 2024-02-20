const { execFile } = require('child_process')

const intellectInstaller = () => {
  // const installerPath = 'D:/distr/intellect_4.11.3.4036/setup.exe'
  // const installerPath = 'D:/distr/intellect/Redist.exe'
  const installerPath = 'D:/distr/intellect/setup.exe'
  // const installerPath = 'D:/distr/vlc-3.0.17.4-win64.exe'
  // const installerPath = 'D:/distr/UltraVNC_1_3_81_X64_Setup.exe'
  // const installerPath = 'D:/distr/DWS.exe'
  const installArguments = []

  // '/quiet',
  // '/LANG="ru"',
  // '/INSTALLTYPE="Client"',
  // '/REMOVE="Acrobat Guardant_x86 SQLServer_x86 ElasticSearch"',
  // "/CMD=\"/CREATE_QUICKLAUNCH_SHORTCUT='0' /DEBUG='1'\"",

  execFile(installerPath, installArguments, (error, stdout, stderr) => {
  // execFile(installerPath, (error, stdout, stderr) => {
    if (error) {
      console.error('Ошибка', error)
      return
    }

    console.log('Start*:', stdout)

    console.log('stdout*:', stdout)
    if (stderr) {
      console.error('stderr:', stderr)
    }

    console.log('THE END!')
  })
}

module.exports = { intellectInstaller }
