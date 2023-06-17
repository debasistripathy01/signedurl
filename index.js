const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.YOUR_AWS_SECRET_ACCESS_KEY,
    region: process.env.YOUR_AWS_REGION,
});

const s3 = new AWS.S3();
console.log("URL generated", s3);

const params = {
    Bucket: 'beneath0',
    Key: '20230421_085311_11zon.jpeg',
    Expires: 300,
  };
  
  const signedUrl = s3.getSignedUrl('getObject', params);
  console.log('Signed URL:', signedUrl);





  // experiment of the file

  const params2 = {
    Bucket: '20230421_085311_11zon.jpeg',
  };
  
  s3.listObjects(params2, (err, data) => {
    if (err) {
      console.error('Error objects:', err);
    } else {
      console.log('Objects in the bucket:', data.Contents);
    }
  });