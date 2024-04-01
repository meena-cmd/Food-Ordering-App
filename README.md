<!-- # react-basics

<!-- *this is our plan of app -->

 /*AppLayout
    -App
        -Header
            -Logo
            -Nav-items
                -Home
                -About Us
                -Contact Us
                -Cart
        -Body
            -search restaurant- input,search button
            -restaurant container
                -1.restaurant card
                    -img
                    -description
        -Footer
            -CopyRight
            -Links
            -Address
            -Contact
    -App
  AppLayout
*/

------css--------
 {
  font-family: "Nabla", sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  height: 80px;
  width: 1230px;
  position: relative;
}
.logo-container {
  display: inline-flex;
  flex-direction: column;
}
.logo {
  width: 70px;
  height: 60px;
}
.app-name {
  font-size: 15px;
  padding-left: 15px;
}
.nav-items {
  font-size: 20px;
  cursor: pointer;
}

.nav-items > ul {
  display: flex;
  list-style: none;
  /* padding-right: 50px; */
  height: 40px;
  justify-content: center;
  align-items: center;
}
.nav-items > ul > li {
  padding: 15px;
}

.cart {
  width: 55px;
}

body {
  margin: 20px;
  display: flex;
}

.res-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.search_container {
  padding: 10px 0px;
}
input {
    margin-top:10px;
  padding: 5px;
  width: 270px;
  border: 1px solid #b2bec3;
}
.searchbtn{
    cursor:pointer;
}

.filter{
display: flex;
margin-top:20px;
cursor: pointer;
}

.res-card {
  width: 160px;
  padding: 20px;
  margin: 40px;
}
.res-card:hover {
  border: 1px solid black;
  cursor: pointer;
}
.res-img1 {
  width: 100%;
  height: 170px;
}

h5 {
  margin: 0px;
}
h6 {
  margin: 5px 0px;
  color: darkslategrey;
  word-wrap: break-word;
}

.dummycontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;style.css
}
.dummycard {
  width: 160px;
  height: 250px;
  padding: 20px;
  margin: 40px;
  background-color: #f0f0f0;
}
.login {
  margin-left: 20px;
  border: 1px solid #b2bec3;
  cursor: pointer;
  z-index: 1000;
  top: 10px;
  right: 0px;
  width: 80px;
  padding:30px 0px;
  box-sizing: border-box;
  white-space: nowrap;
  transition: width 0.3s ease;
  border:3px solid black;
}
.menu > ul{
  list-style: none;
}

.User_box{
  border:1px solid firebrick;
  padding:20px;
}
 
