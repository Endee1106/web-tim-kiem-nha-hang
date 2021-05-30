from flask import Flask, render_template, redirect, request
from random import randint, random, sample

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
  return render_template("index.html")

@app.route('/food-expect', methods = ["GET", "POST"])
def expect():
  if request.method == "GET": 
    return render_template("expect.html")
  elif request.method == "POST":
    form = request.form
    user_address = form["address"].lower()
    user_title = form["title"]
    return redirect('/food-suggest/' + user_title + '/' + user_address)
     
# @app.route('/food-suggest/<user_title>/<user_address>', methods = ["GET"])
# def suggest(user_title, user_address):
#   item_list = Foody.objects(title = user_title, address_search__contains = user_address)
#   item_list_con = sample(set(item_list), len(item_list))
#   if len(item_list_con) != 0:
#     return render_template("suggest.html", item_list_con=item_list_con)
#   else:
#     return render_template("novalid.html")
                                             

if __name__ == '__main__':
  app.run(debug=True)