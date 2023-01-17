

let navbar = ()=>{
    return  `
    <nav>
    <div id="nav">
                <div class="nav_left">
                    <div class="dropdown">
                        <div id="hambrgerIcon">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="dropdown-content">
                            <p>Channels</p>
                            <p>Languages</p>
                            <p>Genres</p>
                        </div>
                    </div>
                    <div class="hotstar_img disneyP">
                        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="">
                    </div>
                    <div class="dropdown">
                        <p>TV</p>
                        <div class="dropdown-content">
                            <p>Other Shows</p>
                            <p>Hotstar Specials</p>
                            <p>Quix</p>
                            <p>Star Jalsha</p>
                            <p>Star Plus</p>
                            <p>Star Vijay</p>
                            <p>Star Bharat</p>
                            <p>Asianet</p>
                            <p>more...</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <p>Movies</p>
                        <div class="dropdown-content">
                            <p>Odia</p>
                            <p>Hindi</p>
                            <p>Bengali</p>
                            <p>TElugu</p>
                            <p>Malayalam</p>
                            <p>Tamil</p>
                            <p>Marathi</p>
                            <p>English</p>
                            <p>Kannada</p>
                            <p>Korean</p>
                            <p>Japanese</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <p>Sports</p>
                        <div class="dropdown-content">
                            <p>Cricket</p>
                            <p>Kabaddi</p>
                            <p>Football</p>
                            <p>Formula 1</p>
                            <p>Martial Arts</p>
                            <p>Hockey</p>
                            <p>Tennix</p>
                            <p>Khelo India</p>
                            <p>Formula E</p>
                            <p>Athletics</p>
                            <p>Gofl</p>
                        </div>
                    </div>
                    <p class="disney">Disney+</p>
                    <div class='kids_img disney'>
                        <img src="./images/Screenshot 2022-10-10 233240.png" alt="">
                    </div>
                </div>
                <div class="nav_right">
                    <input id="movie_name_inp" type="text" placeholder='Search'>
                    <div id="profile" class="dropdown">
                        <img id="profile_img" src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg" alt="profile image">
                        <div class="dropdown-content">
                            <p>WatchList</p>
                            <p>My Account</p>
                            <p id="log_out_btn">Log Out</p>
                        </div>
                    </div>
                    <button id="login_btn">LOGIN</button>

                    <div id="login_modal_outer">
                        <div id="login_modal_inner">
                            <h2>Login to Continue</h2>
                            <form id='login_form'>
                                <input id="eml" type="email" required placeholder="Email">
                                <input id="pas" type="password" required placeholder="Create password">
                                <input type="submit" value="LOGIN">
                            </form>
                            <p>don't have Account? <span id="goto_signup">Create one</span> </p>
                        </div>

                        <div id="signup_modal_inner">
                            <h2>Sign Up here</h2>
                            <form  id='signup_form'>
                                <input id="name" type="text" required placeholder="Name">
                                <input id="email" type="email" required placeholder="Email">
                                <input id="mobile" type="number" required placeholder="Mobile No.">
                                <input id="password" type="password" required placeholder="Create password">
                                <input type="submit" value="SIGN UP">
                            </form>
                            <p>Already have an Account? <span id="goto_login">Log In</span> </p>
                        </div>
                    </div>
                    <div id="suggesions_div">
                    </div>
                </div>
            </div>
        </nav>
    `
}

export default navbar;