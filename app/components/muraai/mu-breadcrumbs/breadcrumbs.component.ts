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

import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AlfrescoTranslationService} from 'ng2-alfresco-core';

@Component({
  selector: 'apps-dashboard-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadCrumbsComponent {

  @Input()
  crumbs: any;

  @Output()
  onScrumbSelection: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onRefresh: EventEmitter<any> = new EventEmitter<any>();

  constructor(private translateService: AlfrescoTranslationService) {
    if (translateService) {
      translateService.addTranslationFolder('muraai-breadcrumb', '/custom-translation/muraai-breadcrumb');
    }
  }

  moveToCrumb(crumb, last: boolean) {
    if (last) {
      return;
    }
    this.onScrumbSelection.emit(crumb);
  }

  onRefreshClick() {
    this.onRefresh.emit(this.crumbs);
  }
}
