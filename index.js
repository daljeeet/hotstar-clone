import navbar from "./components/index.js";
let navData = document.querySelector("#navbar");
navData.innerHTML = navbar();
import carouselSlider from "./components/slider.js";
carouselSlider();

let homePage = document.querySelector(".disney");
homePage.addEventListener("click", function () {
  window.location.reload();
});
// movie appending starts here
// 1:make an array of objects to store details of the movies to append
let moviesData = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQzMTEyODY2Ml5BMl5BanBnXkFtZTgwMjA0MDUyMjE@._V1_SX300.jpg",
    Title: "Barfi!",
    Type: "movie",
    Year: "2012",
    imdbID: "tt2082197",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Title: "M.S. Dhoni: The Untold Story",
    Type: "movie",
    Year: "2016",
    imdbID: "tt4169250",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI3NTM1NzMyNF5BMl5BanBnXkFtZTgwOTE4NTgzNTM@._V1_SX300.jpg",
    Title: "Sanju",
    Type: "movie",
    Year: "2018",
    imdbID: "tt6452574",
  },
  {
    Poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8631/1048631-v-d2c4728b76c1",
    Title: "Cruella",
    Type: "movie",
    Year: "2021",
    imdbID: "tt3228774",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjlkZjBjZmUtNjZjNS00ODlkLWIzODYtODY0NmViN2E0MjIxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Title: "Angrezi Medium",
    Type: "movie",
    Year: "2020",
    imdbID: "tt8907986",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Title: "Thor: Love and Thunder",
    Type: "movie",
    Year: "2022",
    imdbID: "tt10648342",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_SX300.jpg",
    Title: "Life of Pi",
    Type: "movie",
    Year: "2012",
    imdbID: "tt0454876",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    Title: "Captain America: Civil War",
    Type: "movie",
    Year: "2016",
    imdbID: "tt3498820",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUwNjQ3Nzk5N15BMl5BanBnXkFtZTgwMjI4MTgzMTE@._V1_SX300.jpg",
    Title: "2 States",
    Type: "movie",
    Year: "2014",
    imdbID: "tt2372678",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2NlMmUyZWUtZmI5Yy00YWM3LTkxYzgtM2ZiOTMwNTc5ZDg0XkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_SX300.jpg",
    Title: "Raid",
    Type: "movie",
    Year: "2018",
    imdbID: "tt7363076",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2U2NzcyYWQtYWRkNi00NWE2LWFlN2UtMjY0MzJkMWQzZDI2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg",
    Title: "Shiddat",
    Type: "movie",
    Year: "2021",
    imdbID: "tt11314148",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjJjN2IyMGYtNzYwNS00YzFhLTg2N2MtMmZhNjFkNmUyYmI0XkEyXkFqcGdeQXVyNDkxMzY0Mjk@._V1_SX300.jpg",
    Title: "Bang Bang",
    Type: "movie",
    Year: "2014",
    imdbID: "tt2905838",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_SX300.jpg",
    Title: "The Jungle Book",
    Type: "movie",
    Year: "2016",
    imdbID: "tt3040964",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDhjM2E0OWMtOTA0Yy00NTNhLWEwNTEtZjhkNjNmNTdiZDA2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Title: "Neerja",
    Type: "movie",
    Year: "2016",
    imdbID: "tt5286444",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDBlMDYxMDktOTUxMS00MjcxLWE2YjQtNjNhMjNmN2Y3ZDA1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg",
    Title: "Prey",
    Type: "movie",
    Year: "2022",
    imdbID: "tt11866324",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg",
    Title: "Ford v Ferrari",
    Type: "movie",
    Year: "2019",
    imdbID: "tt1950186",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjg2ZDI2YTYtN2EwYi00YWI5LTgyMWQtMWFkYmE3NmJkOGVhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Title: "Chhichhore",
    Type: "movie",
    Year: "2019",
    imdbID: "tt9052870",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg",
    Title: "Moana",
    Type: "movie",
    Year: "2016",
    imdbID: "tt3521164",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzE5NWM5ZjAtNjAwNy00NzIxLWI3NjUtNTBiMTdjMmQzZjg3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_SX300.jpg",
    Title: "Sloshed",
    Type: "movie",
    Year: "2021",
    imdbID: "tt15335684",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    Title: "Frozen",
    Type: "movie",
    Year: "2013",
    imdbID: "tt2294629",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
    Title: "Frozen II",
    Type: "movie",
    Year: "2019",
    imdbID: "tt4520988",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
    Title: "Cars",
    Type: "movie",
    Year: "2006",
    imdbID: "tt0317219",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg",
    Title: "Cars 2",
    Type: "movie",
    Year: "2011",
    imdbID: "tt1216475",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_SX300.jpg",
    Title: "Cars 3",
    Type: "movie",
    Year: "2017",
    imdbID: "tt3606752",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",
    Title: "Encanto",
    Type: "movie",
    Year: "2021",
    imdbID: "tt2953050",
  },
];
localStorage.setItem("movies", JSON.stringify(moviesData)); // storing all the data to local storage.(for uses in another pages)

let mData = JSON.parse(localStorage.getItem("movies")); // getting the data stored in local storage;

let movieCards = document.querySelector(".movie_cards");
function showData(data) {
  // function declearation for appinding the movies to show in the div.
  movieCards.innerHTML = "";
  document.querySelector("#loder").style.display = "block";
  let getData = new Promise(function (resolve, reject) {
    // declearing promise. and getting data from backend. (here from local Storage)
    setTimeout(() => {
      if (data !== null) {
        document.querySelector("#loder").style.display = "none";
        resolve(data); // resolve function will be called if data is received. and will pass that data into the resolve function. no need to return anything here.
      } else {
        document.querySelector("#loder").style.display = "block";
        reject("Error: could not get data from server"); // rejected function will be called if the data is null and data is not recieved.
      }
    }, 1000);
  });
  getData
    .then(function (data) {
      // .then expects a function it is the resolved value,
      if (data !== undefined) {
        data.forEach((element) => {
          if (element.Poster === "N/A") {
            element.Poster =
              "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg";
          }
          let div = document.createElement("div");
          div.innerHTML = `
      <div class="cards_movie_img">
      <img src=${element.Poster} alt=${element.Title} image/>
      </div>
      <p>${element.Title}</p>
      <p>${element.Year}</p>     
      `;
          div.addEventListener("click", function () {
            console.log(element);
            showMovieDetails(element.imdbID);
          });
          movieCards.append(div);
        });
      }
    })
    .catch(function (err) {
      // .catch is a function which will called when the getData rejected value.
      movieCards.innerText = err;
    });
}

showData(mData); // calling function showData which is decleared above. which takes all data as perameter.

async function searchMovies() {
  // an asyncronous function is decleared here.
  let inpMovieName = document.querySelector("#movie_name_inp").value; // geting the value of input tag (whatever is written there.)
  let data = `https://www.omdbapi.com/?apikey=f11b76e6&s=${inpMovieName}&type=movie`; // this is the url, which will fatch all the movies from the server.
  try {
    let response = await fetch(data); // await means wait till the url fatches data from the server.

    let dta = await response.json(); // wait till the resopnse is being converted into json .

    showSuggesions(dta.Search);
    // got the desired data in dta veriable, and calling the whole appending function with new array of daata.
  } catch (err) {
    // if there is some error occured during fatching of the data, then show the error message.
    console.log(err);
  }
}

let input = document.querySelector("#movie_name_inp");

input.addEventListener("input", function () {
  debounce(searchMovies, 500);
});
let id;
function debounce(func, delay) {
  if (input.value !== "") {
    document.querySelector("#suggesions_div").style.display = "block";
  } else {
    document.querySelector("#suggesions_div").style.display = "none";
  }
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
}

let sugg_div = document.querySelector("#suggesions_div");
function showSuggesions(data) {
  sugg_div.innerHTML = "";
  let getDta = new Promise((resolve, reject) => {
    if (data !== null) {
      resolve(data);
    } else {
      reject("internal Server error");
    }
  });
  getDta
    .then((d) => {
      if (d !== undefined) {
        let load_more = document.createElement("h4");
        load_more.setAttribute("id", "load_more");
        load_more.textContent = `
       MORE RESULTS
        `;
        load_more.addEventListener("click", function (e) {
          e.target.parentNode.style.display = "none";
          document.getElementById("movie_name_inp").value = "";
          showData(d);
        });
        d.forEach((e, i) => {
          if (i < 5) {
            if (e.Poster === "N/A") {
              e.Poster =
                "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg";
            }
            let div = document.createElement("div");
            div.innerHTML = `
        <div id='sugg_div'>
        <img id='suggesions_img' src=${e.Poster} alt='${e.Title} image'>
        </div>
        <div> ${e.Title} </div>
        `;
            sugg_div.append(div, load_more);
            div.addEventListener("click", function () {
              suggestion(e, i);
            });
          }
        });
      } else {
        sugg_div.innerHTML = `
    <h4 style="color:#1f80e0 ;margin-top:200px;display:flex;justify-content:center;align-items:center;background:none;font-weight:400;font-size:1.2rem;text-decoration:underline" >Nothing to Show</h4>
    `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
function suggestion(e) {
  showMovieDetails(e.imdbID);
}
async function showMovieDetails(id) {
  let data = `https://www.omdbapi.com/?apikey=f11b76e6&i=${id}&plot=short`;
  try {
    let response = await fetch(data);

    let movieDta = await response.json();

    showMovieModal(movieDta);
  } catch (err) {
    console.log(err);
  }
}
let modal2 = document.getElementById("modal");
function showMovieModal(element) {
  modal2.style.display = "block";
  if (element.Poster === "N/A") {
    element.Poster =
      "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg";
  }
  modal2.innerHTML = `
 <div class="modal_details">
    <div>
      <div id="movie_dtl_all">
        <div class="movie_name_dir">
                        <h3>${element.Title}</h3>
                        <p>by- ${element.Director}</p>
                    </div>
                    <ul class="movie_dtls">
                        <li>${element.Year}</li>
                        <li>${element.Country}</li>
                        <li>${element.Language}</li>

                    </ul>
                    <p class="movie_actors">Actors: ${element.Actors}</p>
                    <p class="movie_rating">imdb Rating:${element.imdbRating}</p>
                    <p id="movie_about">${element.Plot}</p>
        </div>
        <div id="movie_img">
          <img src=${element.Poster}>
      </div>
  </div>
</div>
 `;
}

// adding some login and signup funcationality in the appliction.

let assBtn = document.querySelector("#assending");
let desBtn = document.querySelector("#decending");
assBtn.addEventListener("click", sortass);
function sortass() {
  mData.sort(function (a, b) {
    return a.Year - b.Year;
  });
  showData(mData);
}
desBtn.addEventListener("click", sortdess);
function sortdess() {
  mData.sort(function (a, b) {
    return b.Year - a.Year;
  });
  showData(mData);
}
let loginBtn = document.querySelector("#login_btn");
loginBtn.addEventListener("click", showLoginForm);
let modal = document.querySelector("#login_modal_outer");
function showLoginForm() {
  modal.style.display = "inherit";
}
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  } else if (e.target === modal2) {
    modal2.style.display = "none";
  }
};
let form = document.querySelector("#login_form");
form.addEventListener("submit", addDetails);
function addDetails() {}

let signupBtn = document.querySelector("#goto_signup");
signupBtn.addEventListener("click", showSignUp);
function showSignUp() {
  document.querySelector("#login_modal_inner").style.display = "none";
  document.querySelector("#signup_modal_inner").style.display = "flex";
}
let signinBtn = document.querySelector("#goto_login");
signinBtn.addEventListener("click", showSignIn);
function showSignIn() {
  document.querySelector("#signup_modal_inner").style.display = "none";
  document.querySelector("#login_modal_inner").style.display = "flex";
}

let signup = document.querySelector("#signup_form");
signup.addEventListener("submit", signupData);

function setData(name, email, mobile, pass) {
  this.name = name;
  this.email = email;
  this.mobile = mobile;
  this.pass = pass;
}
function signupData(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let pass = document.getElementById("password").value;
  let objData = new setData(name, email, mobile, pass);
  localStorage.setItem("user-data", JSON.stringify(objData));
  alert("sign up Successful go to login page.");
  showSignIn();
}

let login = document.querySelector("#login_form");
login.addEventListener("submit", loginUser);
function loginUser(e) {
  e.preventDefault();
  let details = JSON.parse(localStorage.getItem("user-data"));
  if(details){
    let email = document.getElementById("eml").value;
    let password = document.getElementById("pas").value;
    if (email == details.email && password == details.pass) {
      alert("login Successful.. welcome to Not-star");
      document.getElementById("login_modal_outer").style.display = "none";
      localStorage.setItem("login-btn", "none");
      localStorage.setItem("profile", "inherit");
      document.getElementById("login_btn").style.display = "none";
      document.getElementById("profile").style.display = "inherit";
    } else {
      alert("invelid crediantials");
      document.getElementById("eml").value = "";
      document.getElementById("pas").value = "";
    }
  }else{
    alert('No Data found please Signup')
    showSignUp()
  }
}
document.getElementById("login_btn").style.display = localStorage.getItem('login-btn');
document.getElementById("profile").style.display = localStorage.getItem('profile');

let logout = document.querySelector("#log_out_btn");
logout.addEventListener("click", logOut);

function logOut() {
  alert("log-out successful !");
  localStorage.setItem("login-btn", "inherit");
  localStorage.setItem("profile", "none");
  document.getElementById("login_btn").style.display = "inherit";
  document.getElementById("profile").style.display = "none";
}
