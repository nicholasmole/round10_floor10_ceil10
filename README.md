Round10 Floor10 Ceil10
=========

Create mozilla's round10 ceil10 floor10

## Usage

`var round10_floor10_ceil10 = require('round10-floor10-ceil10');`
                                                                
floor10 - round down to the tenth-number value         

`round10_floor10_ceil10.floor10({given-value},{tenth-position})`       
                                                                        
```                                                                     
round10_floor10_ceil10.floor10(1.77, -1);                                                                                   
// returns 1.7                                                          
                                                                       
```                                                                     
                                                                       
ceil10 - round up to the tenth-number value         

`round10_floor10_ceil10.ceil10({given-value},{tenth-position})`       
                                                                        
```                              
round10_floor10_ceil10.ceil10(1.77, -1);                                                                                   
// returns 1.8                                                   
                                            
```  

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.