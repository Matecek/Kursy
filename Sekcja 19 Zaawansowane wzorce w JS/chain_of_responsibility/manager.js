// manager.js

import { SupportHandler } from './supportHandler.js';

export class Manager extends SupportHandler {
    constructor() {
        super(3);
    }

    process(request) {
        return `Manager handles the request: ${request.description}`;
    }
}