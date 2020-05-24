from tkinter import * 
from tkinter.ttk import *

from time import strftime 
  


# creating tkinter window 
root = Tk() 
root.title('A simple clock with Python Tkinter') 
  
  
  # CREATE AND CONFING THE CONTENT
# ==========================================


# This function is used to  
# display time on the label 
def time(): 
    string = strftime('%H:%M:%S %p') 
    lbl.config(text = string) 
    lbl.after(1000, time) 
  
# Styling the label widget so that clock 
# will look more attractive 
lbl = Label(root, font = ('calibri', 40, 'bold'), 
            background = 'purple', 
            foreground = 'white') 
  
# Placing clock at the centre 
# of the tkinter window 
lbl.pack(anchor = 'center') 
time() 


# screen_width = root.winfo_screenwidth()
# screen_height = root.winfo_screenheight()

# win_pos_x = int((screen_width / 2) - 250)
# win_pos_y = int((screen_height / 2) - 150 - 55)

root.geometry("500x300")
  
  
  
  
  
root.mainloop()