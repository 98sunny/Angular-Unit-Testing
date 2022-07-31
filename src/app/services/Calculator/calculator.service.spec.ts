import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService',() => {
  it('should add two numbers',() => {
    const loggerService=new LoggerService();
    spyOn(loggerService,'log');
    const calculator = new CalculatorService(loggerService);
    let result=calculator.add(1,2);
    expect(result).toBe(3);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers',() => {
    const loggerService=new LoggerService();
    spyOn(loggerService,'log');
    const calculator = new CalculatorService(loggerService);
    let result=calculator.subtract(5,2);
    expect(result).toBe(3);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
})