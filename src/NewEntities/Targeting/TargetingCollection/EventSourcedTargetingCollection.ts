import {TargetingCollection} from "./TargetingCollection";
import {Targeting} from "../Targeting.ts";
import {TargetingSetEvent} from "../../Campaign/SetTargeting/TargetingSet.event";

export class EventSourcedTargetingCollection extends TargetingCollection {

    constructor (entity, targetings) {
        super(entity);
        this.initialize(targetings);
    }

    add(targeting:Targeting) {
        super.add(targeting);
        this.fireEvent(new TargetingSetEvent(targeting));
    }

    private initialize(targetings: Array<Targeting> ) {
        targetings.forEach(targeting => this.addToMap(targeting));
    }

}
