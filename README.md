# HPE-assignment

<strong>Technologies used:</strong> Docker,Nodejs,MongoDb,mongo-express.

<strong>Start Application:</strong> Go to project directory and run docker-compose up

Apis will start on http://localhost:3000

Access MongoDb via mongo-express on http://localhost:8081/

########--- <strong>Apis to setup the system for assignment apis</strong>----#########:

<h4>Create user:</h4>
POST -> http://localhost:3000/users <br>
body:{
  "name":"YourName",
  "mobile":"your mobile"
}<br>
Copy userId from the return result for creating the order.<br>
<strong>userId =  returnResult.entity._id;</strong>

<h4>Create Order:</h4>
POST -> http://localhost:3000/orders  <br>
body:{
      "title":"some order title",
      "createdById": <strong>userId</strong>}
Copy orderId from the return result for using the assignment apis.<br>
<strong>orderId =  returnResult.entity._id;</strong>
<br>
<br>

########--- <strong>Assignment Apis</strong>----#########:

<strong>Post a comment on a Customers order.</strong><br>
POST -> http://localhost:3000/orders/{{<strong>orderId</strong>}}/comments <br>
body:{
	"text":"text for the comment",
	"commentedById":<strong>userId</strong>}
Copy commentId from the return result for creating a reply on comment.<br>
<strong>commentId =  returnResult.entity._id;</strong>


<strong>Reply to a comment on a Customers order.</strong><br>
POST -> http://localhost:3000/orders/{{<strong>orderId</strong>}}/comments/<strong>{{commentId}}</strong><br>
body:{
	"text":"text for the reply",
	"repliedById":<strong>userId</strong>}
  
<strong>Get all the comments (with replies if any) on a Customers order.<strong><br>
Get -> http://localhost:3000/orders/{{<strong>orderId</strong>}}/comments <br>

<h4>Note:</h4>
Please find the postman  api collections under postman folder in the code. <br>
Post Api docs : https://documenter.getpostman.com/view/97746/SzzgAzc9?version=latest
