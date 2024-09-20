import styled from "styled-components";

export const NavStyle = styled.section`
:root {
    --font: 'Lato', sans-serif;
    --color6: #121212;
    --color3: #009b7e;
    --color5: #f7f8fc;
}

/* Estilo do header e da navegação */
header {
    background-color: var(--color6);
    padding: 20px 0;
    width: 100%;
    box-shadow: 0 1rem 6px rgba(46, 46, 46, 0.432);
    border-radius: 1rem;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav ul li {
    display: inline;
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    transition: background-color 0.3s;
}

nav ul li a:hover {
    background-color: #555;
    border-radius: 4px;
    color: var(--color3);
}

/* Responsividade */
@media screen and (max-width: 768px) {
    nav {
        flex-direction: column;
        align-items: center;
    }

    nav ul {
        flex-direction: column;
        gap: 10px;
    }
}


`