# timeismoney

[![Parallel build](https://github.com/wiiitek/timeismoney/actions/workflows/parallel-build.yml/badge.svg)](https://github.com/wiiitek/timeismoney/actions/workflows/parallel-build.yml)
[![sonarcloud.io](https://sonarcloud.io/api/project_badges/measure?project=wiiitek_timeismoney&metric=alert_status)](https://sonarcloud.io/dashboard?id=wiiitek_timeismoney)
[![Known Vulnerabilities](https://snyk.io/test/github/wiiitek/timeismoney/badge.svg)](https://snyk.io/test/github/wiiitek/timeismoney)

Please use NodeJS version hydrogen (24.x).

## Running Sonar analysis

To manually run Sonar analysis run `export SONAR_TOKEN=<sonar token>` for Sonar credentials and then `npm run sonar`.

## How to delete old GitHub workflow runs

With help of [GitHub client](https://cli.github.com/):

```bash
gh api '/repos/wiiitek/timeismoney/actions/workflows/parallel-build.yml/runs?per_page=50' --paginate \
  | jq -r '.workflow_runs[].id' > all-actions.txt


cat all-actions.txt \
  | while IFS= read -r RUN_ID; do
      echo "🗑️  Deleting workflow run $RUN_ID"
      gh api --silent -X DELETE "repos/wiiitek/timeismoney/actions/runs/$RUN_ID"
    done
```