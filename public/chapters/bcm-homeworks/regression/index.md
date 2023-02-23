---
title: 'Homework 6'
date: 'February 2022'
---

## Linear Regression

Download the [data about body fat measurements](http://file.biolab.si/files/fat.xlsx). You can find the description of this data set at on the [web](http://ww2.amstat.org/publications/jse/datasets/fat.txt). We use “Percent body fat using Brozek’s equation” as the target, and we have removed its near-duplicate “Percent body fat using Siri’s equation.” From the original features, we have also removed the feature “Density”, which cannot be routinely measured by GPs.

1. Build a unregularized (use "No regularization" option) linear regression model to predict the body fat from the given measurements. Do not normalize the data at this stage. Report on its ten-fold cross-validated accuracy and compare it with the baseline model. Report only R2 for both models.

2. Use a Scatter Plot to show the relation between the actual and cross-validated predicted values.

3. Which variables have the highest coefficients (parameters) in the linear regression model? Consider their absolute values, ignoring the direction of influence. Develop the model from raw, that is, not normalized data. Again, do not regularize the model.

4. Instead of feeding the raw data to the linear regression model, develop the model on normalized data. To normalize the data, feed it to the Preprocess widget, and use the preprocessing by “Normalize Features”. Use default normalization, which subtracts the mean from all columns and divide them by their standard deviations. Then train the linear model on the normalized data. Does normalization affect the coefficients of the linear model? Does normalization affect the predictive performance of the model (use ten-fold cross-validation)? Explain! Again, do not regularize the models.

5. Both sets of feature weights - those for items (3) and (4) - are useful for some task. For what purpose would you use the the feature weights inferred from raw data set (question 3). Why are weights from the normalized data useful?

6. Use Lasso regularization with a suitable strength to identify a subset of three to five most important independent variables. How well does this model perform compared to the unregularized model that uses all features? Explain the workflow that you used in sufficient detail, including the relevant settings in the widgets and the way the widgets are connected.

7. Experiment with different types of regularizations and different regularization levels. Which settings give you the best ten-fold cross-validated performance in terms of R2. Show a scatter plot that relates the dependent variable’s value (that is, the class) and ten-fold cross-validated predictions (that is, those on the output of the Test and Score widget) of your most accurate model. Let scatter plot show the prediction error for each data point; use the point's size and color to display the error.

Submit the homework as a short report in PDF where you answer the above questions. Organize your report so that you number the answers according to question numbering above. Use 11 pt Calibre or Arial or similar sans-serif font, and 1.2 spacing between lines. Use 6 pt separation between paragraphs. Limit the number of pages in the report to two. Name your PDF document as lastname-firstname-6.pdf (like smith-mary-6.pdf; notice there are no spaces in the name, all letters are lowercase, and the dash is used to separate the first and last name) where the last name is your last name, and the firstname is your first name. Email the report to bzupan@gmail.com with subject DM-HW6 (copy the subject title and then paste it into the email title field; notice there are no spaces in the subject title). The deadline for this homework is 11:00 am on Tuesday, February 28.