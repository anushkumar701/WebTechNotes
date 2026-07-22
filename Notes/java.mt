Note:
    Whenever we execute the java program jvm will create 3 threads that is
        main thread
        Grabage collector thread
        Thread Scheduler
    The execution of main thread starts from main method,ends with main method.
    User defined thread satrt and



How to create user defined thread?
    In java we can create user defined thread by using two ways 
        By using thread class
        By using runnable Interface

Thread Class:
    It is a built in class present in java.lang.package
    the declaration of thread in lang package is 
        public class thread extends Object implements runnable

Steps to create user defined thread using thread class. 
1:Create a class that extends thread
2:Override the run() method (write our task)
3:Create Object of your class
4:Call start() method of the Object

            Thread life Cycle
                
                New
                 |
                 v
               runnable
                 |
                 v
               running<----------   ----> When run method executing
If call method   |               |
sleep/join/yield v               |
                wait-------------
                 |   ----------------->run() connectors
                 v
                Dead   