**Point-of-Sale**

This is your standard point of sale system found in any retail store or restaurant. Authenticated users, upon signing in, can create customer orders by adding, editing, and deleting products in relation to the order. Users can also customize items, input tip amounts, and maintain a running registry of previously submitted orders.

A password-protected management tools panel gives an authenticated user the ability to apply discounts and change past submitted order data. (Note that the data manipulation portion is still in development at the time of this writing.)

Pre-comped sales (i.e., pre-manager discount), comped amounts, true daily sales, tips, and percentage of comped sales are all tracked and stored. Additionally, an itemized version of each order is saved, which includes the items, customizations, total(s), and tip.


**How It's Made:**

Frontend - React.js, CSS

Backend - Node.js, Express

Database - MongoDB

The skeleton functionality of the application is pretty standard, involving some POST and GET requests to authenticate users and fetch products from the database, etc. However, challenges arose when it came time to implement the order pad component and its products.

I needed a way to separate the concerns of each individual product item for customization purposes. To accomplish this, each time an item is selected/pulled from the database, it is pushed into an array, a "final order array" if you will.

In this array, since items are always pushed in at the end, I was able to reliably ascertain each one's index in the results of a .map() method called on the final order array. On a click, this index is passed to a function that records it to a useState value. This way, each time a product is selected, its index can be recorded in the state and used accordingly to edit the correct item.

There were other challenges that I faced, but this was definitely one worth mentioning.

**Lessons Learned:**

This section is still somewhat in progress, but as of now, looking back, I wish I had taken a bit more time to conceptually think about the flow of data and how I want it to be structured.

At one point, I found myself having to refactor my order pad component due to the flow of data causing a bottleneck, which was restricting the separation of concerns I spoke of in my "How it's made" section.

However, this refactor turned out to be beneficial in the end. The code was improved, and I learned a valuable lesson for future use.
