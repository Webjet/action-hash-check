const core = require('@actions/core');
const github = require('@actions/github');

try {
  const commit = github.context.sha;
  const latest = require('child_process').execSync('git rev-parse HEAD').toString();
  console.log(latest);
  
} catch (error) {
  core.setFailed(error.message);
}