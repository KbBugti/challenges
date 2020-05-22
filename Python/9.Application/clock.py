# IMPORTS
# ==========================================
import tkinter
import time

# Window
# ==========================================
# This is an window
win = tkinter.Tk()

win.title("A simple clock with Python Tkinter")

# screen_width = win.winfo_screenwidth()
# screen_height = win.winfo_screenheight()

# win_pos_x = int((screen_width / 2) - 250)
# win_pos_y = int((screen_height / 2) - 150 - 55)


# win.geometry(f"500x300+{win_pos_x}+{win_pos_y}")

win.geometry('200x150')


# CREATE AND CONFING THE CONTENT
# ==========================================
title = tkinter.Label()
clock = tkinter.Label()

title["text"] = "Your current time is:"
title["font"] = ("Open Sans", 14)

clock["text"] = ("ERROR")
clock["font"] = ("Open Sans", 32)
clock["bg"] = "#fff"


# PUT THE LABELES ON THE GRID
win.rowconfigure(0, weight = 0)
win.rowconfigure(1, weight = 1)
win.columnconfigure(0, weight = 1)

title.grid(row=0, column=0)
clock.grid(row=1, column=0)

# clock.pack()
# title.pack()



# Clock logic function
# ==========================================
def update_time():
  clock["text"] = time.strftime("%H:%M:%S")
  win.after(1000, update_time)
  update_time()




# THIS WILL LOOP EVERYTHING INSIDE THE WINDOW
# Should be the last line!
win.mainloop()

