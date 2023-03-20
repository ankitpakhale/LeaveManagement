import os
import touch

# 1. to create the jsx files and to delete the html files
for i in os.listdir():
    name = i.split(".")[0]
    if i.split(".")[-1:][0] == 'html':
        # touch.touch(f'{name.capitalize()}.jsx')
        fp = open(f'{name.capitalize()}.jsx', 'x')
        fp.close()        
        os.remove(i)

# 2. to create the component after opening the file
for i in os.listdir():
    if i.split(".")[-1:][0] == 'jsx':
        name = i.split(".")[0]
        print(name)
        with open(i, 'w') as file:
            returnStatement = "{\n"+f"\treturn ( <div>{name}</div>)"+"\n}"
            file.write(
                f"import React from 'react'; \nconst {name} = () => \n{returnStatement} \nexport default {name}")
