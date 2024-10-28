// technicalSpecialist.js

import { SupportHandler } from './supportHandler.js';

export class TechnicalSpecialist extends SupportHandler {
    constructor() {
        super(2);
    }

    process(request) {
        return `Technical specialist handles the request: ${request.description}`;
    }
}