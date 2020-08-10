const core = require('@actions/core');
const github = require('@actions/github');

try {
  const commit = github.context.sha;
  const latest = require('child_process').execSync('git rev-parse HEAD').toString().trim();
  if (commit != latest) {
    core.setFailed(`Commit ${commit} is not latest`)
  } else {
    console.log(`Hash check passed`);
  }
  
} catch (error) {
  core.setFailed(error.message);
}