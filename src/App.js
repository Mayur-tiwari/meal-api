
import {useState,useEffect} from 'react';
import './App.css'

function App() {
  let [dish,setdish] = useState('');
  let [data,setdata] = useState([]);
  useEffect(()=>{ api()},[])

  function onchangehandler(e){
    setdish(e.target.value)
    console.log(dish);

  }

    function api(){
    let request = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`)
    request.then((response1)=>{
      
      return response1.json()
      
    }).then((response2)=>{
      // console.log(response2.meals);
       setdata( response2.meals )
     
     

     
  
    })}
     console.log(data);


                                 
  return (
    <div class="container">
  <header class="header-container">
    <div class="logo">
   MEALDB API
    </div>
    <div class="menu-active">
      <nav class="navbar">
        <div class="nav-item"><a href="#">Home</a></div>
        <div class="nav-item"><a href="#">About</a></div>
        <div class="nav-item"><a href="#">Contact</a></div>
        <div class="nav-item"><a href="#">Blog</a></div>
      </nav>
      <div class="user-options">
        <div class="option"><i class="fa fa-moon"></i></div>
        <div class="option"><i class="fa fa-user"></i></div>
        <div class="option"><i class="fa fa-gear"></i></div>
      </div>
    </div>
    <nav class="navbar">
      <div class="nav-item"><a href="#">Home</a></div>
      <div class="nav-item"><a href="#">About</a></div>
      <div class="nav-item"><a href="#">Contact</a></div>
      <div class="nav-item"><a href="#">Blog</a></div>
    </nav>
    <div class="user-options">
      <div class="option"><i class="fa fa-moon"></i></div>
      <div class="option"><i class="fa fa-user"></i></div>
      <div class="option"><i class="fa fa-gear"></i></div>
    </div>
    <div class="menu" onclick="activeMenu()">
      <i class="fa fa-bars"></i>
    </div>
  </header>
  
  <hr></hr>
  <div className="App">
     {/* <input onChange={onchangehandler} placeholder='enter dish name'></input>
     <a onClick={api} >Search</a>
     <div className='div'> </div> */}

     {data.map((item,index)=>{
       return(
         <div className='mealdiv' key={index}>
           <p className='meal-p'>{item.strMeal}</p>
           <img className='img' src={item.strMealThumb}></img>
            
         </div>
       )
     })}
      
   </div>
  <hr></hr>


  <footer class="footer-container">
    <div class="newsletter">
      <span>Newsletter</span><div class="email"><input type="email" placeholder="Your email"></input><i class="fa fa-paper-plane"></i></div>
    </div>
    <div class="social-links">
      <div class="link"><a href="#"><i class="fab fa-facebook"></i></a></div>
      <div class="link"><a href="#"><i class="fab fa-instagram"></i></a></div>
      <div class="link"><a href="#"><i class="fab fa-twitter"></i></a></div>
    </div>
    <div class="copyright">
      <p>&copy; Copyright, 2023 - NB</p>
    </div>
  </footer>
</div>











    // <div className="App">
    //   {/* <input onChange={onchangehandler} placeholder='enter dish name'></input>
    //   <a onClick={api} >Search</a>
    //   <div className='div'> </div> */}

    //   {data.map((item,index)=>{
    //     return(
    //       <div className='mealdiv' key={index}>
    //         <p className='meal-p'>{item.strMeal}</p>
    //         <img className='img' src={item.strMealThumb}></img>
            
    //       </div>
    //     )
    //   })}
      
    // </div>
  );
}

export default App;
