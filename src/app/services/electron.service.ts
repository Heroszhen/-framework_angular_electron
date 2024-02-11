import { Injectable } from '@angular/core';
import { Dialog, ipcRenderer, webFrame } from 'electron';
import * as remote from '@electron/remote';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  //The ipcRenderer module is an EventEmitter. It provides a few methods so you can send synchronous and asynchronous messages from the render process (web page) to the main process. You can also receive replies from the main process.
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;
  dialog: Dialog;//open windows pc for choosing files
  path:typeof path;

  constructor() {
    if (!!(window && window.process && window.process.type)) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('@electron/remote');
      this.dialog = this.remote.dialog;

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');
      this.path = window.require('path');
    }
  }
}
