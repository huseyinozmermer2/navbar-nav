(function search() {
    const searchResults = document.querySelector(".search-results");
    const searchInput =document.querySelector(".search-input");
    
    searchInput.addEventListener("click", () => {
        searchResults.classList.add("active");
        searchInput.classList.add("active");
    });
    
    document.addEventListener("click", (e) => {
        if (!e.composedPath().includes(searchResults) &&
            !e.composedPath().includes(searchInput)){
                searchResults.classList.remove("active");
                searchInput.classList.remove("active");
            }
    
    });
})();

(function account() {
    const headerSecond = document.querySelector(".header-second");
    const btnLogin = document.querySelector("#login");
    let durum = 0;

    btnLogin.addEventListener("click", () => {
        if (durum == 0) {
            headerSecond.style.display = "flex";
            durum = 1;  
        }else{
            headerSecond.style.display = "none";
            durum = 0 ;
        }
        
    });
})();
