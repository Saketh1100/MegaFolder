import { of } from 'rxjs';
import {HeroesComponent} from './heroes.component'
describe('HeroesComponent',()=>
{
  let component:HeroesComponent;
  let Heroes;
  let mockHeroservice;

  beforeEach(()=>{

    Heroes=[
      {id:1,name:'SpiderDude',strength:8},
      {id:2,name:'Wonderful Woman',strength:24},
      {id:3,name:'SuperDude',strength:55}
    ]
    mockHeroservice=jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])
    component=new HeroesComponent(mockHeroservice);
  })
  describe('delete',()=>{

    it('should remove the indicated hero from heroes list',()=>
    {
      mockHeroservice.deleteHero.and.returnValue(of(true))
      component.heroes=Heroes;

      component.delete(Heroes[2]);

      expect(component.heroes.length).toBe(2);
    })

    it('should call delete hero',()=>
    {
      mockHeroservice.deleteHero.and.returnValue(of(true))
      component.heroes=Heroes;

      component.delete(Heroes[2]);

      expect(mockHeroservice.deleteHero).toHaveBeenCalledWith(Heroes[2]);
    
    })

  })
  
})