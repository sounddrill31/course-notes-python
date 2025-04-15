## Features of Python and Info
- Simple, Easy to Learn
  - Implementing critical business requirements through less lines of code
- Initially implemented by Guido Van Rossum in 1989, released in 1991 using Assembly
  - Formed into Python Software Foundation, reimplented in C (CPython)
- OSS, ***Python Software Foundation License Version 2***
- Python is a case-sensitive programming language
- Dynamically typed, will be explored in [Datatypes section](#data-types) section

## PEP8 Validation
Using `pylint`, we can easily validate our code and find errors in it. It is a tool that checks our code for errors and provides suggestions for improvements based on PEP8 standards and more, mainly rating conformity
- PEP8: Python Enhancement Proposal 8
  - Document/Manual that contains suggestions for coding standards and best practices


### Install PyLint
0. Make a Virtual Environment, to comply with PEP 668 and not mess up our system python packages. Remember to enter it afterwards before performing any operations. (Not required on windows, but greatly recommended)
```bash
python3 -m venv myenv # optional, makes a virtual environment in myenv directory
```
Enter the virtual environment
```
source myenv/bin/activate
```
1. Install PyLint
```bash
pip install pylint
```
2. Verify PyLint is installed and works
```bash
  pylint --version
```

### Rate Code based on PEP8 using PyLint
```bash
pylint main.py # replace main.py with your python file name
```

## Example Program
```python
x=100
y=20
print(x)
print(y)
print(x+y)
print(x-y)
print(x*y)
print(x/y)
```

Output:
```
100
20
120
80
2000
5.0
```

### Verify through PyLint
```
pylint main.py
```

Output:
```
************* Module main
main.py:1:0: C0114: Missing module docstring (missing-module-docstring)
main.py:1:0: C0103: Constant name "x" doesn't conform to UPPER_CASE naming style (invalid-name)
main.py:2:0: C0103: Constant name "y" doesn't conform to UPPER_CASE naming style (invalid-name)

------------------------------------------------------------------
Your code has been rated at 6.25/10 (previous run: 8.18/10, -1.93)
```

Fixed Code:
```python
"""Simple Program to demonstrate Arithmetic Operations""" # [!code ++]

x = 100 # [!code --]
X = 10 # [!code ++]
y = 20 # [!code --]
Y = 20 # [!code ++]
print(x) # [!code --]
print(X) # [!code ++]
print(y) # [!code --]
print(Y) # [!code ++]
print(x + y) # [!code --]
print(X + Y) # [!code ++]
print(x - y) # [!code --]
print(X - Y) # [!code ++]
print(x * y) # [!code --]
print(X * Y) # [!code ++]
print(x / y) # [!code --]
print(X / Y) # [!code ++]
```

```
-------------------------------------------------------------------
Your code has been rated at 10.00/10 (previous run: 6.25/10, +3.75)
```

> [!TIP]
> in Diff View, Red Indicates that the code was removed and Green indicates that the code was added.

## Data Representation

Any Business Organization usecase or scenario contains 2 parts:
- Data
- Operations

Eg. Bank
- CUST
  - data
    - cname, cadd, cacno, cbal, etc
  - operations
    - credit(), debit(), balenq(), transfer(), etc
- EMP
  - data
    - ename, eadd, eid, ebasicsal, etc
  - operations
    - da(), hra(), pf(), tsal(), etc

We represent:
- data with:
  - data types
  - data structures
- operations with:
  - methods
  - functions
  - (or both)
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
