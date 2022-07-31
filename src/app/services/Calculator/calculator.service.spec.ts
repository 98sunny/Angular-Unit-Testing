import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService',() => {
  let mockLoggerService:any;
  let calculator:CalculatorService;
  beforeEach(() => {
    console.log('In Before each');
    mockLoggerService = jasmine.createSpyObj('LoggerService',['log']);
    calculator = new CalculatorService(mockLoggerService);
  })
  it('should add two numbers',() => {
    console.log("In the add test case");
    let result=calculator.add(1,2);
    expect(result).toBe(3);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers',() => {
    console.log("In the subtract test case");
    let result=calculator.subtract(5,2);
    expect(result).toBe(3);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
})