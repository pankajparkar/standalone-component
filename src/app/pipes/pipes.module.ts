import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DayPipe } from "./day.pipe";
import { JoinPipe } from "./join.pipe";
import { MinutePipe } from "./minute.pipe";
import { SafePipe } from "./safe.pipe";

export const pipes = [
    DayPipe,
    JoinPipe,
    MinutePipe,
    SafePipe,
];

@NgModule({
    declarations: [
    ],
    exports: [
        ...pipes,
    ],
    imports: [
        CommonModule,
        ...pipes,
    ]
})
export class PipesModule {

}
