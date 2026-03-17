# timeismoney

[![Parallel build](https://github.com/wiiitek/timeismoney/actions/workflows/parallel-build.yml/badge.svg)](https://github.com/wiiitek/timeismoney/actions/workflows/parallel-build.yml)
[![sonarcloud.io](https://sonarcloud.io/api/project_badges/measure?project=wiiitek_timeismoney&metric=alert_status)](https://sonarcloud.io/dashboard?id=wiiitek_timeismoney)
[![Known Vulnerabilities](https://snyk.io/test/github/wiiitek/timeismoney/badge.svg)](https://snyk.io/test/github/wiiitek/timeismoney)

Please use NodeJS version hydrogen (24.x).

## Resources

1. GitHub projects with split-flap (Solari) boards:
    - [paulcuth/departure-board](https://github.com/paulcuth/departure-board) (used by this project)
    - [raexvk/flipboard-clock](https://github.com/raexvk/flipboard-clock)
    - [EmmyBeckmann/vintage-airport-splitflap](https://github.com/EmmyBeckmann/vintage-airport-splitflap)
    - [DavidTropiansky/Subway-Split-Flap-Solari-v2](https://github.com/DavidTropiansky/Subway-Split-Flap-Solari-v2)
    - [baspete/Split-Flap](https://github.com/baspete/Split-Flap)
    - [yannickl/Splitflap](https://github.com/yannickl/Splitflap)
    - [robonyong/react-split-flap-display](https://github.com/robonyong/react-split-flap-display)
2. [Split-flap display](https://en.wikipedia.org/wiki/Split-flap_display) (Wikipedia)

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
