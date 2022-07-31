import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';


describe('LoggerService', () => {
    let service: LoggerService;
    beforeEach(() => {
        service=new LoggerService();
    })
    it('should not have any message in the starting', () => {
        // act
        let count=service.messages.length;
        // assert
        expect(count).toBe(0);
    })
    it('should add the message when the log is called', () => {
        // act
        service.log('message');
        // assert
        expect(service.messages.length).toBe(1);
    })
    it('should clear the message when the clear() method is called', () => {
        service.log('messaage');
        service.clear();
        expect(service.messages.length).toBe(0);
    })
});
