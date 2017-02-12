const async = require('async');
const exec = require('child_process').exec;
const packageJSON = require('../package.json');

const tasks = Object
  .keys(packageJSON.dependencies)
  .map(dep => {
    return update(dep, '--save');
  });

const devTasks = Object
  .keys(packageJSON.devDependencies)
  .map(dep => {
    return update(dep, '--save-dev');
  });

const taskList = [].concat(tasks, devTasks);

function update (dep, flag) {
  return done => {
    console.log('----> updating %s...', dep);
    exec(`npm i ${dep}@latest ${flag}`, err => {
      if (err) {
        return done(err);
      }

      console.log('+++++ updated %s!', dep);
      done(null);
    });
  };
}

async.series(taskList, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  process.exit(0);
});
