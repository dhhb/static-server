import express from 'express';
import request from 'request';
import config from 'c0nfig';

export default function buckets () {
  const router = express.Router();

  router.get('/s3/*', (req, res) => {
    const bucketKey = Object.keys(req.params).map(key => req.params[key]).join('/');
    const s3Url = `${config.s3.bucketUrl}/${bucketKey}`;
    return request(s3Url).pipe(res);
  });

  return router;
}

