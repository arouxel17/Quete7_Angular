import { Skill } from './skill';

export class Dev {
    constructor(
        public lastname: string,
        public firstname: string,
        public age: number,
        public gender: string,
        public bio: string,
        public skills: Skill[],
    ) {}
}