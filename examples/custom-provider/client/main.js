import Test from '@Test/core'
import GoogleDrive from '@Test/google-drive'
import Tus from '@Test/tus'
import Dashboard from '@Test/dashboard'
import MyCustomProvider from './MyCustomProvider.jsx'

import '@Test/core/dist/style.css'
import '@Test/dashboard/dist/style.css'

const Test = new Test({
  debug: true,
})

Test.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})

Test.use(MyCustomProvider, {
  companionUrl: 'http://localhost:3020',
})

Test.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'MyCustomProvider'],
})

Test.use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
