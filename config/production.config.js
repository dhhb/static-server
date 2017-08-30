module.exports = {
  port: process.env.NODE_PORT || process.env.PORT || 80,
  host: 'localhost',
  s3: {
    key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: 'dhhb-dev',
    bucketUrl: 'http://$(s3.bucket).s3.amazonaws.com',
    url: 'https://s3.amazonaws.com'
  }
};

