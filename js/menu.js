export function Menu() {
    const body = document.querySelector("body");

    const activeLink = (pathname) => {
        const linkHome = document.querySelector("li a#home");
        const linkUniverse = document.querySelector("li a#universe");
        const linkExploration = document.querySelector("li a#exploration");

        if (pathname == "/") {
            linkHome.classList.add("activeLink");
            linkUniverse.classList.remove("activeLink");
            linkExploration.classList.remove("activeLink");
            body.style.backgroundImage = "url(./assets/mountains-universe-1.png)";
        } else if (pathname == "/universe") {
            linkUniverse.classList.add("activeLink");
            linkHome.classList.remove("activeLink");
            linkExploration.classList.remove("activeLink");
            body.style.backgroundImage = "url(./assets/mountains-universe-2.png)";
        } else {
            linkExploration.classList.add("activeLink");
            linkUniverse.classList.remove("activeLink");
            linkHome.classList.remove("activeLink");
            body.style.backgroundImage = "url(./assets/mountains-universe-3.png)";
        }
    };

    return { activeLink };
}
