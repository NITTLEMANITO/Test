import AwsS3 from '@Test/aws-s3'
import Test from '@Test/core'
import Dashboard from '@Test/dashboard'
import GoogleDrive from '@Test/google-drive'
import Webcam from '@Test/webcam'

import '@Test/core/dist/style.css'
import '@Test/dashboard/dist/style.css'
import '@Test/webcam/dist/style.css'

const Test = new Test({
  debug: true,
  autoProceed: false,
})

Test.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})
Test.use(Webcam)
Test.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'Webcam'],
})
Test.use(AwsS3, {
  companionUrl: 'http://localhost:3020',
})
