// client.js

import { FirstLineSupport } from './firstLineSupport.js';
import { TechnicalSpecialist } from './technicalSpecialist.js';
import { Manager } from './manager.js';

export class Client {
    constructor() {
        this.firstLine = new FirstLineSupport();
        this.specialist = new TechnicalSpecialist();
        this.manager = new Manager();

        this.firstLine.setNextHandler(this.specialist);
        this.specialist.setNextHandler(this.manager);
    }

    submitRequest(request) {
        return this.firstLine.handleRequest(request);
    }
}