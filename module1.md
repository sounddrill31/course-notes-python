
> [!TIP]
> This Page supports running Python directly from your browser!

::: details  Click for more details. If this feature is not working as expected, [please report it to us on Github!](https://github.com/sounddrill31/course-notes-python/issues/new)

> [!WARNING]
> This will not work if your browser is too old or does not support Web Assembly/Web Workers. If you're using a privacy focused browser like cromite, please enable JavaScript JIT and WebAssembly from the permissions menu.
:::

## Features of Python and Info
- Simple, Easy to Learn
  - Implementing critical business requirements through less lines of code
- Initially implemented by Guido Van Rossum in 1989, released in 1991 using Assembly
  - Formed into Python Software Foundation, reimplented in C (CPython)
- [OSS, ***Python Software Foundation License Version 2***](https://docs.python.org/3/license.html)
  - > Python software and documentation are licensed under the Python Software Foundation License Version 2.
    > Starting with Python 3.8.6, examples, recipes, and other code in the documentation are dual licensed under the PSF License Version 2 and the Zero-Clause BSD license.
- Python is a case-sensitive programming language
- Dynamically typed, will be explored in [Datatypes](#data-types) section

## PEP8 Validation
Using `pylint`, we can easily validate our code and find errors in it. It is a tool that checks our code for errors and provides suggestions for improvements based on PEP8 standards and more, mainly rating conformity
- [PEP8: Python Enhancement Proposal 8](https://peps.python.org/pep-0008/)
  - Document/Manual that contains suggestions for coding standards and best practices


### Install PyLint
0. Make a Virtual Environment, to comply with [PEP 668](https://peps.python.org/pep-0668/) and not mess up our system python packages. Remember to enter it afterwards before performing any operations. (Not required on windows, but greatly recommended)
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
::: details Try it out
```python:line-numbers
x=100
y=20
print(x)
print(y)
print(x+y)
print(x-y)
print(x*y)
print(x/y)
```
<Editor id="head-example-prg1-addsub" />
:::


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
```bash
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
X = 100 # [!code ++]
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
::: details Try it out
```python:line-numbers
abc = 1000
print(abc)
print(type(abc))
abc = "souhrud"
print(abc)
print(type(abc))
```
<Editor id="Types-eg1-string-int-diff" />
:::
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

::: details Try it out
```python:line-numbers
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
<Editor id="type-example2-moretypes" />
:::

### Types of Datatypes
Programming languages support 2 types of datatypes:
1. Primitive types
2. Reference types

- Primitive Datatypes
  - contains fixed size
  - Languages that support these are not regarded as complete object-oriented-programming languages, like Java and dotnet.
- Reference Datatypes
  - doesn't contain fixed size
  - Python is a programming language that only supports reference type datatypes.
    - Every datatype is implemented through `class` syntax in Python
    - `class` syntax follows dynamic memory allocation so that there is no fixed size for datatypes in Python
    - Memory space allocated for `class` syntax is technically known as an object
      - Memory allocation for class is called object creation.
      - Memory deallocation is called object deletion.
      - Any number of objects can be created for a class

      <!-- Diagram with a box `class int:` and x=1000 where is a circle with 1000 inside and pointing to the x=1000 using a line TODO: Write in mermaid -->

### Boxing and Unboxing
Java and dotnet allows you to convert every Primitive to Reference Datatypes(called boxing, using wrapper classes). The process of converting Reference Datatypes to Primitive type is called unboxing.

  <!--id  function to know address and getsizeof thru sys -->
We use the `id()` function to know the address of an object and `getsizeof()`(from the `sys` module) to know the size of an object.
- Because we're using `sys` module,we have to import it before we use it. Syntax: `import sys`

<!-- Builtin functions: Link official docs-->
### Example
```python
import sys
x=1000
print(x)
print(type(x))
print(sys.getsizeof(x))
y=12345678901234567890
print(y)
print(type(y))
print(id(y))
print(sys.getsizeof(y))
```


Output:
```
1000
<class 'int'>
28
12345678901234567890
<class 'int'>
140442143993136
36
```
::: details Try it out
```python:line-numbers
import sys
x=1000
print(x)
print(type(x))
print(sys.getsizeof(x))
y=12345678901234567890
print(y)
print(type(y))
print(id(y))
print(sys.getsizeof(y))
```
<Editor id="example-id-typeof-eg3" />
:::

>[!TIP]
>The IDs change every time you run it since they are the memory addresses holding the value of x and y

Overwriting a variable automatically dereferences old objects, and the garbage collector drops it when reference count becomes 0
<!-- x=1000 # now unused, will be dereferenced and dropped by garbage collector when  Reference count becomes 0
x=2000-->
example:
```python
import sys
x=1000
print(x)
print(type(x))
print(id(x))
print(sys.getsizeof(x))
x=12345678901234567890
print(x)
print(type(x))
print(id(x))
print(sys.getsizeof(x))
x=123.456
print(x)
print(type(x))
print(id(x))
print(sys.getsizeof(x))
```
Output:
```
1000
<class 'int'>
140442144833040
28
12345678901234567890
<class 'int'>
140442143994720
36
123.456
<class 'float'>
140442144832880
24
```

::: details Try it out
```python:line-numbers
import sys
x=1000
print(x)
print(type(x))
print(id(x))
print(sys.getsizeof(x))
x=12345678901234567890
print(x)
print(type(x))
print(id(x))
print(sys.getsizeof(x))
x=123.456
print(x)
print(type(x))
print(id(x))
print(sys.getsizeof(x))
```
<Editor id="examle-prg4-getsizeof" />
:::

Python Datatypes are categorized into different categories.
1. Numerical Types
  - Used to represent the non-decimal point numerical values, decimal point numerical values and complex values
  - Python supports 3 Numerical Types:
    1. `int`
    2. `float`
    3. `complex`
  - Example:
    ```python
    import sys
    x=1000
    print(x)
    print(type(x))
    print(id(x))
    print(sys.getsizeof(x))
    y=123.456
    print(y)
    print(type(y))
    print(id(y))
    print(sys.getsizeof(y))
    z=3+4j
    print(z)
    print(type(z))
    print(id(z))
    print(sys.getsizeof(z))
    ```
  - Output:
    ```
    1000
    <class 'int'>
    140442144832816
    28
    123.456
    <class 'float'>
    140442201642096
    24
    (3+4j)
    <class 'complex'>
    140442144832752
    32
    ```
    ::: details Try it out
    ```python:line-numbers
    import sys
    x=1000
    print(x)
    print(type(x))
    print(id(x))
    print(sys.getsizeof(x))
    y=123.456
    print(y)
    print(type(y))
    print(id(y))
    print(sys.getsizeof(y))
    z=3+4j
    print(z)
    print(type(z))
    print(id(z))
    print(sys.getsizeof(z))
    ```
    <Editor id="example-prg5-numeric-demos" />
    ::: TODO
2. Boolean types
  - Boolean category Datatypes represent a Boolean value, `True` or `False`
  - Python supports only one Boolean category datatype, `bool`
  - Example:
    ```python
    import sys
    x=True
    print(x)
    print(type(x))
    print(id(x))
    print(sys.getsizeof(x))
    ```
  - Output
    ```
    True
    <class 'bool'>
    140442258316512
    28
    ```
    ::: details Try it out
    ```python:line-numbers
    import sys
    x=True
    print(x)
    print(type(x))
    print(id(x))
    print(sys.getsizeof(x))
    ```
    <Editor id="example-prg6-booleandemos" />
    ::: TODO
2. NoneType
<!-- TODO: Add Class 8 contents -->
