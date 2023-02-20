---
title: 'Homework #4'
date: 'February 2022'
---

## Classifiers and their Decision Boundaries

Consider the following classifiers:

1. classification tree of with a depth of 1 (so-called a "stump", set the parameter of the tree learner "Limit the maximal tree depth to" to 1)

2. classification tree of with depth of 3

3. logistic regression (do not use regularization, set regularization type to None)

4. random forest with ten trees

5. support vector machines with radial basis function (RBF) kernel (widget called SVM in Orange, make sure that kernel is set to RBF)

For each of the classifiers above paint:

- A. a data set where the classifier finds the "right" decision boundary,

- B. a data set where the classifier fails to find the "right" decision boundary, but where the decision boundary exists in the sense that you, human, would be able to find it and draw it on the scatterplot.

Do not paint the same data set for all the classifiers, that is, one data set where they all succeed or they all fail. Design the data sets with a particular learning algorithm in mind. That is, design a non-trivial data set that shows where the classifier succeeds, expressing classifier's strength, and design a data set where we, human, would be able to define the classification boundary but where the learning algorithm fails to find it. 

Paint the data sets with exactly two classes, that is, do not paint the data set with three, or four or more classes.

Show A and B using scatter plots. A minimal workflow that you could use contains the Paint Data, Predictions, and Scatter Plot, plus a learner (say, Classification Tree, receiving the data and passing a classifier to the Predictions). In the scatter plot, you can color the dots by the predicted class and set the shape to represent the true class value. There are examples of such plots in the lecture notes.

Submit the homework as a short report in PDF. The report should include a title of the homework, your name and email.

The report should include the scatter plots of successes/failures (A and B) for each of the classifiers. These would be best organized in a table with five rows (one for each machine learning algorithm) and two columns (one for success, and one for fail). With each scatterplot, please report also on AUC scores you get using your data and 10-fold cross-validation (use Test and Score widget). For now, it is sufficient to know that AUC scores close to 1.0 are excellent, and scores around 0.5 are poor. Please also include an example workflow that you have used to test one of the classifiers. Besides the learner/classifier, the workflow should contain the Paint Data, Predictions, Scatterplot, and Test and Score widgets. Note that it is sufficient to include only one widget for the learner, as this can output both a classifier when presented the input data, and a learner that you can feed into Test and Score widget.

It may happen that for some of the classifiers you won't be able to paint a data set matching A and B. If this is the case, please provide your intuition why.

The report should not exceed one page. The limit on page length and the limits in the number of paragraphs and sentences are strict. Use 11 pt Calibre or Arial or similar sans-serif font, and 1.2 spacing between lines. Use 6 pt separation between paragraphs.

Submit your report as a PDF document. Name this document as lastname-firstname-4.pdf (like smith-mary-4.pdf; notice there are no spaces in the name, all letters are lowercase, and the dash is used to separate the first and last name) where last name is your last name and first name your first name.
Submit your homework as a PDF document attachment in the email to bzupan@gmail.com with subject “DM-HW4” (copy the subject title and then paste it into the email title field; notice there are no spaces in the subject title). The deadline is 11 am this coming Wednesday, February 22.