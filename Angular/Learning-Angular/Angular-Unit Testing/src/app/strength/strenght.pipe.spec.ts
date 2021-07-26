import {StrengthPipe} from './strength.pipe'


describe('StrengthPipe',()=>{
  it('should display weak if strenght is 5',()=>{
    let pipe=new StrengthPipe();

    let value=pipe.transform(5);
    expect(value).toEqual('5 (weak)');
  })
  it('should display strong if strength is 10',()=>
  {
    let pipe=new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');

  })
  it('should display impossible if strength is 25',()=>
  {
    let pipe=new StrengthPipe();

    expect(pipe.transform(25)).toEqual('25 (unbelievable)');

  })
})