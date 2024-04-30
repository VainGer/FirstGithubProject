class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ` 
         <div id="mobile-header-bg"></div>
        <header class="grid" id="header">
        <button onclick="openAndCloseItemInNav('nav')" id="burgerbtn"></button>
        <nav class="overlay" id="nav">
                <a href="javascript:void(0)" class="closebtn" onclick="openAndCloseItemInNav('nav')">&times;</a>
                <ul class="overlay-content" id="ul-nav">
                        <li class="ul-item" id="search-li">
                                <input type="text" id="search" placeholder="Search" onkeyup="search()">
                                <a href="javascript:void(0)" class="mobile-item" id="closeSearch"
                                        onclick="cloesSearch()">&times;</a>
                                <div class="overlay-content">
                                        <ul id="search-list" class="dropdown">
                                                <li><a href="./philosophers_stone_movie.html">Harry
                                                                Potter and
                                                                the Philosopher Stone
                                                                movie</a>
                                                </li>
                                                <li><a href="./chamber_of_secrets_movie.html">Harry
                                                                Potter and
                                                                the Chamber of secrets
                                                                movie</a>
                                                </li>
                                                <li><a href="./prisoner_of_azkaban_movie.html">Harry
                                                                Potter and
                                                                the Prisoner of Azkaban
                                                                movie</a></li>
                                                <li><a href="./goblet_of_fire_movie.html">Harry Potter
                                                                and the
                                                                Goblet Of Fire movie</a></li>
                                                <li><a href="./order_of_the_phoenix_movie.html">Harry
                                                                Potter and
                                                                the Order of the Phoenix
                                                                movie</a></li>
                                                <li><a href="./half-blood_prince_movie.html">Harry
                                                                Potter and
                                                                the Half Blood Prince
                                                                movie</a>
                                                </li>
                                                <li><a href="./deathly_hallows_p1_movie.html">Harry
                                                                Potter and
                                                                the Deathly Hallows Part 1
                                                                movie</a></li>
                                                <li><a href="./deathly_hallows_p2_movie.html">Harry
                                                                Potter and
                                                                the Deathly Hallows Part 2
                                                                movie</a></li>
                                                <li><a href="./philosophers_stone_book.html">Harry
                                                                Potter and
                                                                the Philosopher Stone
                                                                book</a>
                                                </li>
                                                <li><a href="./chamber_of_secrets_book.html">Harry
                                                                Potter and
                                                                the Chamber of secrets
                                                                book</a>
                                                </li>
                                                <li><a href="./prisoner_of_azkaban_book.html">Harry
                                                                Potter and
                                                                the Prisoner of Azkaban
                                                                book</a></li>
                                                <li><a href="./goblet_of_fire_book.html">Harry Potter
                                                                and the
                                                                Goblet Of Fire movie</a></li>
                                                <li><a href="./order_of_the_phoenix_book.html">Harry
                                                                Potter and
                                                                the Order of the Phoenix
                                                                book</a></li>
                                                <li><a href="./half-blood_prince_book.html">Harry Potter
                                                                and the
                                                                Half Blood Prince
                                                                book</a>
                                                </li>
                                                <li><a href="./deathly_hallows_book.html">Harry Potter
                                                                and the
                                                                Deathly Hallows Part 1
                                                                book</a></li>
                                                <li><a href="./harry_potter.html">Harry Potter</a></li>
                                                <li><a href="./hermione_granger.html">Hermione
                                                                Granger</a></li>
                                                <li><a href="./ron_weasley.html">Ron Weasley</a></li>
                                                <li><a href="./neville_longbottom.html">Neville
                                                                Longbottom</a>
                                                </li>
                                                <li><a href="./luna_lovegood.html">Luna Lovegood</a>
                                                </li>
                                                <li><a href="./severus_snape.html">Severus Snape</a>
                                                </li>
                                                <li><a href="./ginny_weasley.html">Ginny Weasley</a>
                                                </li>
                                                <li><a href="./lord_voldemort.html">Lord Voldemort</a>
                                                </li>
                                                <li><a href="./gryffindor.html">Gryffindor</a></li>
                                                <li><a href="./hufflepuff.html">Hufflepuff</a></li>
                                                <li><a href="./slytherin.html">Slytherin</a></li>
                                                <li><a href="./ravenclaw.html">Ravenclaw</a></li>
                                        </ul>
                                </div>
                        </li>
                        <li class="mobile-item"><button
                                        onclick="openAndCloseItemInNav('movies-menu')">Movies</button>
                        </li>
                        <li class="secondary-overlay" id="movies-menu">
                                <a href="javascript:void(0)" class="closebtn"
                                        onclick="openAndCloseItemInNav('movies-menu')">&times;</a>
                                <button class="desktopbtn" onclick="openAndCloseItemInNav('desktop-movie')"
                                        id="moviebtn">
                                        Movies</button>
                                <ul class="overlay-content dropdown" id="desktop-movie">
                                        <li><a href="./philosophers_stone_movie.html">Harry Potter and
                                                        the
                                                        Philosopher's Stone</a>
                                        </li>
                                        <li><a href="./chamber_of_secrets_movie.html">Harry Potter and
                                                        the
                                                        Chamber of Secrets</a>
                                        </li>
                                        <li><a href="./prisoner_of_azkaban_movie.html">Harry Potter and
                                                        the
                                                        Prisoner of Azkaban</a>
                                        </li>
                                        <li><a href="./goblet_of_fire_movie.html">Harry Potter and the
                                                        Goblet of
                                                        Fire</a></li>
                                        <li><a href="./order_of_the_phoenix_movie.html">Harry Potter and
                                                        the
                                                        Order of the
                                                        Phoenix</a></li>
                                        <li><a href="./half-blood_prince_movie.html">Harry Potter and
                                                        the
                                                        Half-Blood Prince</a></li>
                                        <li><a href="./deathly_hallows_p1_movie.html">Harry Potter and
                                                        the
                                                        Deathly Hallows: Part
                                                        1</a></li>
                                        <li><a href="./deathly_hallows_p2_movie.html">Harry Potter and
                                                        the
                                                        Deathly Hallows: Part
                                                        2</a></li>
                                </ul>
                        </li>
                        <li class="mobile-item"><button
                                        onclick="openAndCloseItemInNav('books-menu')">Books</button>
                        </li>
                        <li class="secondary-overlay" id="books-menu">
                                <a href="javascript:void(0)" class="closebtn"
                                        onclick="openAndCloseItemInNav('books-menu')">&times;</a>
                                <button class="desktopbtn"
                                        onclick="openAndCloseItemInNav('desktop-books')">Books</button>
                                <ul class="overlay-content dropdown" id="desktop-books">
                                        <li><a href="./philosophers_stone_book.html">Harry Potter and
                                                        the
                                                        Philosopher's Stone</a>
                                        </li>
                                        <li><a href="./chamber_of_secrets_book.html">Harry Potter and
                                                        the
                                                        Chamber of Secrets</a>
                                        </li>
                                        <li><a href="./prisoner_of_azkaban_book.html">Harry Potter and
                                                        the
                                                        Prisoner of Azkaban</a>
                                        </li>
                                        <li><a href="./goblet_of_fire_book.html">Harry Potter and the
                                                        Goblet of
                                                        Fire</a></li>
                                        <li><a href="./order_of_the_phoenix_book.html">Harry Potter and
                                                        the
                                                        Order of the Phoenix</a>
                                        </li>
                                        <li><a href="./half-blood_prince_book.html">Harry Potter and the
                                                        Half-Blood Prince</a></li>
                                        <li><a href="./deathly_hallows_book.html">Harry Potter and the
                                                        Deathly
                                                        Hallows</a></li>
                                </ul>
                        </li>
                        <li class="mobile-item"><button
                                        onclick="openAndCloseItemInNav('house-menu')">Houses</button>
                        </li>
                        <li class="secondary-overlay" id="house-menu">
                                <a href="javascript:void(0)" class="closebtn"
                                        onclick="openAndCloseItemInNav('house-menu')">&times;</a>
                                <button class="desktopbtn"
                                        onclick="openAndCloseItemInNav('desktop-house')">Houses</button>
                                <ul class="overlay-content dropdown" id="desktop-house">
                                        <li><a href="./gryffindor.html">Gryffindor</a></li>
                                        <li><a href="./hufflepuff.html">Hufflepuff</a></li>
                                        <li><a href="./ravenclaw.html">Ravenclaw</a></li>
                                        <li><a href="./slytherin.html">Slytherin</a></li>
                                </ul>
                        </li>
                        <li class="mobile-item"><button
                                        onclick="openAndCloseItemInNav('characters-menu')">Characters</button>
                        </li>
                        <li class="secondary-overlay" id="characters-menu">
                                <a href="javascript:void(0)" class="closebtn"
                                        onclick="openAndCloseItemInNav('characters-menu')">&times;</a>
                                <button class="desktopbtn"
                                        onclick="openAndCloseItemInNav('desktop-characters')">Characters</button>
                                <ul class="overlay-content dropdown" id="desktop-characters">
                                        <li><a href="./harry_potter.html">Harry Potter</a></li>
                                        <li><a href="./hermione_granger.html">Hermione Granger</a></li>
                                        <li><a href="./ron_weasley.html">Ron Weasley</a></li>
                                        <li><a href="./ginny_weasley.html">Ginny Weasley</a></li>
                                        <li><a href="./neville_longbottom.html">Neville Longbottom</a>
                                        </li>
                                        <li><a href="./luna_lovegood.html">Luna Lovegood</a></li>
                                        <li><a href="./severus_snape.html">Severus Snape</a></li>
                                        <li><a href="./lord_voldemort.html">Lord Voldemort</a></li>
                                </ul>
                        </li>
                        <li><button class="btn" onclick="window.location.href='./gallery.html'">Gallery</button>
                        </li>
                </ul>
        </nav>
        <a class="grid" id="logo" href="./index.html"><img src="./assets/icons/logo.svg" alt=""><b>HP
                        FAN</b></a>
        <div id="login" class="grid">
                <button onclick="window.location.href='./register.html'" class="btn">SIGN UP</button>
                <button onclick="openAndCloseItemInNav('loginForm')" class="btn" id="loginbtn">LOG
                        IN</button>
                <form action="./my_page.html" id="loginForm">
                        <input type="email" name="email" id="" placeholder="YOUR-EMAIL@email.com" required><br>
                        <input type="password" name="password" id="" placeholder="PASSWORD" required><br>
                        <input type="submit" name="" id="" value="LOGIN">
                </form>
        </div>
</header>`;
    }
}
customElements.define('header-js', Header);