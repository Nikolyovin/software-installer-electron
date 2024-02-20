const { execFile } = require('child_process');

const intellectInstaller = () => {
  const installerPath = '/home/niko/intellect/setup.exe';
  const installArguments = [
    // '/quiet',
    // '/LANG="ru"',
    // '/INSTALLTYPE="Client"',
    // '/REMOVE="Acrobat Guardant_x86 SQLServer_x86 ElasticSearch"',
    // '/CMD=\"/CREATE_QUICKLAUNCH_SHORTCUT=\'0\' /DEBUG=\'1\'\"'
  ];

  execFile('powershell.exe', [
    '-Command',
    `Start-Process -FilePath '${installerPath}' -ArgumentList '${installArguments.join(' ')}' -Verb runAs`
  ], (error, stdout, stderr) => {
    if (error) {
      console.error('Ошибка:', error);
      return;
    }

    console.log('stdout:', stdout);
    if (stderr) {
      console.error('stderr:', stderr);
    }

    console.log('THE END!');
  });
};

module.exports = { intellectInstaller };
