import S3 from 'react-aws-s3';


const config = {
    bucketName: 'myBucket',
    dirName: 'media', /* optional */
    region: 'eu-west-1',
    accessKeyId: 'JAJHAFJFHJDFJSDHFSDHFJKDSF',
    secretAccessKey: 'jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf',
    s3Url: 'https:/your-custom-s3-url.com/', /* optional */
}

const ReactS3Client = new S3(config);

const filename = 'hello-world.docx';

/* If the file that you want to delete it's in your bucket's root folder, don't provide any dirName in the config object */

//In this case the file that we want to delete is in the folder 'photos' that we referred in the config object as the dirName

ReactS3Client
    .deleteFile(filename)
    .then(response => console.log(response))
    .catch(err => console.error(err))

  /**
   * {
   *   Response: {
   *      ok: true,
          status: 204,
          message: 'File deleted',
          fileName: 'hello-world.docx'
   *   }
   * }
   */
});
