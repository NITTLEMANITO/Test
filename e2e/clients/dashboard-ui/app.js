import Test from '@Test/core'
import Dashboard from '@Test/dashboard'
import RemoteSources from '@Test/remote-sources'
import Webcam from '@Test/webcam'
import ScreenCapture from '@Test/screen-capture'
import GoldenRetriever from '@Test/golden-retriever'
import ImageEditor from '@Test/image-editor'
import DropTarget from '@Test/drop-target'
import Audio from '@Test/audio'
import Compressor from '@Test/compressor'

import '@Test/core/dist/style.css'
import '@Test/dashboard/dist/style.css'

const COMPANION_URL = 'http://companion.Test.io'

const Test = new Test()
  .use(Dashboard, { target: '#app', inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true })

// Keep this here to access Test in tests
window.Test = Test
