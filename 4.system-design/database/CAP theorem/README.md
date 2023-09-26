# CAP theorem
In a distributed computer system, you can only support two of the following guarantees:
1. Consistency - Every read receives the most recent write or an error
2. Availability - Every request receives a response, without guarantee that it contains the most recent version of the information
3. Partition Tolerance - The system continues to operate despite arbitrary partitioning due to network failures
