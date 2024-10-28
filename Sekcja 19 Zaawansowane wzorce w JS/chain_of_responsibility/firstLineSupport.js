// firstLineSupport.js

import { SupportHandler } from './supportHandler.js';

export class FirstLineSupport extends SupportHandler {
    constructor() {
        super(1);
    }

    process(request) {
        return `First line support handles the request: ${request.description}`;
    }
}