# Sorting Hat

This assignment asked us to build an app to randomly sort input names to Harry Potter Houses.

We were tasked with using a bootstrap jumbotron to have the sorting hat introduce itself and start the sorting process (by clicking on a button). A bootstrap form then appears to fill in the student's name and a button to sort. This then assigns the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). On sorting a student, the form clears and a bootstrap card with the student's name and house prints below the form. You can then expel a student after they have been sorted, which removes their card from the student record.

Optionally I:

Created a helpful form: An error message shows if a user tries to sort a student without filling out the form.
House Image: The image of the student's card changes depending on which house they were sorted.
Card Ordering: Sorted the student cards by student name
Voldermort's Army: Created a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.

##Technical Requirements

Boostrap 4 to style the page components.
Responsive design to your page (aka your app should be designed to work on small screens)
JS file is comprised of functions, no actions should happen in your code outside of a function
HTML and JS have proper indentations



## Screenshots

​![main screenshot](./images/sorting-main.png)
![second screenshot](.images/sorting-page2.png)
![third screenshot](.images/sorting-page3.png)
![fourth screenshot](.images/sorting-page4.png)

## How to run this project:

* Use nmp to install htpp-server:

```sh

npm install -g http-server

```
* Run the server:

```sh

hs -p 9999

```

* Open Chrome and navigate to:

```

localhost:9999

```


​
