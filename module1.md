<!-- TODO: Upload existing -->
Python is a case-sensitive programming language

## Data Types

### Introduction
Datatypes are some keywords of programming languages that are used to specify how much memory will be allocated to the variables during execution
- Also decides the type of data to be stored in the memory location of the variables
- Without defining datatypes to variables, either explicitly or internally, memory will not be allocated to the variables

### Static vs Dynamic Languages
Types of Languages using Datatypes:
- Static Typed Programming Languages
  - Datatypes of variables are fixed
  - Programmer should declare the datatypes to the variables explicitly at the time of writing the program
  - In C, C++, Java, dotnet, etc, we need to declare the datatype of the variables
- Dynamically Typed Programming Languages
  - The Datatypes of the variables are declared internally based on given data
  - If new variable doesn't match the old datatype, it is redeclared so it will not cause errors
  - In python, we mustn't declare the datatype explicitly
    ```python
    abc = 1000
    print(f"{abc} and type is {type(abc)}")
    abc = "souhrud"
    print(f"{abc} and type is {type(abc)}")
    ```
    - Output:
      ```
      1000 and type is <class 'int'>
      souhrud and type is <class 'str'>
      ```

### Standard Library Datatypes
Python internally uses the following Standard Datatypes
- int
- float
- NoneType
- complex
- bool
- str
- range
- list
- tuple
- frozenset
- dict
- bytes
- bytearray
- memoryview

### Types Demo
In python, datatypes of variables are declared internally at the time of execution of the program based on data assigned to variables
- Example:
  ```python
  i = 1000
  print(i)
  print(type(i))
  j = 123.123
  print(J)
  print(type(j))
  k=True
  print(k)
  print(type(k))
  p="souhrud"
  print(p)
  print(type(p))
  ```
- Output:
  ```
  1000
  <class 'int'>
  123.123
  <class 'float'>
  True
  <class 'bool'>
  souhrud
  <class 'str'>
  ```
