import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService',() => {
  it('should add two numbers',() => {
    let mockLoggerService=jasmine.createSpyObj('LoggerService',['log']);
    const calculator = new CalculatorService(mockLoggerService);
    let result=calculator.add(1,2);
    expect(result).toBe(3);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers',() => {
    let mockLoggerService=jasmine.createSpyObj('LogggerService',['log']);
    const calculator = new CalculatorService(mockLoggerService);
    let result=calculator.subtract(5,2);
    expect(result).toBe(3);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
})