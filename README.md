# Document

##Project Structure
          
  ```
  public
      public/assets  
      - contains all assets include css img font files.
      index.html
      - cover static header(Navigation) and root node.
      

  src 
    index.js
    react main entry file, cover function as below 
        - Table Filter
          - Search Filter(dropdown component)
          - Search Keywords(input field)
        - Table
          - Table Header
      - Table Body
        use "tableRow" component at here
    
    tableRow.js    
    cover function for add and display each table row
       - Table Row
        - Collapsable Row(State -> Distract -> Township)
            
    data.js
    test data, generate random date for project to test.
  ```
## Run and Test

### How to  run this project
Please use "npm install" to download all the modules and then use "npm start" can run it in your local

### Test Function

data.js can generate random data for sort test. Insert two random charactor at the front of each region name and random number for other column.  

* Display function :  
    The table will show as this structure.
    - State Level(Show by default)  
        - District Level(Hide by default, show by clicking the button in state level)
          - Township Level(Hide by default, show by clicking the button in district level)  
  
   One of this node hidden will also cause it children nodes hidden.
   
* Filter function :  
    Select a type of filter, The table will sort all visible row by this column. But the sort will not destroy the nest structure, children row such as disctricts and townships will still 
    show  under their parent with this same level table row sorted.  
    For filter type "Region", the table will sort from A to Z  
    For all other filters, the table will sort as large number -> lower number
    
* Search function :  
    When search field has a value, the table will only show table row which cover this value.
    
* Notice : some css style not support by IE8-    
    
    
    
## Develop environment

React
    


