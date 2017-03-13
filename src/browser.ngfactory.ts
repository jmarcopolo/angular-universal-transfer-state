/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './browser';
import * as import2 from './transfer-state';
class BrowserTransferStateModuleInjector extends import0.ɵNgModuleInjector<import1.BrowserTransferStateModule> {
  _BrowserTransferStateModule_0:import1.BrowserTransferStateModule;
  __TransferState_1:any;
  __APP_INITIALIZER_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _TransferState_1():any {
    if ((this.__TransferState_1 == null)) { (this.__TransferState_1 = import1.getTransferState()); }
    return this.__TransferState_1;
  }
  get _APP_INITIALIZER_2():any[] {
    if ((this.__APP_INITIALIZER_2 == null)) { (this.__APP_INITIALIZER_2 = [import1.getTransferInitializer(this._TransferState_1)]); }
    return this.__APP_INITIALIZER_2;
  }
  createInternal():import1.BrowserTransferStateModule {
    this._BrowserTransferStateModule_0 = new import1.BrowserTransferStateModule();
    return this._BrowserTransferStateModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.BrowserTransferStateModule)) { return this._BrowserTransferStateModule_0; }
    if ((token === import2.TransferState)) { return this._TransferState_1; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const BrowserTransferStateModuleNgFactory:import0.NgModuleFactory<import1.BrowserTransferStateModule> = new import0.NgModuleFactory<any>(BrowserTransferStateModuleInjector,import1.BrowserTransferStateModule);