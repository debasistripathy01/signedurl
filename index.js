const express = require('express');
const AWS = require('aws-sdk');

const app = express();


const cloudFrontDomain = 'https://d112r41hzy8rnj.cloudfront.net'; 
app.get('/', (req, res) => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: 'beneath0', 
    Key: '20230421_085311_11zon.jpeg', 
    Expires: 300, 
  };

  s3.getSignedUrl('getObject', params, (err, url) => {
    if (err) {
      console.log('Error URL:', err);
      return res.sendStatus(500);
    }

    console.log('Signed URL:', url);
    res.send(`<img src="${url}">`); 
  });
});


// Extra Codes to check if params working or not
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


  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${port}`);
  });