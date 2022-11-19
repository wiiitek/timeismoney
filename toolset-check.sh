#!/usr/bin/env bash

echo "GitHub actor: ${GITHUB_ACTOR}"

echo "Checking tools versions..."
node -v
yarn -v

echo "Checking env variables..."

if [ -z "${SONAR_TOKEN}" ]; then
    echo "\${SONAR_TOKEN} is blank";
    exit 123;
else
    echo "\${SONAR_TOKEN} is set";
fi
