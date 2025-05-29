# Temporary Field
### Signs and Symptoms
Temporary fields get their values (and thus are needed by objects) only under certain circumstances. Outside of these circumstances, they’re empty.
![](https://refactoring.guru/images/refactoring/content/smells/temporary-field-01.png)

### Reasons for the Problem
Oftentimes, temporary fields are created for use in an algorithm that requires a large amount of inputs. So instead of creating a large number of parameters in the method, the programmer decides to create fields for this data in the class. These fields are used only in the algorithm and go unused the rest of the time.

This kind of code is tough to understand. You expect to see data in object fields but for some reason they’re almost always empty.
![](https://refactoring.guru/images/refactoring/content/smells/temporary-field-02.png)

### Treatment
- Temporary fields and all code operating on them can be put in a separate class via Extract Class. In other words, you’re creating a method object, achieving the same result as if you would perform Replace Method with Method Object.
- Introduce Null Object and integrate it in place of the conditional code which was used to check the temporary field values for existence.
![](https://refactoring.guru/images/refactoring/content/smells/temporary-field-03.png)

### Payoff
Better code clarity and organization. 