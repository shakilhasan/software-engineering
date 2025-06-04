# Change Preventers
These smells mean that if you need to change something in one place in your code, you have to make many changes in other places too. Program development becomes much more complicated and expensive as a result.

#### Divergent Change
You find yourself having to change many unrelated methods when you make changes to a class. For example, when adding a new product type you have to change the methods for finding, displaying, and ordering products.

#### Shotgun Surgery
Making any modifications requires that you make many small changes to many different classes.

#### Parallel Inheritance Hierarchies
Whenever you create a subclass for a class, you find yourself needing to create a subclass for another class.