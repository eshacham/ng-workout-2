import { WorkoutDay } from './WorkoutDay';
import { JsonProperty } from 'json-typescript-mapper';

export class Workout {
    @JsonProperty('id')
    id: number;
    
    @JsonProperty('name')
    name: string;

    @JsonProperty({clazz: WorkoutDay, name: 'days'})
    days: WorkoutDay[];

    constructor() {
        this.id = void 0;
        this.name = void 0;
        this.days = void 0;
    }
}
