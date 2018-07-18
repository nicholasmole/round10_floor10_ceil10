Round Floor Ceil
=========

Create mozilla's round10 ceil10 floor10

## Usage

`var round_floor_ceil = require('round-floor-ceil');`
                                                                
floor10 - round down to the tenth-number value         

`round_floor_ceil.floor10({given-value},{tenth-position})`       
                                                                        
```                                                                     
round_floor_ceil.floor10(1.77, -1);                                                                                   
// returns 1.7                                                          
                                                                       
```                                                                     
                                                                       
ceil10 - round up to the tenth-number value         

`round_floor_ceil.ceil10({given-value},{tenth-position})`       
                                                                        
```                              
round_floor_ceil.ceil10(1.77, -1);                                                                                   
// returns 1.8                                                   
                                            
```  

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.