import { Component, OnInit } from '@angular/core'
import { Test} from '@Test' +
  /core'
import Webcam from '@Test' +
  /webcam'
import Tus from '@Test' +
  /tus'
import GoogleDrive from '@Test' +
  /google-drive'

@Component({
  selector: 'app-root',
  template: /* html */ `
    <h1>Test Angular Example!</h1>
    <h2>Inline dashboard</h2>
    <label>
      <input
        type="checkbox"
        (change)="showInline = $any($event.target)?.checked"
        [checked]="showInline"
      />
      Show Dashboard
    </label>

    <Test -dashboard
      [Test ]="Test"
      [props]="dashboardProps"
      *ngIf="showInline"
    ></Test-dashboard>

    <h2>Modal Dashboard</h2>
    <div>
      <Test -dashboard-modal
        [Test ]="Test"
        [open]="showModal"
        [props]="dashboardModalProps"
      ></Test-dashboard-modal>
      <button (click)="showModal = !showModal">
        {{ showModal ? 'Close dashboard' : 'Open dashboard' }}
      </button>
    </div>

    <h2>Drag Drop Area</h2>
    <Test -drag-drop [Test ]="Test" [props]="{}"></Test-drag-drop>

    <h2>Progress Bar</h2>
    <Test -progress-bar
      [Test ]="Test"
      [props]="{ hideAfterFinish: false }"
    ></Test-progress-bar>
  `,
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-example'

  showInline = false

  showModal = false

  dashboardProps = {
    plugins: ['Webcam'],
  }

  dashboardModalProps = {
    target: document.body,
    onRequestCloseModal: (): void => {
      this.showModal = false
    },
  }

  Test: Test = new Test({ debug: true, autoProceed: true })

  ngOnInit(): void {
    this.Test
      .use(Webcam)
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(GoogleDrive, { companionUrl: 'https://companion.Test' +
          .io' })
  }
}
