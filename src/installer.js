const { execFile, exec } = require('child_process');

const intellectInstaller = () => {
  // const installerPath = '/home/niko/intellect/setup.exe';
  // const installerPath = 'D:\\distr\\DWS.exe';
  // const installerPath = 'D:\\distr\\vlc-3.0.17.4-win64.exe';
  const installerPath = 'D:\\distr\\intellect\\setup.exe';
  // const installArguments = [
  //   // '/quiet',
  //   // '/LANG="ru"',
  //   // '/INSTALLTYPE="Client"',
  //   // '/REMOVE="Acrobat Guardant_x86 SQLServer_x86 ElasticSearch"',
  //   '/CMD=\"/CREATE_QUICKLAUNCH_SHORTCUT=\'0\' /DEBUG=\'1\'\"'
  // ];

  const command = `"${installerPath}"`

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`ERROR***: ${error}`)
      return
    }
    console.log(`STDOUT***: ${stdout}`);
    console.error(`STDERR***: ${stderr}`);
  })
};

const vncInstaller = () => {
  const installerPath = 'D:\\distr\\UltraVNC_1_3_81_X64_Setup.exe'

  const command = `"${installerPath}"`

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`ERROR***: ${error}`)
      return
    }
    console.log(`STDOUT***: ${stdout}`);
    console.error(`STDERR***: ${stderr}`);
  })
}

module.exports = { intellectInstaller, vncInstaller };
