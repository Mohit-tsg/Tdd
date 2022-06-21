import {findNeedle} from "./findneedel";

describe("if needle exits, return index in haystack",()=>{

    it("if array is empty ,return -1",() =>{
        expect(findNeedle([],10)).toBe(-1);
    });

    it("if element is not present in array ,return -1",()=>{
        expect(findNeedle([],10)).toBe(-1);
    });

    it("if element is present and needle exits,return -1",()=>{
        expect(findNeedle([1,2,3,4],10)).toBe(-1);
    });

    
});



