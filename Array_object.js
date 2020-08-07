const userScore = [  
{id: 1, name: 'Olarike', score: 34},  
{id: 2, name: 'Taiwo', score: 12},  
{id: 3, name: 'Kehinde', score: 27} ];
// Find where user score above 12 and return the user info.
var found= userScore .find(function(post, index) {
	if(post.score > 12 )
		return true;
});
console.log(found);
//Sort the array in descending order based on the user score.
userScore.sort(function (x, y) {
    return y.score - x.score;
});
console.log(userScore);
//Loop through the array after sort and return the each user. Note your position should start at 1.
var i, item;

for (i = 1; i < userScore.length; i++) {
  for (item in userScore[i]) {
    document.write(item + ": " + userScore[i][item] + "<br>");
  }
}
//Sum the total score of the user in the array.
const sum = userScore.map(item => item.score)
.reduce((a, b) => a + b, 0);
console.log ('sum is =' +sum);
//Merge the below array to the userScore array above:
const newUserScore = [  
{id: 5, name: 'wale', score: 34},  
{id: 6, name: 'wole', score: 12},  
{id: 4, name: 'bobby', score: 27}];
Array.prototype.push.apply(userScore,newUserScore); 
console.log(userScore);

function myFunction() {
  document.getElementById("demo").innerHTML = userScore.findIndex();
}

