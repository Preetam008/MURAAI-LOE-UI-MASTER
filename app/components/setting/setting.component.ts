/*!
 * @license
 * Copyright 2017 Muraai Information Technologies, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';
import { AlfrescoSettingsService, StorageService, LogService } from 'ng2-alfresco-core';

@Component({
    selector: 'alfresco-setting-demo',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})
export class SettingComponent {

    bpmHost: string;

    constructor(private settingsService: AlfrescoSettingsService,
                private storage: StorageService,
                private logService: LogService) {
        this.bpmHost = storage.getItem('bpmHost') || this.settingsService.bpmHost;
    }

    public onChangeBPMHost(event: KeyboardEvent): void {
        let value = (<HTMLInputElement>event.target).value.trim();
        if (value) {
            this.logService.info(`BPM host: ${value}`);
            this.bpmHost = value;
            this.storage.setItem(`bpmHost`, value);
        } else {
            console.error('Bpm address does not match the pattern');
        }
    }
}
