import { Test } from '@Test/core'
import Dashboard from '@Test/dashboard'
import AwsS3 from '@Test/aws-s3'

import '@Test/core/dist/style.css'
import '@Test/dashboard/dist/style.css'

const Test = new Test()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

