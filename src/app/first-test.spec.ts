describe('First test',()=>{
    // initialize all yje 
    let testVariable:any;
    beforeEach(()=>{
        testVariable ={};
    });
    it('should return true if a is true',()=>{
        //first we have to arrange the data
        testVariable.a=false;
        //take some action. And we assume that those action will change the value of a to be true
        testVariable.a=true;
        //assert
        expect(testVariable.a).toBe(true);
    })
}
)
// First test should return if a is true
