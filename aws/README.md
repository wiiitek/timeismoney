# aws

## Regions

Map of [AWS Regions](https://infrastructure.aws/).

## AWS Client configuration

[Install](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and
[configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) AWS CLI version 2.

## Bucket creation

This template create S3 bucket and additional user
with permissions to push to that bucket (i.e. for Continuous Integration).

Create bucket:

```bash
aws cloudformation deploy \
 --template-file static-page.cfn.yml \
 --capabilities CAPABILITY_IAM \
 --stack-name timeismoney
```

Upload HTML files to the bucket:

```bash
aws sync content s3://<bucket-name>
```
