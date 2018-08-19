# simpleexpressservice
This is the basis of a self driven learning exercise.

The plan is for a simple request to hit an *API Gateway* and be serviced by a *lambda*. The lambda will make a call to a load balancer which will be served by an EC2 instance running **simpleexpresservice**. The response itself is a bit irrelevant.
Step 2 is to encrypt data in transit through the entire system.