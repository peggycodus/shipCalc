Make a web page that calculates the cost of shipping a package. You can make up the rules about calculating costs; use the Fedex shipping calculator for inspiration about what kind of information to gather. Again, use objects to embody your logic.

INPUTS
  send address
  receive address
  one or more packages
    class
    size (height, width,length)
    weight

OUPUTS
  price
  warning max weight
  warning maxsize

ship from address
  sender name
  address1
  address2
  city
  state
  zipcode
  country
shipto address
  sender name
  address1
  address2
  city
  state
  zipcode
  country
weight
   lbs
   kg
dimensions
  height
  length
  width

RATE RULES
Rates same country    express   ground
  0-2 lbs               $1/lbs    $.50/lb
  2-10 lbs               $.75/lbs    $.30/lb
  over 10 lbs           $3/lbs     $1/lbs
  max    weight             100lbs    200lbs
  max size

Rates International  express   ground
  0-2 lbs
  2-10 lbs
  over 10 lbs
  max  weight               100 lbs   200 lbs
  max size
