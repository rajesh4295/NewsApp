import { NgModule } from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';
// import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
    declarations: [
      TimeAgoPipe,
      // SuperTabsModule
    ],
    imports:[
      // SuperTabsModule

    ],
    exports: [
        TimeAgoPipe,
        //  SuperTabsModule
   ],
   entryComponents: [
]
  })
  export class commonModule {}
  