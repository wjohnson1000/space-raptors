#pragma strict
var swim :float;
var rigidBody :Rigidbody2D;

function Start () {

}




function Swim() {
	if(rigidBody.tag=="Player" && Input.GetAxis("Vertical") > 0){
			rigidBody.AddForce(Vector2(0, swim));
		}
	


}