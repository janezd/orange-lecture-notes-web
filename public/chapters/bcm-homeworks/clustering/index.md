---
title: 'Homework #2'
date: 'February 2022'
---

## Clustering

Download a data set [GDS4168](http://file.biolab.si/lectures/bcm-dm/GDS4168.tab). The documentation on this data set is available on [GEO repository](http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=GDS4168).

1. Cluster the data using hierarchical clustering. Use either Euclidean distance or [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity) to assess the distance between human subjects. Use Ward linkage to determine the distances between clusters. How well do resulting clusters correspond to patients' phenotypes? Which of the two distance matrices should we use? Evaluate the results qualitatively by displaying the dendrogram. Provide also any quantitative estimate of the correspondence between the clusters and phenotypes. You may use the Box Plot widget to select a cluster for subgrouping and a data-provided class as the observed variable.

2. Use k-means clustering on this data. What is the proposed number of clusters according to the silhouette score? Report on the correspondence of clusters to the patient phenotypes. Again, you can use the Box Plot to quantify this correspondence.

3. Comment on the three approaches (hierarchical clustering with two different distance metrics and k-means clustering): if there are any differences, what are they, and what do you think are the reasons for them?

You may want to additionally explore the differences between these methods using the [t-SNE widget](https://orangedatamining.com/widget-catalog/unsupervised/tsne/). We have not described its functionality yet. It should suffice to know that the widget can map the multi-dimensional data in two dimensions. The data items that are close to each other in the original space will, in t-SNE visualization, be close to each other in the resulting two-dimensional map.

**Submit the homework as a short report in PDF where you answer to above questions**. The report should include the title of the assignment, your name, and your email. It should be one page long (this limit is strict!), use 11 pt Arial or Calibre or similar, with a line spacing of 1.2. The report should start with a short paragraph describing the data set. It should also include a screenshot of the workflow with the content of any widget you have used to answer the above questions. Submit your homework as a PDF to bzupan@gmail.com with the subject "DM-HW2". Name this document as lastname-firstname-2.pdf (like smith-mary-2.pdf; notice there are no spaces in the name) where "lastname" is your last name and "firstname" is your first name. The deadline is 11:00 am on Friday, February 17.