AllSign

(https://www.youtube.com/watch?v=t62gr9xlI5g)

  American Sign Language is a crucial component in facilitating communication in the deaf and mute communities. The alternative - written communication - is impersonal, inefficient and can prove to be a liability if an emergency situation occurs. However for the 10 million hearing impaired and 1 million deaf people in the United States(1) there are only between 250 and 500 thousand ASL users(2). Worse yet are things in other countries, such as the emerging markets of India and China where there are as many as 34 million deaf people combined(3)(4). In India for example there are only 250 certified sign language translators(3), and in China such statistics are simply not kept.

With that in mind we at AllSign have decided to take a step towards trying to find a solution for this problem. 

When it came to our front end the choice was simple - React-Redux SPA package combined with Seamntic UI provides the perfect framework. On the back-end, we used Express for Nodejs and because of the limited resources in javascript for the type of project we were doing, we decided to implement a python server using flask to serve our model.(do we need to let them know model was also done in python?).Our express server also handled the general communication between our front-end and postgresql database. For the model itself we used a Mobilenet architecture pre trained on the Imagenet dataset. We used a a wide variety of datasets as well our self-generated dataset to facilitate transfer learning specific to our goals.

There are in total 152 sign languages in the world(5). Each language has their own distinct vocabluary. More than that even within one particular language there is room for dialects - for example these are all valid ways in which an individual may sign the same letter(que slide) as well as variations based on hand size, skin color, ambient lighting, background, and sign space. That means that the dataset required for this job would need to contain a truly monumental amount of labeled data. No such databases exist for sign languages(in contrast to larger fields of research such as speech recognition). Massey University Gesture dataset for example contains only 70 images per gesture. So while our model had over 99% accuracy in training in the real world testing it could only distinguish a limited amount of gestures with certainties rarely exceeding 50%. 

In 2015 a team from University of California San Diego proposed using a kinect depth mapping feature to increase the precision of a similar model(6). In 2019, Google has announced a dynamic depth API coming to android systems(7). It is our hope that going forward we will be able to apply these technologies to our project and create a useable, accurate, gesture recognition model availiable to everyone, everywhere. 

Sources: 
1)https://www.ncbi.nlm.nih.gov/pubmed/16177267
2)http://bulldog2.redlands.edu/fac/ross_mitchell/SLS6(3)306-335_Mitchell,Young,Bachleda&Karchmer(2006).pdf
3)https://www.pri.org/stories/2017-01-04/deaf-community-millions-hearing-india-only-just-beginning-sign
4)https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3663288/
5)https://en.wikipedia.org/wiki/List_of_sign_languages
6)https://arxiv.org/pdf/1509.03001.pdf
7)https://developer.android.com/training/camera2/Dynamic-depth-v1.0.pdf
